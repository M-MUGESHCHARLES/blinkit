const express = require("express");
const router = express.Router();
const UserSchema = require("../model/UserSchema");
const ProductSchema = require("../model/ProductSchema");

// create new user .
router.post("/signup", async (req, res) => {
  try {
    const user = new UserSchema(req.body);
    await user.save();
    console.log(`User created successfully : ${user}`);
    res.status(201).send(user);
  } catch (error) {
    console.log(`Error creating user : ${error}`);
    res.status(400).send({ error: error.message });
  }
});

// authenticate the user entered email and password with the data already stored in the database.
router.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    // check if the user exists or not
    const user = await UserSchema.findOne({ Email });
    if (!user) {
      return res.status(400).send({ error: "Invalid Email or Password" });
    }
    if (user.Password !== Password) {
      return res.status(401).send({ error: "Invalid Password" });
    }
    res.status(200).send({ message: "Login successful", user });
    console.log(`LoggedIn User Name : ${user.Name}`);

  } catch (error) {
    console.log(`Error fetching user : ${error}`);
    res.status(500).send({ error: error.message });
  }
});

// update cart & product count in the cart.
router.put("/update-cart", async (req, res) => {
  try {
    const { userID, ProductID, action } = req.body;

    if (!userID || !ProductID || !action) {
      return res.status(400).send({ error: "Invalid request data" });
    }

    const user = await UserSchema.findById(userID);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const productIndex = user.cart.findIndex(
      (item) => item.ProductID === ProductID
    );

    let ResponseMessage = '';

    if (action === "add") {
      // Add product to cart or increment its count
      if (productIndex === -1) {
        user.cart.push({ ProductID, Count: 1 });
        ResponseMessage = 'Product Added to Cart';
      } else {
        user.cart[productIndex].Count += 1;
        ResponseMessage = 'Product count incremented!';
      }

    } else if (action === "increment") {
      // Increment product count
      if (productIndex !== -1) {
        user.cart[productIndex].Count += 1;
        ResponseMessage = "Product count increased!";
      } else {
        user.cart.push({ ProductID, Count: 1 });
        ResponseMessage = "Product added to cart!";
      }

    } else if (action === "decrement") {
      // Decrement product count or remove it if count reaches 0
      if (productIndex !== -1) {
        if (user.cart[productIndex].Count > 1) {
          user.cart[productIndex].Count -= 1;
          ResponseMessage = "Product count decreased!";
        } else {
          user.cart.splice(productIndex, 1);
          ResponseMessage = "Product removed from cart!";
        }
      } else {
        return res.status(400).send({ error: "Product not found in cart" });
      }

    } else if (action === "remove") {
        // Remove product from cart
        if (productIndex !== -1) {
            user.cart.splice(productIndex, 1);
            ResponseMessage = "Product removed from cart!";
        } else {
            return res.status(400).send({ error: "Product not found in cart" });
        }

    } else {
      return res.status(400).send({ error: "Invalid action" });
    }
    
    await user.save();
    res.status(200).send({ResponseMessage, user});

  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).send({ error: "Failed to update cart" });
  }
});

// To get the stored products
router.get("/products", async (req, res) => {
  const searchText = req.query.search || "";
  try {
    const searchedProducts = await ProductSchema.find({
      $or: [
        { name: { $regex: searchText, $options: "i" } },
        { brand: { $regex: searchText, $options: "i" } },
        { category: { $regex: searchText, $options: "i" } },
      ],
    });

    res.status(200).send(searchedProducts);
  } catch (err) {
    console.error("Error searching products: ", err);
    res.status(500).send({ message: err.message });
  }
});

// To get the users data.
router.get("/api/user/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    const user = await UserSchema.findById(userID); 
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).send({user});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
