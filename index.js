const inquirer = require('inquirer');
// get the client
const mysql = require('mysql2');

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
                    addADepartment();
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


const viewAllDepartments = () => {

}

const viewAllRoles = () => {

}

const addDepartment = () => {

}

const addRole = () => {

}

const addAnEmployee = () => {

}

const updateEmployeeRole = () => {

}
