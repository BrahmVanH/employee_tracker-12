INSERT INTO role (id, title, department, salary)
VALUES (1, )

INSERT INTO department (id, department_name)
VALUES (3, "Sales"),
       (4, "Groundskeeping"),
       (2, "Accounting"),
       (8, "Management"),
       (5, "Propery Management"),
       (1, "Engineering"),
       (7, "Design");

INSERT INTO employees (first_name, last_name, title, department, salary, manager)
VALUES ("Tim", "Johnson", "Grounds Manager", "Groundskeeping", "40805", "Han"),
       ("Han", "Mosquite", "Building Manager", "Property Management", "85367", "Thor"),
       ("Arturo", "Moreno", "Lead Engineer", "Engineering", "88307", "Lucas"),
       ("Jared", "Furomsubweh", "Software Engineer", "74344", "Engineering", "Arturo"),
       ("Janine", "Harrisburg", "Software Engineer", "76450" "Engineering", "Arturo"),
       ("Clementine", "McLovin", "Graphic Designer", "102,800", "Design", null),
       ("Moraine", "Van Heusen", "Salesperson", "37351" "Sales", "Joe"),
       ("Orlando", "Blemheuber", "Salesperson", "65465", "Sales", "Lucas"),
       ("Thor", "Odinson", "General Manager", "343200", "Management", null),
       ("Joe", "Ocumalvelea", "Sales Manager", "86573", "Management", "Thor"),
       ("Jackson", "Heffenstemph", "Accountant", "55469", "Accounting", "Lucas");






       1, General Manager,  
       2, Sales Manager, 
       3, Building Manager, 
       4, Grounds Manager, 
       5, Lead Engineer, 
       6, Software Engineer, 
       7, Graphic Designer, 
       8, Salesperson, 
       9, Accountant, 