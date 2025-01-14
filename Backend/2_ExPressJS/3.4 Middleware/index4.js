import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/' , (req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit' , (req,res) =>{
const data = req.body;
const bandName= data.street+data.pet;
res.send(`<h1>Band Name : </h1> <h2>${bandName} &#9996 </h2>`);

});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
