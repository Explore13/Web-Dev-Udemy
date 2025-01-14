# Relationship Types

- **One to Many**
- **One to One**
- **Many to Many**


### SQL Aliases : 
- SQL aliases are used to give a table, or a column in a table, a temporary name.

- Aliases are often used to make column names more readable.

- An alias only exists for the duration of that query.

- An alias is created with the `AS` keyword.

##### Example : 
```sql
SELECT CustomerID AS ID
FROM Customers;
```

- `When alias is used on column :`

```sql
SELECT column_name AS alias_name
FROM table_name;
```
- `When alias is used on table :`

```sql
SELECT column_name(s)
FROM table_name AS alias_name;
```

### AS is Optional : 

Actually, in most database languages, you can skip the AS keyword and get the same result:

`Example : `

```sql
SELECT CustomerID ID
FROM Customers;
```