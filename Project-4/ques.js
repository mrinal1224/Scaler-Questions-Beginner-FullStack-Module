// Route Definition
// Question1

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// What does the above route do?
// A) Creates a new user in the database.
// B) Retrieves a list of all users from the database.
// C) Updates an existing user's information.
// D) Deletes a user from the database.

// Correct Answer: B


// Explanation: The route retrieves a list of all users from the database using the `User.find()` method.

// Question 2:

// Route Definition


const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

// What is the purpose of the above route?
// A) Retrieves a product by its ID from the database.
// B) Deletes a product from the database.
// C) Updates product information in the database.
// D) Creates a new product in the database.

// Correct Answer: D
// Explanation: The route creates a new product in the database using the `Product` model and the `save()` method.

// Question 3:

// Route Definition
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: 'Post not found' });
  }
});

// What does the route above do?
// A) Retrieves all posts from the database.
// B) Creates a new post in the database.
// C) Updates an existing post's information.
// D) Retrieves a post by its ID from the database.

// Correct Answer: D
// Explanation: The route retrieves a post by its ID from the database using the `Post.findById()` method.

// Question 4:

// Route Definition
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
});

// What is the purpose of the above route?
// A) Deletes a user from the database.
// B) Retrieves a user by their ID from the database.
// C) Updates a user's information in the database.
// D) Creates a new user in the database.

// Correct Answer: C
// Explanation: The route updates a user's information in the database using the `User.findByIdAndUpdate()` method.

