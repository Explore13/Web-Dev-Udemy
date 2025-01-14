# UPDATE & DELETE

## ALTER TABLE

### Problem :

- Suppose we have the date in table `visited_countries` : user_id = 1 , country_code = `FR, GB`

- Now if I try to add :
  ```sql
  INSERT INTO visited_countries (user_id, country_code) VALUES (1,'FR');
  ```
  Then, undoubtely it will be added. But it is wrong...

### Solution :

```sql
ALTER TABLE visited_countries ADD UNIQUE (user_id,country_code);
```

- Now `user_id and country_code` become `unique`, if a pair of data exists then same pair of data can not be added.

##### Now if I try to add the same value :

```sql
  INSERT INTO visited_countries (user_id, country_code) VALUES (1,'FR');
```

#### Error :

```sql
ERROR:  Key (user_id, country_code)=(1, FR) already exists.duplicate key value violates unique constraint "visited_countries_user_id_country_code_key"

ERROR:  duplicate key value violates unique constraint "visited_countries_user_id_country_code_key"
SQL state: 23505
Detail: Key (user_id, country_code)=(1, FR) already exists.
```

## DROP TABLE

```sql
DROP TABLE table_name;
```

## UPDATE

```sql
UPDATE <table_name> SET <column_to_update> = value,... WHERE <some_condition>;
```

## ORDER BY

```sql
SELECT *
FROM <some_table>
ORDER BY <some_condition>;
```

#### Example :

```sql
SELECT *
FROM users
ORDER BY id ASC;
```

- **Ascending** : `ASC`
- **Decending** : `DESC`

## DELETE DATA

```sql
DELETE FROM <table_name>
WHERE <some_condition>;
```
#### Example : 
```sql
DELETE FROM visited_countries
WHERE user_id = 1 AND country_code = 'FR';
```