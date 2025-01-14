CREATE TABLE todolist (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  color VARCHAR(15) 
);

CREATE TABLE userstodo(
  id SERIAL PRIMARY KEY,
  todo_id INTEGER REFERENCES todolist(id),
  user_id INTEGER REFERENCES users(id)
);



ALTER TABLE todolist
ADD todolistType VARCHAR(100) NOT NULL;