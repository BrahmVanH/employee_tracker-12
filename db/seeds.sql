INSERT INTO roles (title, salary, department_id)
VALUES ("General Manager", 343200, 007),    
       ("Sales Manager", 86573, 007), 
       ("Building Manager", 85367, 007), 
       ("Grounds Manager", 40805, 007), 
       ("Lead Engineer", 88307, 001),  
       ("Software Engineer", 74344, 001),
       ("Graphic Designer", 102800, 006),
       ("Salesperson", 65465, 003),
       ("Accountant", 55469, 002);

INSERT INTO departments (id, department_name)
VALUES  (001, "Engineering"),
        (002, "Accounting"),
        (003, "Sales"),
        (004, "Groundskeeping"),
        (005, "Propery Management"),
        (006, "Design"),
        (007, "Management");
        

INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ("Tim", "Johnson", 002, 004),
       ("Han", "Mosquite", 0007, 003),
       ("Arturo", "Moreno", null 005),
       ("Jared", "Furomsubweh", 003, 006),
       ("Janine", "Harrisburg", 003, 006),
       ("Clementine", "McLovin", null, 007),
       ("Thor", "Odinson", null, 001);






       