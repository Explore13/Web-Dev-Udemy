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

let currentUserId = 1;

let users = [];


// ToDoLists Function to fetch the itemIds

async function todoList() {
  try {
    const result = await db.query(
      "SELECT todo_id FROM userstodo JOIN users ON users.id = user_id WHERE user_id = $1",
      [currentUserId]
    );

    console.log(
      "\n\n-------------------todoList Function-------------------------------"
    );
    console.log("All ToDo List ids : ", result.rows);
    let itemId = [];
    result.rows.forEach((itemid) => {
      itemId.push(itemid.todo_id);
    });
    return itemId;
  } catch (err) {
    console.log(err.message);
  }
}



// CurrentUser Details Function


async function currentUser() {
  try {
    const result = await db.query("SELECT * FROM users ORDER BY users.id ASC");
    users = result.rows;

    if (users.length === 0) {
      // Handle the case where no users are found, e.g., redirect to a login page.
      // You may also consider creating a default user in your database.
      console.log("No users found.");
      // currentUserId = 0;
      // Redirect or return a default user.
      currentUserId = 0;
      return undefined;
    }
    console.log(
      "\n\n-------------------CurrentUser Function-------------------------------"
    );
    // currentUserId = users[0].id;
    console.log("\nUsers : ", users);
    return users.find((user) => user.id == currentUserId);
  } catch (err) {
    console.log(err.message);
  }
}


// HomePage
app.get("/", async (req, res) => {
  console.log("\n\n-----------------New Request Started--------------\n");
  console.log("\n\nCurrentUser Id : " + currentUserId);
  const currentuser = await currentUser();
  console.log(currentuser);
  if (currentuser === undefined && currentUserId === 0) res.render("new.ejs");
  else if (currentuser === undefined) {
    currentUserId = users[0].id;
    res.redirect("/");
  } else {
    console.log("\n\n---------------log currentuser.name -------------");
    console.log("\n\nCurrent User Name : ", currentuser.name);
    const todoIds = await todoList();
    console.log(
      "\n\n---------------log todoIds and todoItems-------------\n\n"
    );
    console.log("Todo ids for currentuser : ", todoIds);

    const result = await db.query(
      "SELECT todolist.id,todolist.title FROM todolist JOIN userstodo ON todolist.id = userstodo.todo_id WHERE userstodo.todo_id = ANY($1) ORDER BY todolist.id ASC",
      [todoIds]
    );
    items = result.rows;
    console.log("\nItems for currentuser : ", items);

    res.render("index.ejs", {
      listTitle: "Today",
      users: users,
      listItems: items,
      currentUserName: currentuser.name,
      // color: currentuser.color,
    });
  }
});



// Add a toDo

app.post("/add", async (req, res) => {
  try {
    const item = req.body.newItem;
    const todolistType = req.body

    await db.query("INSERT INTO todolist (title) VALUES ($1)", [item]);

    try {
      const result = await db.query(
        "SELECT id FROM todolist WHERE LOWER(title) LIKE '%' || $1 || '%';",
        [item.toLowerCase()]
      );

      const newaddedId = result.rows.length - 1;
      const newId = result.rows[newaddedId];
      console.log("New iDs : ", newId);
      try {
        await db.query(
          "INSERT INTO userstodo (todo_id, user_id) VALUES ($1, $2)",
          [newId.id, currentUserId]
        );
        res.redirect("/");
      } catch (err) {
        console.log(err.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  } catch (err) {
    console.log(err.message);
  }
});




// Edit ToDo

app.post("/edit", async (req, res) => {
  const itemId = req.body.updatedItemId;
  const item = req.body.updatedItemTitle;
  console.log("Item id : " + itemId + " item : " + item);
  try {
    await db.query("UPDATE todolist SET title = ($1) WHERE id = ($2);", [
      item,
      itemId,
    ]);
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
  }
});

// Delete a ToDo

app.post("/delete", async (req, res) => {
  const itemId = req.body.deleteItemId;
  console.log("Delete the id : " + itemId);
  try {
    await db.query("DELETE FROM userstodo WHERE todo_id = $1", [itemId]);
    await db.query("DELETE FROM todolist WHERE id = ($1)", [itemId]);

    res.redirect("/");
  } catch (err) {
    console.log(err.message);
  }
});



// Fetching Users

app.post("/user", async (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs");
  } else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
});

// Adding new users
app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html

  const newData = req.body;
  const name = newData.name;
  let color;
  if (newData.color == null) color = "LightPink";
  else color = newData.color;

  const result = await db.query(
    "INSERT INTO users (name,color) VALUES ($1, $2) RETURNING *;",
    [name, color]
  );
  console.log(result.rows);
  const id = result.rows[0].id;
  console.log(id);
  currentUserId = id;
  res.redirect("/");
});




// Getting usersList in manage users page

app.get("/usersList",async(req,res)=>{
try{
  const result = await db.query("SELECT * FROM users ORDER BY users.id ASC");
  res.render("updateUserDetails.ejs",{
    usersList : result.rows,
  });
}catch(err)
{
  console.log(err.message);
}
});



// Edit User Details in Manage Users

app.post("/editUser", async (req, res) => {
  const userId = req.body.updatedUserId;
  const userName = req.body.updatedUserName;
  console.log("User id : " + userId + " item : " + userName);
  try {
    await db.query("UPDATE users SET name = ($1) WHERE id = ($2);", [
      userName,
      userId,
    ]);
    res.redirect("/usersList");
  } catch (err) {
    console.log(err.message);
  }
});



// Delete users from db

app.post("/deleteUser",async(req,res)=>{
  const userId = req.body.deleteUserId;
  console.log("Delete the UserId : " + userId);
  try {
    await db.query("DELETE FROM userstodo WHERE user_id = $1", [userId]);
    await db.query("DELETE FROM users WHERE id = ($1)", [userId]);

    res.redirect("/usersList");
  } catch (err) {
    console.log(err.message);
  }

});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
