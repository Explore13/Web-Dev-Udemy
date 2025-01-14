//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming



import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "ILoveProgramming";
var passEnter = "";
app.use(bodyParser.urlencoded({ extended: true }));

// function check(req, res, next)
// {
// passEnter = req.body["password"];
// console.log("Entered Password : ",passEnter);
// next();
// }

// app.use(check);

app.get('/' , (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/check' , (req,res) => {

    passEnter = req.body["password"];
    console.log("Entered Password : ",passEnter);


    if(password === passEnter)
    {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else
    {
    // res.send("<p> 404 not found </p>");
    res.redirect('/');
    }
    });
    

app.listen(port ,() => {
    console.log("Server Connected");
});