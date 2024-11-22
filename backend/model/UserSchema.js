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
    },
    {
        collection: 'User',
    }
);

const User = mongoose.model('User',UserSchema,);

module.exports = User;