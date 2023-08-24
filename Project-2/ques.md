1. Which code snippet demonstrates the correct way to hash a password using bcrypt in an Express.js application?

A)
const bcrypt = require('bcrypt');
const password = req.body.password;
const hashedPassword = bcrypt.hashSync(password, 10);

B)
const bcrypt = require('bcrypt');
const password = req.body.password;
const hashedPassword = await bcrypt.hash(password, 10);

C)
const bcrypt = require('bcrypt');
const password = req.body.password;
const hashedPassword = bcrypt.encode(password, 10);

D)
const bcrypt = require('bcrypt');
const password = req.body.password;
const const hashedPassword = bcrypt.encrypt(password, 10);

Correct Answer: B)hash is used for Asynchronously generating a hash for the given string. It returns promise is callback is committed and you need to resolve the promise





Q2 . In an Express.js application, which code snippet demonstrates the correct way to create a JWT after user authentication?

A)
const jwt = require('jsonwebtoken');
const user = { id: user.id, username: user.username };
const token = jwt.sign(user, 'secretKey');

B)
const jwt = require('jsonwebtoken');
const user = { id: user.id, username: user.username };
const token = jwt.encode(user, 'secretKey');

C)
const jwt = require('jsonwebtoken');
const user = { id: user.id, username: user.username };
const token = jwt.generate(user, 'secretKey');

D)
const jwt = require('jsonwebtoken');
const user = { id: user.id, username: user.username };
const token = jwt.createToken(user, 'secretKey');

Correct Answer - A
explanation -  The correct method for creating a JSON Web Token (JWT) after user authentication is jwt.sign(). It takes the payload (user data) and a secret key as arguments to generate the token.





Q3. In an Express.js application, what is the purpose of using Mongoose schema and models?


A) To handle user authentication using JWT.
B) To define the routes and endpoints of the application.
C) To create an instance of the Express application.
D) To define the structure of data and interactions with the database.

Correct Answer: D) To define the structure of data and interactions with the database.

Explanation: Mongoose schema and models are used to define the structure of data and interactions with the database. They provide an abstraction layer over the database and allow you to create, read, update, and delete records



4. Which code snippet correctly defines a Mongoose schema for a "User" model with a username and password field?

A)
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});
const User = mongoose.model('User', userSchema);

B)
const mongoose = require('mongoose');
const userSchema = new Schema({
  name: String,
  pass: String
});
const User = mongoose.model('User', userSchema);

C)
const mongoose = require('mongoose');
const userSchema = new Schema({
  username: String,
  password: String
});
const User = mongoose.createModel('User', userSchema);

D)
const mongoose = require('mongoose');
const userSchema = new Schema({
  user: String,
  password: String
});
const User = mongoose.createModel('User', userSchema);


Correct Answer is A

const mongoose = require('mongoose');
const userSchema = new Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

Explanation: The correct code snippet for defining a Mongoose schema for a "User" model with the fields "username" and "password" is shown in option A. It uses the mongoose.model method to create the model.


Q5. Which code snippet demonstrates the correct way to compare a plain password with a hashed password using bcrypt for user authentication in an Express.js application?


A)
const bcrypt = require('bcrypt');
const plainPassword = req.body.password;
const hashedPassword = user.hashedPassword;
const match = await bcrypt.compare(plainPassword, hashedPassword);


B)
const bcrypt = require('bcrypt');
const plainPassword = req.body.password;
const hashedPassword = user.hashedPassword;
const match = bcrypt.verify(plainPassword, hashedPassword);

C)
const bcrypt = require('bcrypt');
const plainPassword = req.body.password;
const hashedPassword = user.hashedPassword;
const match = bcrypt.verifySync(plainPassword, hashedPassword);

Correct Answer: A)



6.Which code snippet demonstrates the correct way to use Mongoose to find a user by their username in an Express.js application?

A)
const user = User.findOne({ username: req.body.username });

B)
const user = User.find({ username: req.body.username });

C)
const user = User.findByUsername({ username: req.body.username });

D)
const user = User.get({ username: req.body.username });

Correct Answer: 
A)const user = User.findOne({ username: req.body.username });

Explanation: The correct code snippet to find a user by their username using Mongoose is shown in option A. The findOne method is used to search for a user with the specified username in the database.










