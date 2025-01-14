# GET

## Only Route

` http://localhost:3000/random/`

- To get a random object value from the `var jokes` object array. We use `Math.random()` to generate random number and multiply with `jokes.length` to get the jokes between the jokes array's size.
- `random()` : Random is a method of `Math` object. So, we use () after that
- `length` : It is a property of an object.

## Route and Path Parameter (BaseURL/route/:pathParameter)

- We will write `"/route/:pathParameter"` at the root path section in GET Method.
- In Express.js, `req.params` is an object that contains route parameters.

```js
app.get("/users/:id", (req, res) => {
  // Access the value of the 'id' parameter using req.params.id
  const userId = req.params.id;
});
```

- `parseInt` is a built-in JavaScript function that is used to parse a string and convert it to an integer.
  - Below example, the string "123" is converted to the integer 123 using parseInt.

```js
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  // Now userId is a number
});
```

- `.find() : ` The .find( ) method in JavaScript is used to search for an element in an array that satisfies a provided testing function. It returns the first element in the array that matches the given condition, or undefined if no matching element is found.

  - `find(callback , condition );` or
  - `find((name) => codition);`

```js
const numbers = [1, 2, 3, 4, 5];

const result = numbers.find((element) => element > 2);
console.log(result); // Outputs: 3
```

##### OUR CODE and Explanation :

```js
// Define a GET route for "/jokes/:id"
app.get("/jokes/:id", (req, res) => {
  // Extract the dynamic parameter ":id" from the request parameters
  const id = parseInt(req.params.id);

  // Find a joke in the "jokes" array with a matching ID
  const jokesByID = jokes.find((joke) => joke.id === id);

  // Send the found joke as JSON in the response
  res.json(jokesByID);
});
```

- `const id = parseInt(req.params.id);`It extracts the value of the ":id" parameter from the request parameters (req.params). The parseInt function is used to convert the parameter to an integer.

- `const jokesByID = jokes.find((joke) => joke.id === id);`
  It uses the find method to look for a joke in the jokes array whose ID matches the extracted ID.

###### NOTE :

- We use `parseInt` here because :
  - if the incoming request is to `"/jokes/42"`, then req.params.id would be the string `"42"`.
  - `parseInt` will convert "42" (string) into 42(Integar).
  - If req.params.id is `"abc",` parseInt("abc") will result in `NaN `(Not a Number).
- We use `===` while checking the `id` is there or not inside the `jokes` array.
  - Value of `id` is defined as `Integer`
  - So, we convert incoming `req.params.id` into integer so that we can compare not only the values , `dataTypes` also. (=== is used to check values and dataTypes both).

## Express.js Route for Filtering Jokes by Type

We will create a route to filter jokes based on a query parameter in the GET method. In Express.js, query parameters are accessed through `req.query`.

- `filter` :  In JavaScript, the `filter` method is used to create a new array with elements that pass a certain condition.

###### Our Code and Explanation : 
```js
// Define a GET route for "/filter"
app.get("/filter", (req, res) => {
  // Extract the value of the 'type' query parameter
  const type = req.query.type;

  // Filter jokes in the "jokes" array based on the specified type
  const jokesByQuery = jokes.filter((joke) => joke.jokeType === type);

  // Send the filtered jokes as JSON in the response
  res.json(jokesByQuery);
});
```

- `const type = req.query.type;`: It extracts the value of the 'type' query parameter from the request.

- `const jokesByQuery = jokes.filter((joke) => joke.jokeType === type);`: It uses the `filter` method to create a new array containing only the jokes that match the specified 'type'.


# POST


## Express.js Route for Adding Jokes

We will create a route to add new jokes to our collection using the POST method. In Express.js, we can access the data sent in the request body using `req.body`.
Now we have to use `body-Parser` middleware (`app.use(bodyParser.urlencoded({ extended: true }));`) to access the data from request body.

###### Our Code and Explanation:

```js
// Define a POST route for "/jokes"
app.post("/jokes", (req, res) => {
  // Extract the values from the request body
  const text = req.body.text;
  const type = req.body.type;

  // Generate a new ID for the joke
  const newId = jokes.length + 1;

  // Create a new joke object
  const obj = {
    id: newId,
    jokeText: text,
    jokeType: type,
  };

  // Log the last element in the 'jokes' array
  console.log(jokes.slice(-1));

  // Add the new joke to the 'jokes' array
  jokes.push(obj);

  // Send the added joke as JSON in the response
  res.json(obj);
});
```

