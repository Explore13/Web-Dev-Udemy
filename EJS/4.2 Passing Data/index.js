import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  // res.send("Data Submitted");
  var data = req.body;
  console.log(data);
  res.render("index.ejs",{
    fName : data.fName,
    lName : data.lName,
    data : data
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});