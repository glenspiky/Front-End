const mongoose = require("mongoose");

/**
 * Cart Schema
 *
 * This defines the structure of a shopping cart in our database.
 * Each cart is linked to a user and contains multiple cart items.
 */
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Cart must belong to a user"],
      unique: true, // One cart per user
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: [true, "Cart item must reference a product"],
        },
        quantity: {
          type: Number,
          required: [true, "Cart item must have a quantity"],
          min: [1, "Quantity cannot be less than 1"],
          default: 1,
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    totalAmount: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

/**
 * Virtual field for total items count
 * This allows us to get the total number of items in cart
 */
cartSchema.virtual("totalItems").get(function () {
  return this.items.reduce((total, item) => total + item.quantity, 0);
});

/**
 * Virtual field for formatted total amount
 */
cartSchema.virtual("formattedTotal").get(function () {
  return `KES ${this.totalAmount.toLocaleString()}`;
});

/**
 * Pre-save middleware to calculate total amount
 * This runs automatically before saving a cart
 */
cartSchema.pre("save", async function () {
  if (this.isModified("items")) {
    // Populate product details to calculate total
    await this.populate({
      path: "items.product",
      select: "price",
    });

    // Calculate total amount
    this.totalAmount = this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }
});

/**
 * Instance method to add item to cart
 */
cartSchema.methods.addItem = function (productId, quantity = 1) {
  // Check if item already exists
  const existingItemIndex = this.items.findIndex(
    (item) => item.product.toString() === productId.toString(),
  );

  if (existingItemIndex > -1) {
    // Update quantity if item exists
    this.items[existingItemIndex].quantity += quantity;
  } else {
    // Add new item
    this.items.push({
      product: productId,
      quantity: quantity,
    });
  }

  return this.save();
};

/**
 * Instance method to remove item from cart
 */
cartSchema.methods.removeItem = function (productId) {
  this.items = this.items.filter(
    (item) => item.product.toString() !== productId.toString(),
  );
  return this.save();
};

/**
 * Instance method to update item quantity
 */
cartSchema.methods.updateItemQuantity = function (productId, quantity) {
  if (quantity <= 0) {
    return this.removeItem(productId);
  }

  const itemIndex = this.items.findIndex(
    (item) => item.product.toString() === productId.toString(),
  );

  if (itemIndex > -1) {
    this.items[itemIndex].quantity = quantity;
  }

  return this.save();
};

/**
 * Instance method to clear cart
 */
cartSchema.methods.clearCart = function () {
  this.items = [];
  this.totalAmount = 0;
  return this.save();
};

/**
 * Static method to find or create user cart
 */
cartSchema.statics.findOrCreateUserCart = async function (userId) {
  let cart = await this.findOne({ user: userId }).populate({
    path: "items.product",
    select: "title price thumbnail images stock isActive",
  });

  if (!cart) {
    cart = await this.create({
      user: userId,
      items: [],
      totalAmount: 0,
    });

    // Re-populate after creation
    cart = await this.findById(cart._id).populate({
      path: "items.product",
      select: "title price thumbnail images stock isActive",
    });
  }

  return cart;
};

/**
 * Static method to get cart with populated product details
 */
cartSchema.statics.getUserCart = async function (userId) {
  return this.findOne({
    user: userId,
    isActive: true,
  }).populate({
    path: "items.product",
    select: "title price thumbnail images stock isActive",
  });
};

module.exports = mongoose.model("Cart", cartSchema);
