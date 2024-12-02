const express = require("express");
const router = express.Router();
const ProductSchema = require('../model/ProductSchema');

router.get('/', async(req, res) => {
    try {
      const products = await ProductSchema.find();
      res.status(200).send(products);
    //   console.log("Fetched data from MongoDB:", products);
    } catch (err) {
        console.log("Error fetching data : ", err);
        res.status(500).send({ message: err.message });
    }
});

router.get("/search", async (req, res) => {
  const searchText = req.query.q || ""; 
  try {
    const searchedProducts = await ProductSchema.find({
      $or: [
        { name: { $regex: searchText, $options: "i" } }, 
        { category: { $regex: searchText, $options: "i" } }, 
        { description: { $regex: searchText, $options: "i" } }, 
      ],
    });

    res.status(200).send(searchedProducts);
  } catch (err) {
    console.error("Error searching products: ", err);
    res.status(500).send({ message: err.message });
  }
});



module.exports = router;