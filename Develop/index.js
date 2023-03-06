const inquirer = require('inquirer');
const fs = require('fs');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role');

const primaryQuestions = [{
    type: 'list',
    choices: ['View all employees', 'Add an employee', 'View all roles', 'Add a role', 'Update an employee role', 'View all departments', 'Add a department'],
    message: 'What would you like to do?',
    name: 'primaryQuestions',
}]

const addEmployee = [{
    type: 'input',
    message: 'What is the employee id?',
    name: 'addEmployeeId',
},
{
    type: 'input',
    message: 'What is the their first name?',
    name: 'addEmployeeFirstName',
},
{
    type: 'input',
    message: 'What is the their last name?',
    name: 'addEmployeeLastName',
},
{
    type: 'input',
    message: 'What is their role ID?',
    name: 'addEmployeeRoleId',
},
{
    type: 'input',
    message: 'What is their department ID?',
    name: 'addEmployeeDepartmentId',
},
];

// const viewEmployee = [ {
//     /////ADD//////
// },

// ];

const addRole = [{
    type: 'input',
    message: 'What is the role ID?',
    name: 'addRoleId',
},
{
    type: 'input',
    message: 'What is the role title?',
    name: 'addRoleTitle',
},
{
    type: 'input',
    message: 'What is the role salary?',
    name: 'addRoleSalary',
},
{
    type: 'input',
    message: 'What is the department ID for this role?',
    name: 'addRoleDepartmentId',
},
];

// const viewRole= [ {
//         /////ADD//////
// },

// ];

const updateRole = [{
    type: 'input',
    message: 'Update the the role ID.',
    name: 'updateRoleId',
},
{
    type: 'input',
    message: 'Update the role title.',
    name: 'updateRoleTitle',
},
{
    type: 'input',
    message: 'Update the role salary.',
    name: 'addRoleSalary',
},
{
    type: 'input',
    message: 'Update the department ID for this role.',
    name: 'updateRoleDepartmentId',
},
];

const addDepartment = [
    {
        type: 'input',
        message: 'What is the department name?',
        name: 'addDepartmentName',
    },
];

// const viewDepartment = [ {
//         /////ADD//////
// },
// ];

////////////////////////////FUNCTIONS////////////////////////////

function addDepartmentFunction() {
    inquirer
        .prompt(addDepartment())
        .then(department => {
            let department = new Department(department.addDepartmentName)
            department.createDepartment()
            return nextQuestion()
        })
}

function viewDepartmentFunction() {
    inquirer
}

function addRoleFunction() {
    inquirer
}
function viewRoleFunction() {
    inquirer
}

function updateRoleFunction() {
    inquirer
}

function addEmployeeFunction() {
    inquirer
}

function viewEmployeeFunction() {
    inquirer
}

function nextQuestion() {
    inquirer.prompt(primaryQuestions)
        .then(answer => {
            if (answer.addDepartment === 'Add Department') {
                addDepartmentFunction()
            }
            else if (answer.viewDepartment === 'View Department') {
                viewDepartmentFunction()
            }
            else if (answer.addRole === 'Add Role') {
                addRoleFunction()
            }
            else if (answer.viewRole === 'View Role') {
                viewRoleFunction()
            }
            else if (answer.updateRole === 'Update Role') {
                updateRoleFunction()
            }
            else if (answer.addEmployee === 'Add Employee') {
                addEmployeeFunction()
            }
            else if (answer.viewEmployee === 'View Employee') {
                viewEmployeeFunction()
            }
            else {
                process.exit()
            }
        })
}