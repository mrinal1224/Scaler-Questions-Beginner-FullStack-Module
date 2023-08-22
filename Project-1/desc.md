Question 1: What is the primary purpose of Authentication in web applications?
A) Formatting data for display
B) Preventing unauthorized access
C) Enhancing user interface
D) Managing database connections
Correct Answer: B) Preventing unauthorized access
Explanation: Authentication is the process of verifying the identity of a user, preventing unauthorized users from accessing protected resources.

Question 2: Which HTTP header is commonly used to send authentication credentials from the client to the server?
A) X-Request-Auth
B) Auth-Token
C) Authorization
D) Access-Control-Allow-Origin
Correct Answer: C) Authorization
Explanation: The "Authorization" header is used to send authentication credentials, typically in the form of tokens or basic authentication, from the client to the server.

Question 3: What does OAuth2 primarily focus on?
A) Data encryption
B) User authentication
C) Server optimization
D) Database querying
Correct Answer: B) User authentication
Explanation: OAuth2 is an authorization framework that focuses on user authentication and allows third-party applications limited access to a user's account.

Question 4: In Express, what is the role of a middleware?
A) Rendering HTML templates
B) Handling database operations
C) Managing client-side scripts
D) Executing intermediate processing tasks
Correct Answer: D) Executing intermediate processing tasks
Explanation: Middlewares in Express are functions that can process the request and response objects, perform tasks like authentication and authorization, and then pass control to the next middleware or route handler.

Question 5: What middleware is commonly used for handling cross-origin resource sharing (CORS) in Express applications?
A) bodyParser
B) cookieParser
C) session
D) cors
Correct Answer: D) cors
Explanation: The "cors" middleware in Express is used to handle Cross-Origin Resource Sharing, allowing controlled access to resources from different domains.

Question 6: What is the purpose of Authorization in web applications?
A) Verifying user identity
B) Blocking all incoming requests
C) Managing server resources
D) Determining user access rights
Correct Answer: D) Determining user access rights
Explanation: Authorization involves determining whether an authenticated user has the necessary permissions to access specific resources or perform certain actions.

Question 7: Which HTTP status code might be returned when an authenticated user tries to access a resource they are not authorized to?
A) 200 OK
B) 401 Unauthorized
C) 403 Forbidden
D) 404 Not Found
Correct Answer: C) 403 Forbidden
Explanation: The HTTP status code "403 Forbidden" indicates that the authenticated user does not have the necessary permissions to access the requested resource.

Question 8: In Express, where should middleware functions be added to the application's request-response cycle?
A) Before route handlers
B) After route handlers
C) Only at the end of the cycle
D) Only at the beginning of the cycle
Correct Answer: A) Before route handlers
Explanation: Middleware functions are added before route handlers in the request-response cycle. They are executed in the order they are added, allowing for preprocessing before reaching route handlers.