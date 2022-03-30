//Installed packages
const inquirer = require('inquirer');
const db = require('./db/connection');
const logo = require('asciiart-logo');
const cTable = require('console.table');
const res = require('express/lib/response');

//Starting questions

inquirer.prompt(
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'option',
        choices: [
            'View all departments',
            'View all Roles',
            'View all employees',
            'Add department',
            'Add Roles',
            'Add Employees',
            'Delete Departments',
            'Delete Employee',
            'Delete Roles',
            'Update Employee Roles',
            'Update employee manager',
            'View Employee By Manager',
            'Exit'
        ]

    }).then(answer => {

        switch (answer.option) {
            case "View all departments":
                viewAllDepartments();
                break;

            case "View all Roles":
                viewAllRoles();
                break;

            case "View all employees":
                viewAllEmployees();
                break;

            case "Add department":
                addDepartment();
                break;

            case "Add Roles":
                addRoles();
                break;

            case "Add Employees":
                addEmployee();
                break;

            case "Update Employee Roles":
                updateEmployeeRole();
                break;

            case "Delete Departments":
                deleteDepartment();
                break;
            case "Delete Employee":
                deleteEmployee();
                break;
            case "Delete Roles":
                deleteRole();
                break;
            case "Update employee manager":
                updateManager()
                break;
            case "View Employee By Manager":
                viewEmployeeByManager()
                break;
            case "Exit":
                connection.end();
                console.log('Have a good day');
                break;
        }
    })

