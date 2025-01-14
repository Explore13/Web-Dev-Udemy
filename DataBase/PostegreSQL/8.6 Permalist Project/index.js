import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "ToDoList",
  password: "admin",
  port: 5432,
});

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  // { id: 1, title: "Buy milk" },
  // { id: 2, title: "Finish homework" },
];


app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM todolist");
  items = result.rows;
  console.log(items);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  try {
    const item = req.body.newItem;

    await db.query("INSERT INTO todolist (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/edit", async(req, res) => {
const itemId = req.body.updatedItemId;
const item = req.body.updatedItemTitle;
try{
  await db.query("UPDATE todolist SET title = ($1) WHERE id = ($2);",[item,itemId]);
  res.redirect("/");
}catch(err)
{
  console.log(err.message);
}
});

app.post("/delete", async(req, res) => {
  const itemId = req.body.deleteItemId;
  try{
    await db.query("DELETE FROM todolist WHERE id = ($1)",[itemId]);
    res.redirect("/");
  }catch(err){
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
