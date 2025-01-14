# REST API - Representational State Transfer Application Programming Interface 

## Making a POST Request
- `POST` : Used to submit or create a new resource on the server.

- When making a `POST` request in a RESTful API, several components need to be considered, including the URL, request body, and configuration options. 

- Send a POST request to your server with the required parameters:

    - `URL`: The endpoint where the POST request should be sent.
    - `Body`: The data (Form-Data) you want to include in the request.
    - `Config`: Additional configuration options for the request (Headers, BasicAuth, Params, BearerToken etc.).

### Example Endpoint in Express

```js
app.post("/", async (req, res) => {
  try {
    await axios.post("URL", body, config);
    res.sendStatus(201);
  } catch (error) {
    res.status(404).send(error.response.data);
  }
});
```

## Making a PUT Request
- `PUT` : Updates or creates a resource on the server, replacing the existing one if it exists.

  
    - `URL`: The endpoint where the PUT request should be sent.
    - `Body`: The data (Form-Data) you want to include in the request.
    - `Config`: Additional configuration options for the request (Headers, BasicAuth, Params, BearerToken etc.).
    - 
### Example Endpoint in Express

```js
app.put("/", async (req, res) => {
  try {
    await axios.put("URL", body, config);
    res.sendStatus(200);
  } catch (error) {
    res.status(404).send(error.response.data);
  }
});

```

## Making a PATCH Request

- `PATCH` : Partially updates a resource on the server.


  - `URL`: The endpoint where the PATCH request should be sent.
  - `Body`: The data (Form-Data or JSON) you want to include in the request, containing only the fields you want to update.
  - `Config`: Additional configuration options for the request (Headers, BasicAuth, Params, BearerToken, etc.).

### Example Endpoint in Express

```js
app.patch("/", async (req, res) => {
  try {
    await axios.patch("URL", body, config);
    res.sendStatus(200);
  } catch (error) {
    res.status(404).send(error.response.data);
  }
});
```

## Making a DELETE Request

- `DELETE` : Removes a resource or data from the server.
  - `URL`: The endpoint where the DELETE request should be sent.
  - `Config`: Additional configuration options for the request (JsObject).

### Example Endpoint in Express

```js
app.delete("/", async (req, res) => {
  try {
    await axios.delete("URL", config);
    res.sendStatus(200); 
  } catch (error) {
    res.status(404).send(error.response.data);
  }
});
```






### Note :
- `Follow this link to know more `: https://axios-http.com/