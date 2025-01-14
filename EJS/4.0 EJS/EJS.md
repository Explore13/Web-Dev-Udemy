# EJS (Embedded JavaScript)

`EJS, which stands for Embedded JavaScript, is a popular templating language used in web development. It allows you to embed JavaScript code and variables directly within your HTML templates, making it easier to generate dynamic content on web pages. EJS templates are often used with server-side technologies like Node.js and Express.js to create dynamic web applications.`

## Note : 
- To access the value we use `<%= %>` tag.
- `res.render` method is used in web development frameworks like Express.js to render and send HTML templates to the client's browser.
- `ejs` file must be inside the views folder. If not then a `error` messege will show.


### Example : 
![Alt text](<Screenshot 2023-11-07 210143.png>)

### Answer : 
- We will use `Date()` function to get the Day Number. [ Sunday(0) to Saturday(6) ]
  

Here's a breakdown of your code:

You import the Express.js library and create an Express application.

You define a variable port and set it to 3000, which is the port your server will listen on.

You define a GET route for the root path ("/"). When a user accesses the root path, a callback function is executed.

In the callback function, you get the current date and the day number using new Date().getDay(). Day numbers are 0 for Sunday, 1 for Monday, and so on.

You initialize variables type and cmmnt with default values for a weekday and a corresponding comment. If the day is a weekend (Sunday or Saturday), these variables are updated to reflect that.

You use console.log to log a message indicating whether it's a weekday or a weekend, along with the appropriate comment.

You use the res.render method to render an EJS template file called "prac.ejs" and pass two variables, dayType and cmnt, to the template. These variables will be used in the EJS template to display the day type and comment.

Finally, you start the Express server and listen on the specified port (3000). When the server starts, it logs a message to the console.
