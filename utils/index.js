const inquirer = require('inquirer');


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