- `const text = req.body.text;`: It extracts the value of the 'text' property from the request body.
- `const type = req.body.type;`: It extracts the value of the 'type' property from the request body.
- `const newId = jokes.length + 1;`: It generates a new ID for the joke based on the length of the 'jokes' array.
- `const obj = { /* ... */ };`: It creates a new joke object with the extracted values and the generated ID.
- `jokes.push(obj);`: It adds the new joke object to the 'jokes' array.
- `res.json(obj);`: It sends the added joke as JSON in the response.
- `jokes.slice(-1)`: The slice method in JavaScript can be used to extract a portion of an array. In this case, `slice(-1)` is used to create a new array containing only the last element of the jokes array.

# PUT

## Express.js Route for Updating Jokes

We will create a route to update existing jokes in our collection using the PUT method. In Express.js, we can access parameters from the URL using `req.params` and data from the request body using `req.body`.

###### Our Code and Explanation:

```js
// Define a PUT route for "/jokes/:id"
app.put("/jokes/:id", (req, res) => {
  // Extract the joke ID from the URL parameter
  const getId = parseInt(req.params.id);

  // Extract new text and type from the request body
  const newText = req.body.text;
  const newType = req.body.type;

  // Create a new joke object with updated information
  const newObj = {
    id: getId,
    jokeText: newText,
    jokeType: newType,
  };

  // Find the index of the joke with the specified ID
  const jokesIndex = jokes.findIndex(joke => joke.id === getId);

  // Log the index to the console
  console.log(jokesIndex);

  // If the joke is found, update it; otherwise, respond with a 404 error
  if (jokesIndex !== -1) {
    jokes[jokesIndex] = newObj;
    res.json(jokes[jokesIndex]);
  } else {
    res.status(404).json("404 Error");
  }
});
```

- `const getId = parseInt(req.params.id);`: It extracts the joke ID from the URL parameter.
- `const newText = req.body.text;` and `const newType = req.body.type;`: They extract the new text and type from the request body.
- `const newObj = { /* ... */ };`: It creates a new joke object with the updated information.
- `const jokesIndex = jokes.findIndex(joke => joke.id === getId);`: It finds the index of the joke with the specified ID.
- If the joke is found (`jokesIndex !== -1`), it updates the joke and responds with the updated joke. Otherwise, it responds with a 404 error.

# PATCH

## Express.js Route for Partially Updating Jokes

We will create a route to partially update existing jokes in our collection using the PATCH method. In Express.js, we can access parameters from the URL using `req.params` and data from the request body using `req.body`.

###### Our Code and Explanation:

```js
// Define a PATCH route for "/jokes/:id"
app.patch("/jokes/:id", (req, res) => {
  // Extract the joke ID from the URL parameter
  const getId = parseInt(req.params.id);

  // Extract new text and type from the request body
  const newText = req.body.text;
  const newType = req.body.type;

  // Find the joke with the specified ID
  const jokesByID = jokes.find((joke) => joke.id === getId);

  // If the joke is found
  if (jokesByID) {
    // Create a new joke object with updated information
    var newObj = {
      id: getId,
      jokeText: newText || jokesByID.jokeText,
      jokeType: newType || jokesByID.jokeType,
    };

    // Find the index of the joke with the specified ID
    const jokesIndex = jokes.findIndex((joke) => joke.id === getId);

    // Update the joke in the array
    jokes[jokesIndex] = newObj;

    // Send the updated joke as a response
    res.json(jokes[jokesIndex]);
  } else {
    // If the joke is not found, respond with a 404 error
    res.json("404 Error");
  }
});
```

- `const getId = parseInt(req.params.id);`: It extracts the joke ID from the URL parameter.
- `const newText = req.body.text;` and `const newType = req.body.type;`: They extract the new text and type from the request body.
- `const jokesByID = jokes.find((joke) => joke.id === getId);`: It finds the joke with the specified ID in the `jokes` array.
- If the joke is found, a new joke object (`newObj`) is created with the updated information. The `||` operator is used to preserve the existing values if the corresponding new values are not provided.
- The joke in the array is then updated, and the updated joke is sent as a JSON response.
- If the joke is not found, a "404 Error" response is sent.

# DELETE 


## Express.js Route for Deleting Particular Jokes

We will create a route to delete a joke based on its ID using the DELETE method. In Express.js, we can access parameters from the URL using `req.params`.

###### Our Code and Explanation:

