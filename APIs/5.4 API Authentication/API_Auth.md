# API Authentication

- No Authentication
- Basic Authentication
- API Key Authorisation
- Token Based Authentication

## No Authentication

- "No authentication" in the context of APIs means that the API does not require any form of authentication or authorization to access its resources.
- We can add rate limit to prevent API to go down using IP-Address Checking.

## Basic Authentication

- Basic Authentication is a simple authentication mechanism where the user's credentials (username and password) are sent in the request headers. It's important to note that Basic Authentication sends the credentials in base64-encoded form, but it doesn't encrypt them.

- The Basic Authentication format involves including an "Authorization" header in the HTTP request. The header consists of the word "Basic" followed by a space and then the base64-encoded string of "username:password".

  Here's the basic format:

```
Authorization: Basic base64(username:password)
```

In this format:

- `base64(username:password)` is the base64 encoding of the concatenation of the username and password, separated by a colon (`:`).

Here is an example of how you might construct the Authorization header in a request:

```http
GET /api/resource HTTP/1.1
Host: example.com
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

In this example:

- `dXNlcm5hbWU6cGFzc3dvcmQ=` is the base64 encoding of the string "username:password". The actual username and password are "username" and "password" respectively.

It's important to note that Basic Authentication is not considered secure if used over an unencrypted connection (HTTP). Always use HTTPS to ensure the confidentiality of the credentials during transmission.

## API Key Authorisation : 
API key authorization is a method of securing access to an API by requiring clients to provide a unique API key along with their requests. The API key acts as a credential that identifies the client making the request, allowing the API server to validate the client's identity and determine whether it has the necessary permissions to access the requested resources.

Here is an overview of the API key authorization process:

1. **Generate API Key:**
   - The API provider generates a unique API key for each client (developer, application, or user) that needs access to the API.

2. **Include API Key in Requests:**
   - Clients include their API key in the API requests. The API key can be included in various ways:
     - As a query parameter in the URL: `https://api.example.com/data?apiKey=yourApiKey`
     - In the headers of the request: `Authorization: apiKey yourApiKey`

3. **Receive and Validate API Key:**
   - The API server receives the request and extracts the API key from the provided location (query parameter, headers, etc.).
   - The server validates the API key to ensure it is legitimate and associated with a registered client.
   - It checks whether the API key has the required permissions to perform the requested action.

4. **Authorization Decision:**
   - If the API key is valid and has the necessary permissions, the server authorizes the request, allowing the client access to the requested resources.
   - If the API key is invalid, expired, or lacks the required permissions, the server denies access and returns an appropriate error response.

5. **Logging and Monitoring:**
   - The API server may log details of each request, including the API key used, to facilitate auditing and monitoring of API usage.

6. **Key Rotation and Security Measures:**
   - To enhance security, API providers may implement key rotation policies, allowing clients to regularly update their API keys.
   - Additional security measures may include limiting the scope of each API key, setting expiration periods, and employing secure transmission methods (e.g., HTTPS) to protect key transmission.

Here's a simple example of including an API key in a request using Axios in a Node.js environment:

```javascript
const axios = require('axios');

const apiKey = 'yourApiKey';
const apiUrl = 'https://api.example.com/data';

axios.get(apiUrl, { params: { apiKey } })
  .then(response => {
    // Handle the API response
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
```

In this example, the API key is included as a query parameter in the request. The server would need to validate this key before processing the request.


## Token Based Authentication : 

Token-based authentication is a security mechanism commonly used to authenticate users and authorize their access to resources in web applications and APIs. The process involves issuing a unique token to authenticated users, which is then sent with each subsequent request to the server. The server validates the token to verify the user's identity and permissions.


# HTTP request using AXIOS for Different Auth  : 

## noAuth :

- Nothing to do to access the response

```javascript
const response = await axios.get(API_URL);
```

## basicAuth :

- We have to Authenticate using `auth: {
        username: yourUsername,
        password: yourPassword,
      }` 

````js
    const response = await axios.get(API_URL , {
      auth: {
        username: yourUsername,
        password: yourPassword,
      }
    });
````

## API_Key Authorisation : 

- We have to send the `APIKey` as params

```js
    const response = await axios.get(API_URL , {
      params: {
        score : 5,
        apiKey : yourAPIKey,
      },
    });
```

## TokenBased : 

- We have to authorize using bearer token.

```js
    const response = await axios.get(API_URL, { headers: { "Authorization": `Bearer ${yourBearerToken}` } });
```