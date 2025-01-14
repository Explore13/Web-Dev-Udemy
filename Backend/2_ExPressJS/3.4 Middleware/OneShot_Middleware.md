# Middleware ( One Shot)

In the context of web development and server-side applications, a middleware is a software component that sits between the client and server in the request-response cycle. Middleware functions are responsible for processing and modifying the incoming HTTP request and outgoing HTTP response. 

- To send a file to the sever : `path` package
- Process data from request body : `body-parser` package
- Pre defined logging formats are offered by : `morgan` middleware


- Custom Middleware : `create middleware function (next method must be added)` and `app.use(function_name)`
