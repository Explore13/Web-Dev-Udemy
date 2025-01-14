import Express from "express";
const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("passing_data.ejs");
});


app.listen(port, () => {
  console.log("Server Started");
});
