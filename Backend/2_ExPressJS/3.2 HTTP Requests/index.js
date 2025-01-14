import express from 'express';
const app = express();
const port = 5040;

app.get("/" , (req, res) => 
{
  // console.log(req.rawHeaders);
  res.send("<h1>Hello Surya is Here!</h1>");
});

app.get("/about" , (req, res) => {
  res.send("<h2>About Me </h2>");
});

app.get("/contact" , (req, res) => {
  res.send("<h2>Contact Me</h2>");
});

app.listen(port , () => {
  console.log(`Server is running on port number ${port}.`);
});