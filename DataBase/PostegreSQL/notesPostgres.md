# 'pg' Module in NPM

**Install** : `npm i pg`

Here's a simple example of using the "pg" module:

```javascript
import pg from "pg";

// Create a PostgreSQL connection pool
const db = new pg.Client({
  user: "your_username",
  host: "your_host",
  database: "your_database",
  password: "your_password",
  port: 5432, // Default PostgreSQL port
});

db.connect(); // Connecting DB

// Example query
db.query("SELECT * FROM your_table", (err, result) => {
  if (err) {
    console.error("Error executing query", err);
  } else {
    console.log("Query result:", result.rows);
  }

  // Release the client to the pool
  db.end();
});
```

```javascript
// Example query to insert data

const insertQuery =
  "INSERT INTO your_table (column1, column2, column3) VALUES ($1, $2, $3) RETURNING *";
const valuesToInsert = ["value1", "value2", "value3"];

db.query(insertQuery, valuesToInsert, (err, result) => {
  if (err) {
    console.error("Error executing insert query", err);
  } else {
    console.log("Data inserted successfully. Result:", result.rows);
  }

  // Release the client to the pool

  db.end();
});
```
