const inquirer = require('inquirer');
// get the client
const mysql = require('mysql2');
const cTable = require('console.table');

// create the connection
const connection = mysql.createConnection(
  {
    host:'127.0.0.1', 
    user: 'root', 
    database: 'employee_db',
    password: 'Odinson!042920'
  }
);
// Use **this (promise().)** variation of query to expose promise.. whatever that means
/* con.promise().query("SELECT 1")
  .then( ([rows,fields]) => {
    console.log(rows);
  })
  .catch(console.log)
  .then( () => con.end());

  THIS IS A SAMPLE CODE FROM THE INTERWEBS */

/*const db = mysql.createConnection(
    {
        user: 'root',
        password: 'Odinson!042920',
        database: 'employees_db'
    },
) */


function promptUser() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Choose a license',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
            name: 'userOptions',
            validate: userInput => {
                if (userInput) {
                    return true;
                } if(!userInput) {
                    console.log("Please select an option.");
                }
            }
                
        }
        .then(function(userResponse) {
            switch (userInput.choice) {
                case "View all departments":
                    viewAllDepartments();
                break; 

                case "View all roles":
                    viewAllRoles();
                break;

                case "Add a department":
                    addDepartment();
                break;

                case "Add a role":
                    addRole();
                break;

                case "Add an employee":
                    addAnEmployee();
                break;

                case "Update an employee role":
                    updateEmployeeRole();
                break;
            }

        })


        ])
    };


var roleArray = [];

const selectRole = () => {
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) {
            console.log(err);
        }
        dbRoles = res;
        for (role of dbRoles) {
            roleArray.push(role.title)
            console.log(roleArray);
        }
    });
    return roleArray;
};

var departmentsArray = [];
const selectDepartments = () => {
    connection.query("SELECT * FROM departments", function(err, res) {
        if (err) {
            console.log(err);
        }
        dbDepartments = res;
        for (department of dbDepartments) {
            departmentsArray.push(department.title);
        }
    });
    return departmentsArray;
}

var employeeArray = [];

const selectEmployees = () => {
    connection.query("SELECT * FROM employees", function(err, res) {
        if(err) {
            console.log(err);
        }
        dbEmployees = res;
        for (employee of dbEmployees) {
            employeeArray.push(employee.title)
        }
    });
    return employeeArray;
}

    const viewAllDepartments = () => {
        connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;", 
        function(err, res) {
            if (err) { 
                console.log(err);
            }
            cTable(res)
            promptUser();
  })

}

const viewAllRoles = () => {
    connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
    function(err, res) {
        if (err) {
            console.log(err);
        }
        cTable(res);
         promptUser()
    });
};

const viewAllEmployees = () => {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function(err, res) {
        if(err) {
            console.log(err);
        }
        cTable(res);
        promptUser();
    });
};

const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'Input',
            message: 'Choose a license',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
            name: 'promptNewDepartment',
            validate: userInput => {
                if (userInput) {
                    return true;
                } if(!userInput) {
                    console.log("Please select an option.");
                }
            }
                
        }
    ]);
};

const addRole = () => {

}

const addAnEmployee = () => {
    
}

const updateEmployeeRole = () => {

}
