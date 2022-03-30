# SQL Challenge: Employee Tracker

# Description:

This challenge is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called  **Content** **Management** **Systems** **(CSM)**.
<br />

# User Story: 
```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```
## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
## Usage
____________

To initialize the application, you can do so in one of two ways: 

You can clone the the repository to your development environment:

```
git@github.com:BDJS0033/Employee-Tracker.git
```

**Run _npm install_ to install all dependencies**

For MySql
```
CREATE DATABASE employee;
USE employee;
source db/schema.sql
source db/seeds.sql
```
<br />

## Packages
______________

Packages requried to be installed:

```
npm install inquirer
npm install console.table --save
npm install --save mysql2
npm install asciiart-logo
```

## Schema Database:
_________
Schema contains the following three tables:

* `department`
  * `id`: `INT PRIMARY KEY`
  * `name`: `VARCHAR(30)` to hold department name

* `role`
  * `id`: `INT PRIMARY KEY`
  * `title`: `VARCHAR(30)` to hold role title
  * `salary`: `DECIMAL` to hold role salary
  * `department_id`: `INT` to hold reference to department role belongs to

* `employee`
  * `id`: `INT PRIMARY KEY`
  * `first_name`: `VARCHAR(30)` to hold employee first name
  * `last_name`: `VARCHAR(30)` to hold employee last name
  * `role_id`: `INT` to hold reference to employee role
  * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

Included a `schema.sql` to hold databse schema and `seed.sql` file to pre-populate database. This makes development of individual features much easier.
<br />

## Technology:
________________________
<p><a href="https://nodejs.org/">Node.js</a></p>
<p><a href="https://www.npmjs.com/package/inquirer">Inquirer.js</a></p>
<p><a href="https://www.npmjs.com/package/mysql">MySQL</a></p>
<p><a href="https://www.npmjs.com/package/console.table">Console Table</a></p>
<p><a href="https://www.npmjs.com/package/asciiart-logo">Asciiart-Logo</a></p> 
<br />

## GitHub
________________

GitHub https://github.com/BDJS0033/Employee-Tracker


<br />
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
