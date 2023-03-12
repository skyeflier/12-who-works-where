const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role');

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

// const connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'employee_tracker_db',
//     password: 'Murphy17',
// });

const primaryQuestions = [{
    type: 'list',
    choices: ['View all departments', 'Add a department', 'View all roles', 'Add a role', 'Update an employee role', 'View all employees', 'Add an employee'],
    message: 'What would you like to do?',
    name: 'primaryQuestions',
}]

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

////////////////////////////FUNCTIONS////////////////////////////

function viewDepartmentFunction() {
    connection.query(`select * from department`, (error, result) => {
        console.table(result)
        if (error) throw error
    }) // Use backticks
    return nextQuestion()
}

function addDepartmentFunction() {
    inquirer.prompt(
        [{
            type: 'input',
            choices: ['Creative, Development, HR'],
            message: 'What is the department name?',
            name: 'addDepartmentName',
        }])
        .then(res => {
            connection.query(`INSERT INTO department SET ?`, res, (error, result) => {
                // console.table(result)
                // if (error) throw error
            })
        })
        .then(() => nextQuestion())
};

function viewRoleFunction() {
    connection.query(`select * from role`, (error, result) => {
        console.table(result)
        if (error) throw error
    })
    return nextQuestion()
}

function addRoleFunction() {
    inquirer.prompt([
        {
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
        }
    ])
        .then(res => {
            const title = res.addRoleTitle;
            const salary = res.addRoleSalary;
            const departmentId = res.addRoleDepartmentId;

            const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${title}', '${salary}', '${departmentId}')`;

            connection.query(sql, (error, result) => {
                console.table(result);
                if (error) throw error;
            });
        })
        .then(() => nextQuestion())
}

function updateEmployeeRoleFunction() {
    inquirer.prompt(
        [{
            type: 'input',
            message: 'Which employee role do you want to update?',
            name: 'employeeToUpdate',
        },
        {
            type: 'input',
            message: 'Which role do you want to assign to the employee',
            name: 'updateRole',
        }])
        .then(res => {
            const updateEmployee = res.updateEmployee;
            const updateRole = res.updateRole;

            const sql = `UPDATE role (employeeToUpdate, updateRole) VALUES ('${updateEmployee}', '${updateRole}')`;

            connection.query(sql, (error, result) => {
                console.table(result);
                if (error) throw error;
            });
        })
        .then(() => nextQuestion())
}
// TRYING TO TROUBLESHOOT THE ERRRO BELOW

function viewEmployeeFunction() {
    connection.query(`select * from employee`, (error, result) => {
        console.table(result)
        if (error) throw error
    })
    return nextQuestion()
}

function addEmployeeFunction() {
    inquirer.prompt(
        [{
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
            message: 'What is their manager ID?',
            name: 'addManagerId',
        },
        ])
        .then(res => {
            const firstName = res.addEmployeeFirstName;
            const lastName = res.addEmployeeLastName;
            const roleId = res.addEmployeeRoleId;
            const managerId = res.addManagerId;

            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', '${roleId}', '${managerId}')`;

            connection.query(sql, (error, result) => {
                console.table(result);
                if (error) throw error;
            });
        })
        .then(() => nextQuestion())
}

// select the id and the UPDATE swl similar to line 198 and pass in variabls to udpate

function nextQuestion() {
    inquirer.prompt(primaryQuestions)
        .then(answer => {
            if (answer.primaryQuestions === 'View all departments') {
                viewDepartmentFunction()
            }
            else if (answer.primaryQuestions === 'Add a department') {
                addDepartmentFunction()
            }
            else if (answer.primaryQuestions === 'View all roles') {
                viewRoleFunction()
            }
            else if (answer.primaryQuestions === 'Add a role') {
                addRoleFunction()
            }
            else if (answer.primaryQuestions === 'Update an employee role') {
                updateEmployeeRoleFunction()
            }
            else if (answer.primaryQuestions === 'View all employees') {
                viewEmployeeFunction()
            }
            else if (answer.primaryQuestions === 'Add an employee') {
                addEmployeeFunction()
            }
            else {
                process.exit()
            }
        })
}

nextQuestion()