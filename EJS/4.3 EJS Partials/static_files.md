# Render Static Files in Nodejs
To serve static files in a Node.js application, you can use the `express.static` middleware. This middleware function is built into Express and allows you to serve static files, such as HTML, CSS, images, and JavaScript files. Here's a basic example of how to use `express.static` in a Node.js application:

1. First, install Express if you haven't already:

   ```bash
   npm install express
   ```

2. Create your Node.js application and set up the static file serving:

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   // Serve static files from the "public" directory
   app.use(express.static('public'));

   // Your other routes and middleware go here

   app.listen(port, () => {
     console.log(`Server running on port ${port}`);
   });
   ```

   In this example, the `express.static` middleware is configured to serve files from the "public" directory. You can replace `'public'` with the name of the directory where your static files are located.

3. Place your static files (HTML, CSS, images, etc.) inside the specified directory (e.g., "public").

   ```plaintext
   project-root
   ├── public
   │   ├── index.html
   │   ├── styles.css
   │   └── images
   │       └── logo.png
   ├── app.js (or your entry file)
   └── node_modules
   ```

4. Access your static files in the browser:

   - If you have an `index.html` file in the "public" directory, you can access it at `http://localhost:3000/index.html`.
   - Similarly, for other files like stylesheets or images, use the appropriate paths.

Remember to replace "public" with the actual directory name where your static files are located. This setup allows Express to serve these files directly without the need for additional route handlers for each static file.

Note: It's a common practice to use a dedicated folder like "public" or "static" for organizing static files, but you can choose any directory name that suits your project.