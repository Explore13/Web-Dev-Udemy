import express from 'express';
const app = express();
const port = 3000;

app.get("/" , (req, res) => {
    res.send("Hare Krishna!");
});

app.get("/about" , (req, res) => {
    res.send("<h2>About Me : </h2>Surya Ghosh");
});

app.get("/contact" , (req, res) => {
res.send("<h2>Contact : </h2> 9832670211");
});

app.listen (port, () => {
    console.log("Server is running on port "+port);
} )