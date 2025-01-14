import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "TOPSECRETWORD",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Create a PostgreSQL connection pool
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "AuthenticationAndSecurity",
  password: "admin",
  port: 5432, // Default PostgreSQL port
});

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets",(req,res)=>{
  if (req.isAuthenticated()) {
    console.log(req.isAuthenticated());
    res.render("secrets.ejs");
  }else{
    res.redirect("/login");
  }z
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const pass = req.body.password;
  console.log("Email : " + email + "\nPassword : " + pass);

  try {
    const checkUser = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (checkUser.rows.length > 0)
      res.send("User already exists. Try to login or create a new account.");
    else {
      // Password Hashing
      bcrypt.hash(pass, saltRounds, async (err, hash) => {
        console.log(hash);
        const result = await db.query(
          "INSERT INTO users(email,password) VALUES ($1,$2)",
          [email, hash]
        );
        console.log(result);
      });

      res.render("secrets.ejs");
    }
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const pass = req.body.password;
  console.log("Input Email : " + email + "\nInput Password : " + pass);

});

passport.use(new Strategy(async function verify(user,password,cb){
  console.log(username);

  try {
    const checkUserData = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [username]
    );
    console.log(checkUserData.rows);
    if (checkUserData.rows.length > 0) {
      const storedPass = checkUserData.rows[0].password;
      console.log("\nPassword in DB : " + storedPass);

      bcrypt.compare(password, storedPass, (err, result) => {
        console.log(result);
        if (err) {
          console.log("Error password matching", err.message);
        } else {
          if (result) {
            console.log("Password Matched");
            res.render("secrets.ejs");
          } else {
            console.log("Password mis-matched");
            res.render("login.ejs");
          }
        }
      });
    } else {
      res.send("Users does not exist");
    }
  } catch (err) {
    res.send(err.message);
  }
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});