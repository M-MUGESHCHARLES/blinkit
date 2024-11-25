const express = require('express');
const router = express.Router();
const UserSchema = require('../model/UserSchema');

// create new user .
router.post('/signup', async(req, res) => {
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
router.post('/login', async(req, res) => {
    try {
        const {Email, Password} = req.body;
        // check if the user exists or not 
        const user = await UserSchema.findOne({Email});
        if(!user) {
            return res.status(400).send({ error: "Invalid Email or Password" });
        }
        if (user.Password !== Password) {
            return res.status(401).send({ error : 'Invalid Password'});            
        }
        res.status(200).send({message: 'Login successful', user});
    } catch (error) {
        console.log(`Error fetching user : ${error}`);
        res.status(500).send({error: error.message});        
    }
});

// add item to the cart .
router.put('/add-to-cart', async(req, res) => {
    try {
        const {userID, item} = req.body;
        const user = await UserSchema.findByIdAndUpdate(userID, 
            { $push: { cart: item }},
            {new: true}
        );
        if(!user) {
            return res.status(400).send({ error: "User not found" });
        } 
        res.status(200).send(user);
    } catch (error) {
            console.error("Error adding item to cart:", error);
            res.status(500).send({ error: "Failed to add item to cart" });
    }
});


module.exports = router;