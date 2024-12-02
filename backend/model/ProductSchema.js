const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  _id: Number,
  img: String,
  name: String,
  duration: Number,
  weight: String,
  price: Number,
  mrp: Number,
  description: String,
  brand: String,
  category: String,
}, {
    collection: 'Products',
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;