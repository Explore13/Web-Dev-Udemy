# SQL (Structured Query Language)

## Introduction

SQL, or Structured Query Language, is a domain-specific language used for managing and manipulating relational databases. It provides a standardized way to interact with databases, enabling users to perform various operations such as querying data, updating records, and managing database structures.

## Key Concepts

### 1. Database

A database is a structured collection of data. It stores information in tables, which consist of rows and columns. Each table represents a specific entity, and the columns define the attributes of that entity.

### 2. SQL Statements

SQL operates through a set of statements that allow users to interact with the database. Some common SQL statements include:

- **SELECT:** Retrieve data from one or more tables.
- **INSERT:** Add new records to a table.
- **UPDATE:** Modify existing records in a table.
- **DELETE:** Remove records from a table.

### 3. Data Types

SQL supports various data types, such as `integers`, `strings`, `dates`, and more.

### 4. Constraints

Constraints are rules applied to columns to enforce data integrity. Examples include `primary key` constraints, `unique` constraints, and `foreign key` constraints.

### 5. Joins

Joins are used to combine rows from two or more tables based on a related column between them. Common types of joins include `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN`.

# CRUD Operations in SQL

CRUD stands for `Create`, `Read`, `Update`, and `Delete` — the fundamental operations for managing data in a database.

## Create (C)

### Creating a Table

To store data, you first need to create a table :

```sql
/* Syntax of Creating a Table */
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```

`Link` : https://www.w3schools.com/sql/sql_create_db.asp

### Inserting Data

After creating a table, you can insert data into it:

- _Specify both the column names and the values to be inserted_

```sql
/* Syntax to Insert value in specified column */
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

- _If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query._

```sql
/* Syntax to Insert value in all columns */
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

`Link` : https://www.w3schools.com/sql/sql_insert.asp

## Read (R)

- **Read All Data from the Table :**

```sql
SELECT * FROM table_name;
```

- **Read Data from Specified Column :**

```sql
SELECT column1, column2, ...
FROM table_name;
```

- **Read Data from a Specific Row :**

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

`Link` :

- https://www.w3schools.com/sql/sql_select.asp
- https://www.w3schools.com/sql/sql_where.asp

## Update (U)

### Updating Data

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### Altering Table (Add, Delete or Modify an Existing Table)

- To add a column in a table, use the following syntax :

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

- To delete a column in a table, use the following syntax (notice that some database systems don't allow deleting a column) :

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

`Link` : https://www.w3schools.com/sql/sql_alter.asp

## Delete (D)

- **Delete All Records :**

```sql
DELETE FROM table_name;
```

- **Delete Specified Columns/ Rows from a Table :**

```sql
DELETE FROM table_name WHERE condition;
```

`Link` : https://www.w3schools.com/sql/sql_delete.asp

# SQL PRIMARY KEY Constraint

- The PRIMARY KEY constraint uniquely identifies each record in a table.

- Primary keys must contain UNIQUE values, and cannot contain NULL values.

- A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).

**The following SQL creates a PRIMARY KEY on the "ID" column when the "`Persons`" table is created :**

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);
```

```sql
CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);
```

`Link` : https://www.w3schools.com/sql/sql_primarykey.asp

# SQL FOREIGN KEY Constraint

- The `FOREIGN KEY` constraint is used to prevent actions that would destroy links between tables.

- A `FOREIGN KEY` is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.

- The table with the foreign key is called the `child table`, and the table with the `primary key` is called the referenced or parent table.

```sql
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
```

```sql
CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    OrderNumber int NOT NULL,
    PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
);
```

`Link` : https://www.w3schools.com/sql/sql_foreignkey.asp

# INNER JOIN

The INNER JOIN keyword selects records that have matching values in both tables.

```sql
SELECT column_name(s)
FROM table_1
INNER JOIN table_2 
ON table_1.col_name = table_2.col_name;
```
`Link` : https://www.w3schools.com/sql/sql_join_inner.asp