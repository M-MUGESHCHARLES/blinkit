const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const connectDB = require('./db/connection');
const userRoutes = require('./controller/Users');
const productsRoute = require('./controller/Products');

const app = express();
const port = 4200;

// Middleware---------------------//
app.use(cors());
app.use(express.json());

// Routes-------------------------//
app.use('/', userRoutes);
app.use('/allproducts', productsRoute);

// Home route---------------------//
app.get("/", (req, res) => {
  res.send("Hello World, Express App is running!");
});

// Start the server---------------//
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at Port: http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(`Error running Express App , ${err}`);
    process.exit(1);
});



