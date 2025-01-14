# API Request

- Promise based HTTP client for the browser and node.js

- Axios is a popular JavaScript library that simplifies the process of making HTTP requests in web applications. It is commonly used with modern front-end frameworks and libraries like React, Vue.js, and Angular. Axios supports both browsers and Node.js environments, making it a versatile choice for handling asynchronous operations.

# FormData to API Query Parameter


- Using `encodeURIComponent`

```js

// Assuming you have selected values from dropdowns
const selectedParam1 = 'value1';
const selectedParam2 = 'value2';

// Construct the URL with query parameters
const apiUrl = 'https://example.com/api/endpoint';
const urlWithQuery = `${apiUrl}?param1=${encodeURIComponent(selectedParam1)}&param2=${encodeURIComponent(selectedParam2)}`;
```
#### Example : 

```javascript
app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const apiUrl ="https://bored-api.appbrewery.com/filter";
    const urlWithQuery = `${apiUrl}?type=${encodeURIComponent(req.body.type)}&participants=${encodeURIComponent(req.body.participants)}`;
    console.log(urlWithQuery);
    const response = await axios.get(urlWithQuery);
    const result = response.data;
    const randomIndex = Math.floor(Math.random() * result.length);
    const finalResult = result[randomIndex];
    console.log(finalResult);
    res.render("index.ejs", { data: finalResult });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "No activities that match your criteria",
    });
  }
});
```
- Without using `encodeURIComponent`

```js

// Assuming you have selected values from dropdowns
const selectedParam1 = 'value1';
const selectedParam2 = 'value2';

// Construct the URL with query parameters
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${selectedParam1}&participants=${selectedParam2}`
```
#### Example : 

```javascript
app.post("/", async (req, res) => {
  console.log(req.body);
  try {

    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${req.body.type}&participants=${req.body.participants}`
    );

    const result = response.data;
    const randomIndex = Math.floor(Math.random() * result.length);
    const finalResult = result[randomIndex];
    console.log(finalResult);
    res.render("index.ejs", { data: finalResult });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "No activities that match your criteria",
    });
  }
});
```