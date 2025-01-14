# Passing Data


If there is no data passed from server to ejs, what will be happend?

##### Prblm : 
`index.js : `
```javascript
import Express from "express";
const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("passing_data.ejs");
});

app.listen(port, () => {
  console.log("Server Started");
});
```

`index.ejs : `

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <% if(fruits) { %>
        <% fruits.forEach(fruit => { %>
            <li>
                <%= fruit %>
            </li>
            
        <% }) }; %>
    </ul>
</body>
</html>
```


It will show an error, as there is no data passed from server to ejs. So, `fruits` variable does not exist. It shows error.

##### Solution : 

`passing_data.js : `

```javascript
import Express from "express";
const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("passing_data.ejs");
});

app.listen(port, () => {
  console.log("Server Started");
});
```

`passing_data.ejs : `

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <% if(locals.fruits) { %>
        <% fruits.forEach(fruit => { %>
            <li>
                <%= fruit %>
            </li>
            
        <% }) }; %>
    </ul>
</body>
</html>
```

- We can use `locals` object to check the data. In this case, no error will display, it will show the blank webpage.