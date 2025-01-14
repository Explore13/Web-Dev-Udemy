# HyperText Transfer Protocol (HTTP)
HTTP, which stands for Hypertext Transfer Protocol, is the foundation of data communication on the World Wide Web. It is an application layer protocol used for transmitting and receiving data on the internet. HTTP is a protocol that defines the structure of requests and responses between a client and a web server, allowing for the transfer of text, images, videos, and other resources.
## Request Vocabulary (Methods) :
- #### GET : `(Request Resources from Server / Used to retrieve data from the server.)`
  The HTTP GET method is used to `request data from a web server`. It is a simple and idempotent request method where the client asks the server to retrieve a specific resource or information identified by a URL. GET requests are typically used for fetching web pages, images, documents, or any data without altering the server's state.
- #### POST : `(Used to send data to the server, often used for submitting forms or uploading files)`
  The HTTP POST method is used to `send data to a web server` for processing. It is often used for `submitting forms and sending data` to the server that will lead to changes in the server's state or the creation of a new resource. Unlike the GET method, POST requests are not idempotent, meaning they may have different effects each time they are sent, and they are not easily cached. POST requests are commonly used when you need to update, create, or store data on the server, such as submitting a contact form, uploading files, or making a payment.
- #### PUT : `(Replace Resource / Update a resource on the server.)`
  The HTTP PUT method is used to update or `replace an existing resource` on a web server with the data provided in the request. It is idempotent, meaning that multiple identical PUT requests should produce the same result as a single request. PUT requests are often used to modify specific resources or to create new ones if the resource does not exist at the specified URL. It is commonly employed for tasks like updating user profiles, changing settings, or replacing files on the server.
- #### PATCH : `(Patch Up a Resource /  Partial updates to an existing resource )`
  
    The HTTP PATCH method is used to make `partial updates to an existing resource on a web server`. It allows clients to modify specific parts of the resource `without replacing the entire content`. PATCH requests are idempotent, meaning they have the same effect when applied multiple times, and are typically used when you want to update or change specific fields or properties of a resource without affecting the rest of it.
- #### DELETE : `(Delete Resources / Remove a Resource)`
  The HTTP DELETE method is used to request the `removal of a resource` on a web server. When a client sends a DELETE request to a specific URL, it instructs the server to delete or remove the resource identified by that URL. DELETE requests are typically used for tasks such as deleting a file, removing a record from a database, or eliminating a specific item or object from the server.



# Nodemon
  `nodemon` is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

  - Install : `npm i nodemon`
  - To install in global ( use anywhere ) : `npm install -g nodemon`
  - Run : `nodemon [your node app]`

#### Example : 
- To run this `index.js` in localhost : 
1. `cd D:\Web Development\Backend\2_ExPressJS\3.2 HTTP Requests`
2. `nodemon .\index.js`

## Problem Faced in nodemon 

- After running `nodemon .\index.js` , I faced below errors.

```javascript
nodemon : File C:\Users\surya\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is disabled on this 
system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ nodemon .\index.js
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

## Solution : 
- Open `Windows PowerShell`
- Run this command `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
- Now `nodemon .\index.js` will work properly.

# Endpoints

- Homepage : `/` equivalent to : `localhost:3000/` or `localhost:3000`
- About Me : `/about` equivalent to : `localhost:3000/about`