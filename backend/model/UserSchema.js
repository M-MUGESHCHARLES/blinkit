const mongoose = require('mongoose');

// CartItem schema
const CartItemSchema = new mongoose.Schema(
  {
    ProductID: {
      type: Number,
      required: true,
    },
    Count: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { _id: false } // This removes the creation of an additional _id field for each cart item
);

// Wishlist schema
const WishlistSchema = new mongoose.Schema(
  {
    _id: Number,
    name: String,
    img: String,
    price: Number,
    brand: String,
  }
);

// User schema
const UserSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        Password: {
            type: String,
            required: true,
        },
        cart:{
            type: [CartItemSchema],
            default: []
        },
        wishlist:{
          type:[WishlistSchema],
          default: []
        },
    },
    { timestamps: true },
    { collection: 'Users',}
);

const User = mongoose.model('Users',UserSchema,);

module.exports = User;