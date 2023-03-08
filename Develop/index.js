const inquirer = require('inquirer');
const fs = require('fs');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_tracker_db',
    password: 'Murphy17',
    port: 3306
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

const primaryQuestions = [{
    type: 'list',
    choices: ['View all departments', 'Add a department', 'View all roles', 'Add a role', 'Update an employee role', 'View all employees', 'Add an employee'],
    message: 'What would you like to do?',
    name: 'primaryQuestions',
}]

const addDepartment = [
    {
        type: 'input',
        message: 'What is the department name?',
        name: 'addDepartmentName',
    },
];

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


////////////////////////////FUNCTIONS////////////////////////////

function viewDepartmentFunction() {
    connection.query(`select * from department`, (error, result) => {
        console.table(result)
        if (error) throw error
    }) // Use backticks
    return nextQuestion()
}

// function addDepartmentFunction() {}

function viewRoleFunction() {
    connection.query(`select * from role`, (error, result) => {
        console.table(result)
        if (error) throw error
    })
    return nextQuestion()
}

// function addRoleFunction() {}

// function updateRoleFunction() {}

function viewEmployeeFunction() {
    connection.query(`select * from employee`, (error, result) => {
        console.table(result)
        if (error) throw error
    })
    return nextQuestion()
}

// function addEmployeeFunction() {}


function nextQuestion() {
    inquirer.prompt(primaryQuestions)
        .then(answer => {
            if (answer.addDepartment === 'Add Department') {
                addDepartmentFunction()
            }
            else if (answer.primaryQuestions === 'View all departments') {
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

nextQuestion()