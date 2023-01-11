
CREATE TABLE STUDENTS (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

INSERT INTO STUDENTS (name, age, address) VALUES ('Анастасия', '17', 'Москва');
INSERT INTO STUDENTS (name, age, address) VALUES ('Тимофей', '18', 'Ростов');
INSERT INTO STUDENTS (name, age, address) VALUES ('Павел', '25', 'Нижний Новгород');
INSERT INTO STUDENTS (name, age, address) VALUES ('Федор', '21', 'Екатеринбург');
INSERT INTO STUDENTS (name, age, address) VALUES ('Анна', '19', 'Москва');
INSERT INTO STUDENTS (name, age, address) VALUES ('Виктория', '32', 'Краснодар');
INSERT INTO STUDENTS (name, age, address) VALUES ('Полина', '35', 'Москва');
INSERT INTO STUDENTS (name, age, address) VALUES ('Андрей', '42', 'Астрахань');
INSERT INTO STUDENTS (name, age, address) VALUES ('Виталий', '20', 'Сочи');
INSERT INTO STUDENTS (name, age, address) VALUES ('Ольга', '34', 'Петрозаводск');
INSERT INTO STUDENTS (name, age, address) VALUES ('Иван', '30', 'Норильск');
INSERT INTO STUDENTS (name, age, address) VALUES ('Лусик', '28', 'Уфа');

SELECT * 
FROM STUDENTS 
WHERE address LIKE 'Москва' AND (age BETWEEN 18 AND 29);
