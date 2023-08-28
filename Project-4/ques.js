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


// Question 5


// What is the purpose of the following Express route?

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const quizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswerIndex: Number
});

const Quiz = mongoose.model('Quiz', quizSchema);



app.get('/quiz/:id', async (req, res) => {
  try {
    const quizId = req.params.id;
    const quiz = await Quiz.findById(quizId);
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});



// A) It defines a route for creating a new quiz.
// B) It defines a route for updating a quiz.
// C) It defines a route for retrieving a quiz based on its ID.
// D) It defines a route for deleting a quiz.

// Correct Answer: C) It defines a route for retrieving a quiz based on its ID.
// Explanation: The route listens for GET requests at '/quiz/:id', where ":id" is a parameter representing the quiz's ID. It uses Mongoose to fetch the quiz from the database based on the provided ID and sends it as a JSON response.


// Question 6
// What is the purpose of the following Express route?

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publicationYear: Number
});

const Book = mongoose.model('Book', bookSchema);



app.post('/books', async (req, res) => {
  try {
    const { title, author, publicationYear } = req.body;
    const newBook = new Book({ title, author, publicationYear });
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// A) It defines a route for creating a new book.
// B) It defines a route for updating book details.
// C) It defines a route for retrieving book information.
// D) It defines a route for deleting a book.

// Correct Answer: A) It defines a route for creating a new book.
// Explanation: The route listens for POST requests at '/books' and expects the request body to contain information about a new book. It creates a new "Book" instance based on the received data, saves it to the database, and then sends the saved book as a JSON response.