```js
// Define a DELETE route for "/jokes/:id"
app.delete("/jokes/:id", (req, res) => {
  // Extract the joke ID from the URL parameter
  const getId = parseInt(req.params.id);

  // Find the index of the joke with the specified ID
  const jokesByID = jokes.findIndex(joke => joke.id === getId);

  // If the joke is found
  if (jokesByID !== -1) {
    // Use splice to remove the joke from the array
    const deletedJoke = jokes.splice(jokesByID, 1);

    // Log the deleted joke to the console
    console.log(deletedJoke);

    // Respond with a 200 OK status
    res.sendStatus(200);
  } else {
    // If the joke is not found, respond with a 404 error
    res.status(404).json({ error: `Joke with id: ${getId} is not found` });
  }
});
```

- `const getId = parseInt(req.params.id);`: It extracts the joke ID from the URL parameter.
- `const jokesByID = jokes.findIndex(joke => joke.id === getId);`: It finds the index of the joke with the specified ID in the `jokes` array.
- If the joke is found (`jokesByID !== -1`), it uses `splice` to remove the joke from the array.
- The deleted joke is logged to the console, and a 200 OK status is sent as a response.
- If the joke is not found, it responds with a 404 error, including an error message indicating that the joke with the specified ID was not found.

**Note:** It's important to explicitly set the HTTP status code (404 in this case) when responding to a situation where a requested resource is not found. Omitting `res.status(404)` would result in a default status code of 200 OK, which might be misleading for the client. Explicitly setting the status code provides a more accurate representation of the outcome.

## `splice ` : 

The `splice` method in JavaScript is used to modify the contents of an array by adding or removing elements. Its syntax is as follows:

```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

- `start`: The index at which to start changing the array. If negative, it will begin that many elements from the end of the array. If greater than the length of the array, `start` will be set to the length of the array. If omitted, it defaults to 0.

- `deleteCount`: The number of elements to remove. If set to 0, no elements are removed. If omitted, all elements from `start` to the end of the array are removed.

- `item1, item2, ...`: The elements to add to the array, beginning at the `start` index. If you don't want to add any elements, you can omit these parameters.

The `splice` method has two main use cases:

1. **Removing Elements:**
   If you want to remove elements from an array, you provide the `start` index and the number of elements to remove (`deleteCount`). The method returns an array containing the removed elements.

   ```javascript
   const array = [1, 2, 3, 4, 5];
   const removedElements = array.splice(1, 2);
   // array is now [1, 4, 5], and removedElements is [2, 3]
   ```

2. **Inserting/Replacing Elements:**
   You can also use `splice` to insert elements into an array or replace existing elements. Specify the `start` index, set `deleteCount` to 0, and provide the elements to be inserted.

   ```javascript
   const array = [1, 2, 3, 4, 5];
   array.splice(2, 0, 6, 7);
   // array is now [1, 2, 6, 7, 3, 4, 5]
   ```

   In this example, elements 6 and 7 are inserted at index 2.

Keep in mind that the `splice` method modifies the original array and returns an array containing the removed elements. If no elements are removed (deleteCount is 0), an empty array is returned. If you want to make a copy of the array without modifying the original, you should first create a copy and then use `splice` on the copy.




## Express.js Route for Deleting All Data

We will create a route to delete all data using the `DELETE` method. The route expects an authentication key in the query parameters for authorization. 

###### Our Code and Explanation:

```js
// Define a DELETE route for "/all"
app.delete("/all", (req, res) => {
  // Extract the authentication key from the query parameters
  const keyValue = req.query.authKey;

  // Log the authentication key to the console for debugging
  console.log(keyValue);

  // Check if the provided authentication key matches the master key
  if (keyValue === masterKey) {
    // If authorized, clear the 'jokes' array
    jokes = [];

    // Respond with a 200 OK status
    res.sendStatus(200);
  } else {
    // If not authorized, respond with a 404 error and a message
    res.status(404).json(`You are not authorized to delete the data`);
  }
});
```

- `const keyValue = req.query.authKey;`: It extracts the authentication key from the query parameters.
- `console.log(keyValue);`: It logs the authentication key to the console for debugging purposes.
- If the provided authentication key matches the predefined master key (`masterKey`), it clears the 'jokes' array using `jokes = []`.
- Responds with a 200 OK status if authorized.
- If not authorized, responds with a 404 error and a message indicating that the user is not authorized to delete the data.

**Authentication Check Explanation:**

The `if (keyValue === masterKey)` condition checks whether the provided authentication key (`keyValue`) matches the predefined master key (`masterKey`). This comparison is used to authenticate or authorize the client. If the keys match, the client is considered authorized, and the route proceeds to clear the 'jokes' array. If the keys do not match, the client is not authorized, and a 404 error is returned with a corresponding message.
