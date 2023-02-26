INSERT INTO role (id, title, department, salary)
VALUES (1, "General Manager", "Management", 343200),    
       (2, "Sales Manager", "Management", 86573), 
       (3, "Building Manager", "Management", 85367), 
       (4, "Grounds Manager", "Groundskeeping", 40805), 
       (5, "Lead Engineer", "Engineering", 88307),  
       (6, "Software Engineer", "Engineering", 74344),
       (7, "Graphic Designer", "Design", 102800),
       (8, "Salesperson", "Sales", 65465),
       (9, "Accountant", "Accounting", 55469),

INSERT INTO department (id, department_name)
VALUES (3, "Sales"),
       (4, "Groundskeeping"),
       (2, "Accounting"),
       (8, "Management"),
       (5, "Propery Management"),
       (1, "Engineering"),
       (7, "Design");

INSERT INTO employees (first_name, last_name, title, manager)
VALUES ("Tim", "Johnson", "Grounds Manager", "Groundskeeping", 40805, "Han"),
       ("Han", "Mosquite", "Building Manager", "Management", 85367, "Thor"),
       ("Arturo", "Moreno", "Lead Engineer", "Engineering", 88307, "Lucas"),
       ("Jared", "Furomsubweh", "Software Engineer", "Engineering", 74344, "Arturo"),
       ("Janine", "Harrisburg", "Software Engineer", "Engineering", 74344, "Arturo"),
       ("Clementine", "McLovin", "Graphic Designer", "Design", 102800, null),
       ("Moraine", "Van Heusen", "Salesperson", "Sales", 65465, "Joe"),
       ("Orlando", "Blemheuber", "Salesperson", "Sales", 65465, "Lucas"),
       ("Thor", "Odinson", "General Manager", "Management", 343200, null),
       ("Joe", "Ocumalvelea", "Sales Manager", "Management", 86573, "Thor"),
       ("Jackson", "Heffenstemph", "Accountant", "Accounting", 55469, "Lucas");




CREATE TABLE department (
    id INT NOT NULL AUTO_INCRIMENT,
    department_name VARCHAR(30) NOT NULL
    PRIMARY KEY (id)
)

CREATE TABLE role (
    id INT NOT NULL AUTO_INCRIMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY department_id
    REFERENCES department(id)
    ON DELETE SET NULL
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCRIMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY role_id
    REFERENCES role(id)
)

       