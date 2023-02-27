INSERT INTO roles (id, title, salary)
VALUES (001, "General Manager", 343200),    
       (002, "Sales Manager", 86573), 
       (003, "Building Manager", 85367), 
       (004, "Grounds Manager", 40805), 
       (005, "Lead Engineer", 88307),  
       (006, "Software Engineer", 74344),
       (007, "Graphic Designer", 102800),
       (008, "Salesperson", 65465),
       (009, "Accountant", 55469);

INSERT INTO departments (id, department_name)
VALUES  (001, "Engineering"),
        (002, "Accounting"),
        (003, "Sales"),
        (004, "Groundskeeping"),
        (005, "Propery Management"),
        (006, "Design"),
        (007, "Management");
        

INSERT INTO employees (id, first_name, last_name, role_id, manager_)
VALUES (001, "Tim", "Johnson", "Grounds Manager", 40805, "Han"),
       (002, "Han", "Mosquite", "Building Manager", 85367, "Thor"),
       (003, "Arturo", "Moreno", "Lead Engineer", 88307, "Lucas"),
       (004, "Jared", "Furomsubweh", "Software Engineer", 74344, "Arturo"),
       (005, "Janine", "Harrisburg", "Software Engineer", 74344, "Arturo"),
       (006, "Clementine", "McLovin", "Graphic Designer", 102800, null),
       (007 "Moraine", "Van Heusen", "Salesperson", 65465, "Joe"),
       (008, "Orlando", "Blemheuber", "Salesperson", 65465, "Lucas"),
       (009, "Thor", "Odinson", "General Manager", 343200, null),
       (010, "Joe", "Ocumalvelea", "Sales Manager", 86573, "Thor"),
       (011, "Jackson", "Heffenstemph", "Accountant", 55469, "Lucas");






       