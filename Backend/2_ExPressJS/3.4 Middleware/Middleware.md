 # All About Middlewares and More

In the context of web development and server-side applications, a middleware is a software component that sits between the client and server in the request-response cycle. Middleware functions are responsible for processing and modifying the incoming HTTP request and outgoing HTTP response.
## Middleware's Functionality : 
- `Pre-Processing`
- `Authentication`
- `Error Handling`
- `Logging Requests`


- ### More : 

- `public` folder is used to store `static` files (like html, css, images).

# Sending Files to Server

#### At first, `import` the packages : 
- `import { dirname } from "path";`
- `import { fileURLToPath } from "url";`
- `const __dirname = dirname(fileURLToPath(import.meta.url));`

#### Sending files to `localhost:3000/`
```javascript
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
```

# How to use MiddleWares ?
- `body-parser`  is a middleware module for Express.js that simplifies the process of parsing and handling data from the request body. It helps in extracting data from incoming HTTP requests, which may contain data in various formats, such as JSON, form data, or other content types.

- At first install `body-parser` using `npm i body-parser` command in the terminal.
- Then import the package : `import bodyParser from "body-parser";`
- Mounting the middleware using `app.use(bodyParser.urlencoded({ extended: true }));`

```javascript
app.post('/submit' ,(req, res) => 
{
  const data = req.body;
  console.log(data);
})
```
- 1. `.post('/submit)` handler refers to a route handler  that is designed to handle HTTP POST requests sent to the `"/submit"` URL path.
- 2. `req.body` Access the data i.e parsed via form.
- 3. `res.send` is used to send the data as response after submitting the form.

