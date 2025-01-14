# locals

- `locals` is an object in Express.js that is used to pass local variables to the views/templates.
- When rendering a view using `res.render()`, you can pass local variables to the template by including them in the second argument as an object.
- Example of passing locals in Express.js:
```javascript
res.render("index.ejs", {
  variable1: value1,
  variable2: value2
});
```
- In the EJS template, you can access these local variables directly using `<%= variable1 %>` syntax.
- You can directly assign variables to `res.locals` within a route handler, making them available for the current request-response cycle.
- Variables set in `app.locals` are available throughout the entire application. They remain constant for all users.
- `res.locals` variables are scoped to the current request-response cycle and are not shared between different requests.
- In EJS templates, you may use conditional statements like `<% if (locals.variable1) { %>` to check the existence of a variable.
- 