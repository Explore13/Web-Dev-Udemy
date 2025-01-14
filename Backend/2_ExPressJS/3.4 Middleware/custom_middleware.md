# Custom Middlewares

#### Types of Functionalities :

- Pre Processing
- Authentication
- Error
- Logging

# Logging :

Information inclusing =>

- HTTP method (e.g., GET, POST, PUT, DELETE)
- URL path
- Status code (e.g., 200 for success, 404 for not found)
- Response time
- Request headers
- Response headers
- User-agent
- IP address of the client

## Logging Middlewares :

In Express.js, `morgan` is a popular logging middleware that is used to log HTTP requests and responses.

- import the packages using `var morgan = require('morgan')` or `import morgan from "morgan"`
- Mount middleware functions using `app.use(morgan('tiny'))`
- We can use `combined` , `common`, `dev`, `short` in the place of `tiny`

```javascript
import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

##### Console :

```javascript
- nodemon .\index2.js
- Listening on port 3000
- GET / 304 - - 4.104 ms
```

### Create Custom Middlewares :

- Best Way :

```javascript
import express from "express";

const app = express();
const port = 3000;

// Your Custom Function

app.use(custom_function);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```
- Another Way : 

    - Method 1 :
  ```javascript
  app.use((req, res, next) => {
  console.log("Requested Method : ", req.method);
  console.log("Requested URL : ", req.url);
  next();
  });
  ```
  - Method 2 :
  ```javascript
  app.use(function(req, res, next){
  console.log("Requested Method : ", req.method);
  console.log("Requested URL : ", req.url);
  next();
  });
  ```


#### Exercise 3 :

![Alt text](<Screenshot 2023-10-28 001558.png>)

#### Answer (Creating custom logging middleware) :

```javascript
import express from "express";

const app = express();
const port = 3000;

// creating function (middleware function)
function logger(req, res, next) {
  console.log("Requested Method : ", req.method);
  console.log("Requested URL : ", req.url);
  next(); // never forget to add this
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

## Explanation of the code :

The provided code is a simple example of an Express.js application that demonstrates how to create a basic web server and use middleware to log information about incoming HTTP requests. Let's break down the code step by step:

1. Importing the Express.js module and setting up the Express application:

   ```javascript
   import express from "express";

   const app = express();
   const port = 3000;
   ```

   - The code begins by importing the Express.js framework using ES6 `import` syntax. It creates an instance of the Express application and assigns it to the variable `app`.
   - The variable `port` is set to 3000, specifying the port on which the server will listen.

2. Defining a custom middleware function named `logger`:

   ```javascript
   function logger(req, res, next) {
     console.log("Requested Method : ", req.method);
     console.log("Requested URL : ", req.url);
     next();
   }
   ```

   - The `logger` function is a middleware function. Middleware functions in Express have access to the `request` (`req`) and `response` (`res`) objects and the `next` function. They can process the request, modify the response, or perform other actions in between.
   - In this example, the `logger` middleware logs the HTTP method (e.g., GET, POST) and the URL path of the incoming request to the console.
   - The `next` function is called at the end of the middleware to signal that the middleware processing is complete and that the request should continue to the next middleware or route handler.

3. Applying the `logger` middleware using `app.use()`:

   ```javascript
   app.use(logger);
   ```

   - This line tells Express to use the `logger` middleware for all incoming requests. This means that before any route handler is executed, the `logger` middleware will log information about the request.

4. Defining a route handler for the root URL ("/"):

   ```javascript
   app.get("/", (req, res) => {
     res.send("Hello");
   });
   ```

   - This code sets up a route handler for HTTP GET requests to the root URL ("/"). When a client accesses the root URL, it responds with the string "Hello."

5. Starting the Express server and listening on the specified port:

   ```javascript
   app.listen(port, () => {
     console.log(`Listening on port ${port}`);
   });
   ```

   - Finally, the code starts the Express server and listens on port 3000. It also logs a message to the console indicating that the server is listening on the specified port.

In summary, this code creates a basic Express.js web server, defines a custom middleware called `logger` to log request information, applies the middleware to all incoming requests, and sets up a route handler for the root URL to respond with "Hello." When you run this application, it will log request information to the console when you access the root URL (e.g., "Requested Method: GET" and "Requested URL: /").
