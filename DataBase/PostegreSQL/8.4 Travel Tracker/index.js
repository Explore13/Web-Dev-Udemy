import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { renderFile } from "ejs";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "admin",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let totalCountry = 0;

/* Function to get the visited countries data */

async function visitedData() {
  let countries = [];

  const result = await db.query("SELECT country_code FROM visited_countries");

  result.rows.forEach((country) => {
    // const {country_code} = country;
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await visitedData();
  console.log(countries);
  totalCountry = countries.length;

  res.render("index.ejs", {
    countries: countries,
    total: totalCountry,
  });
});

app.post("/add", async (req, res) => {
  const newCountry = req.body.country;
  try {

    await db.query(
      "INSERT INTO writtencountry (country_name) VALUES ($1)",
      [newCountry]
    );
    console.log("Entered Data : ",[newCountry]);
    const result = await db.query(
      // "SELECT country_code FROM countries WHERE country_name = $1",
      // [newCountry]

      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%'||$1||'%';",
      [newCountry.toLowerCase()]
    );

    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );

      res.redirect("/");
    } catch (err) {
      console.log("Error faced : ",err.message);
      const countries = await visitedData();
      console.log(countries);
      totalCountry = countries.length;

      res.render("index.ejs", {
        countries: countries,
        total: totalCountry,
        error:
          "Duplicate country code found in Visited_Countires table : Add something new",
      });
    }
  } catch (err) {
    console.log("Error faced : ",err.message);
    const countries = await visitedData();
    console.log(countries);
    totalCountry = countries.length;

    res.render("index.ejs", {
      countries: countries,
      total: totalCountry,
      error: "Data does not match : Try Again",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
