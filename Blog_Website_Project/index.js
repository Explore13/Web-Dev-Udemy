import express from "express";

const app = express();
const port =3000;

app.use(express.static("public"));

app.get("/" ,(req , res) => {
    res.render("index.ejs");
});

app.get("/about" ,(req , res) => {
    res.render("index.ejs");
});
app.get("/contact" ,(req , res) => {
    res.render("index.ejs");
});
app.get("/services" ,(req , res) => {
    res.render("index.ejs");
});
app.listen(port , () => {
    console.log("Connected");
});