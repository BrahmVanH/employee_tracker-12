const inquirer = require('inquirer');


function promptUser() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Choose a license',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
            name: 'userOptions',
                
        },
        {
            type: 'input',

        }


        ])
    };






