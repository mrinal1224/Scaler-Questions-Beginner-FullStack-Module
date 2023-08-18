
Question 1: What does MVC stand for in web development?
Options:
a) Model-View-Creator
b) Model-View-Controller
c) Model-Controller-View
d) Model-View-Component

Correct Answer: b) Model-View-Controller
Explanation: MVC stands for Model-View-Controller. It's a software architectural pattern where the "Model" manages data and business logic, the "View" handles presentation and user interface, and the "Controller" manages communication between the Model and View, as well as user input handling.

Question 2: In the MVC architecture, what is the responsibility of the "Model"?
Options:
a) Handling user interface logic
b) Controlling the application flow
c) Managing data and business logic
d) Rendering data on the client-side

Correct Answer: c) Managing data and business logic
Explanation: The "Model" is responsible for managing data and business logic. It encapsulates data-related operations, validates data, and interacts with the database. It doesn't deal with user interface or rendering concerns.

Question 3: Which component of MVC is responsible for interacting with the database and performing CRUD operations?
Options:
a) Model
b) View
c) Controller
d) Middleware

Correct Answer: a) Model
Explanation: The "Model" component interacts with the database and performs CRUD operations (Create, Read, Update, Delete). It encapsulates data-related logic and ensures proper data management and manipulation.

Question 4: In Express, which HTTP method is typically used to retrieve data from the server?
Options:
a) GET
b) POST
c) PUT
d) DELETE

Correct Answer: a) GET
Explanation: The HTTP method "GET" is used to retrieve data from the server. It's a safe and idempotent operation that doesn't modify data on the server.

Question 5: Which Express function is used to handle incoming HTTP GET requests?
Options:
a) express.get()
b) app.get()
c) router.get()
d) server.handleGet()

Correct Answer: b) app.get()
Explanation: In Express, the "app.get()" function is used to define a route that handles incoming HTTP GET requests. It's used to specify what should happen when a client requests a particular URL.

Question 6: What does CRUD stand for in the context of database operations?
Options:
a) Create, Read, Update, Deploy
b) Connect, Retrieve, Use, Delete
c) Copy, Render, Update, Delete
d) Create, Read, Update, Delete

Correct Answer: d) Create, Read, Update, Delete
Explanation: CRUD stands for Create, Read, Update, Delete. These are the fundamental operations for manipulating data in a database.

Question 7: Which HTTP status code indicates a successful response in Express after a POST request to create a new resource?
Options:
a) 200 OK
b) 201 Created
c) 204 No Content
d) 400 Bad Request

Correct Answer: b) 201 Created
Explanation: The HTTP status code "201 Created" indicates that a new resource has been successfully created as a result of a POST request.

Question 8: Which Express method is used to update an existing resource on the server?
Options:
a) app.update()
b) router.modify()
c) app.put()
d) app.patch()

Correct Answer: c) app.put()
Explanation: In Express, the "app.put()" method is used to update an existing resource on the server. It's commonly used for handling HTTP PUT requests.

Question 9: In the MVC pattern, where does the "Controller" receive user input from?
Options:
a) Database queries
b) User interface
c) Model interactions
d) Server configuration

Correct Answer: b) User interface
Explanation: The "Controller" in the MVC pattern receives user input from the user interface. It processes user actions and translates them into commands for the Model and View.

Question 10: Which Express middleware is commonly used to parse incoming JSON data from requests?
Options:
a) express.jsonParser()
b) bodyParser.json()
c) app.jsonMiddleware()
d) router.jsonParser()

Correct Answer: b) bodyParser.json()
Explanation: The "bodyParser.json()" middleware in Express is used to parse incoming JSON data from requests. It converts the JSON data in the request body into a JavaScript object that can be accessed in the route handlers.