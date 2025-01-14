# Extra Theory

`CREATE` : 
```sql
CREATE TABLE world_food(
    id SERIAL NOT NULL PRIMARY KEY,
    country VARCHAR(45),
    rice_prod FLOAT,
    wheat_prod FLOAT
);
```

`READ` : 

i)  **SELECT ALL**
```sql
SELECT * FROM world_food;
```
ii) **SELECT COLUMN**
```sql
SELECT country FROM world_food;
```
iii) **SELECT MULTI-COLUMN**
```sql
SELECT country, wheat_prod FROM world_food;
```
iv) **WHERE Equals**
```sql
SELECT rice_prod FROM world_food WHERE country = 'United States';
```
v) **WHERE > < >= <=**
```sql
SELECT country FROM world_food WHERE wheat_prod>20;
```
vi) **WHERE LIKE**
```sql
SELECT <column> FROM <tableName> WHERE <column> LIKE <pattern>;
```
Examples  : 
```sql
SELECT country FROM world_food WHERE country LIKE 'United' || '%';
```
```sql
SELECT country FROM world_food WHERE country LIKE '%' || 'a';
```

`INSERT` : 

i) **INSERT INTO**

```sql
INSERT INTO <tableName> (<col_1>, <col_2>) VALUES (<val_1>, <val_2>);
```

Example : 
```sql
```