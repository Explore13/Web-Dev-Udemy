# What makes an API Restful?
1. ``HTTP Method`` : It used standard HTTP Methods(GET, POST, PUT, PATCH, DELETE).
2. `JSON Output `: This is the representation part of the representational state transfer. Resources are represented in a specific format like JSON and that is send to the Client.
3. `Client-Server` : 
- The next rule is that clients and servers in restful APIs are completely separate.
- They are not on the same system or in the same file and they're able to message each other over a network.
  
4. `Stateless ` : 
- Each request from the client to the server should contain all the information
- Every single time the client makes a request to the server, it contains all of the information that the server needs in order to figure out what to respond back 

5. `Resource-Based` :  API that is centered around resources and uses a `URI(unique resource identifier),` also known as a resource locator.