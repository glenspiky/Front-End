const mongoose = require("mongoose");

//! product schema

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      trim: true, //remove whitespace
      maxlenght: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
      default: 0,
    },
    externalId: {
      type: String,
      unique: true, // Ensure no duplicate external products
      sparse: true, // Allow null values for non-external products
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: [
        "electronics",
        "clothing",
        "food",
        "books",
        "home",
        "sports",
        "beauty",
        "toys",
        "other",
      ],
    },
    images: {
      type: [String],
      required: [true, "At least one product image is required"],
      validate: {
        validator: (images) => {
          return images.length > 0;
        },
        message: "Product must have at least one image",
      },
    },
    thumbnail: {
      type: String,
      required: [true, "Product thumbnail is required"],
    },
    stock: {
      type: Number,
      required: [true, "Product stock is required"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    rating: {
      type: Number,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be more than 5"],
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  },
);

/**
 * Virtual field for formatted price
 * This allows me to format price without storing it in database
 */
productSchema.virtual("formatedPrice").get(() => {
  return `KES ${this.price.toLocaleString}`;
});

// * Instance method to check if product is in stock
productSchema.methods.isInStock = () => {
  return this.stock > 0 && this.isActive;
};
// * Static method to find active products
productSchema.statics.findActive=()=>{
    return this.find({isActive:true})
}
module.exports=mongoose.model("Product",productSchema)