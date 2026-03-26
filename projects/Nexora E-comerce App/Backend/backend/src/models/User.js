const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/**
 * User Schema
 *
 * This defines the structure of a user account.
 * Passwords are automatically hashed before saving.
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      unique: true, // No duplicate emails
      lowercase: true, // Convert to lowercase
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "User password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      select: false, // Don't return password by default
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * Pre-save middleware to hash password
 * This runs automatically before saving a user
 */

userSchema.pre("save", async () => {
  // Only hash password if it was modified
  if (!this.isModified("password")) {
    return;
  }
  try {
    // Hash password with salt rounds of 12
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw error;
  }
});
/**
 * Instance method to compare passwords
 * Used for login authentication
 */
userSchema.methods.comparePassword = async () => {
  try {
    return bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};
/**
 * Instance method to get user profile without sensitive data
 */
userSchema.methods.getProfile = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};
/**
 * Static method to find users by email (for login)
 */
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email }).select("+password");
};
module.exports = mongoose.model("user", userSchema);
