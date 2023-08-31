// Question 1

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/create', (req, res) => {
    // Code to create a new resource
});

app.put('/update/:id', (req, res) => {
    // Code to update a resource by ID
});

app.delete('/delete/:id', (req, res) => {
    // Code to delete a resource by ID
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// What is the purpose of the above code snippet?

// A) Rendering HTML content
// B) Handling incoming HTTP requests
// C) Establishing a WebSocket connection
// D) Connecting to a remote database

// Correct Answer: B) Handling incoming HTTP requests

// Explanation: The code defines routes using Express for handling various HTTP methods like GET, POST, PUT, and DELETE. This allows the application to handle incoming requests and perform corresponding actions such as creating, updating, or deleting resources.


// Question 2


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// In the given code snippet, what is the purpose of the userSchema?

// A) Defining Express routes
// B) Configuring server authentication
// C) Defining the structure of user data
// D) Creating a new MongoDB collection

// Correct Answer: C) Defining the structure of user data

// Explanation: The userSchema defines the structure of user data with properties like username, email, and age. This schema is used to create documents in the MongoDB collection when using the User model.


// Question 3:

// What is the purpose of the Product model in the given code snippet?


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

const Product = mongoose.model('Product', productSchema);

// A) Creating Express middleware
// B) Handling user authentication
// C) Interacting with the database
// D) Defining a route for product listing

// Correct Answer: C) Interacting with the database

// Explanation: The Product model allows you to interact with the database by providing methods to create, read, update, and delete product documents based on the defined schema.

// Question 4


// What is the purpose of this Express route?

app.post('/products', (req, res) => {
    const { name, price, category } = req.body;
    const newProduct = new Product({ name, price, category });
    
    newProduct.save((err, product) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(product);
        }
    });
});

// A) Updating a product
// B) Creating a new product
// C) Deleting a product
// D) Retrieving product information

// Correct Answer: B) Creating a new product

// Explanation: The code defines a route to handle HTTP POST requests for creating new products. It extracts data from the request body, creates a new Product instance, and then saves it to the database.


// Question 5

// What does this route in Express do?


app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    User.findById(userId, (err, user) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    });
});




// A) Deletes a user based on their ID
// B) Retrieves user details using their ID
// C) Creates a new user with a specific ID
// D) Updates user information for a given ID

// Correct Answer: B) Retrieves user details using their ID

// Explanation: The route uses a GET request to retrieve user details by their ID from the MongoDB collection. It uses the findById method provided by Mongoose to fetch the user document.



// Question 6
// What does this route in Express accomplish?

app.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const { name, price, category } = req.body;

    Product.findByIdAndUpdate(
        productId,
        { name, price, category },
        { new: true },
        (err, updatedProduct) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json(updatedProduct);
            }
        }
    );
});


// A) Deletes a product using its ID
// B) Retrieves product details by ID
// C) Creates a new product with a specific ID
// D) Updates product information for a given ID

// Correct Answer: D) Updates product information for a given ID

// Explanation: The route uses a PUT request to update product information based on the provided product ID. It uses the findByIdAndUpdate method to modify the existing product's attributes.
