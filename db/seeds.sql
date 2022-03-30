INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance')
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Manager', 100000, 1),
    ('Sales Person', 75000, 1),

    ('Mechanical Engineer', 120000, 2),
    ('Software Engineer', 140000, 2),

    ('Account Manager', 150000, 3),
    ('Accountant', 115000,3),

    ('Legal Advisor Lead', 180000,4),
    ('Lawyer', 165000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Michael', 'Scott', 1, 1),
    ('Jim', 'Halpert', 2, NULL),
    ('Pamela', 'Halpert', 3, NULL),
    ('Dwight', 'Schrute', 4, 1),
    ('Oscar', 'Martinez', 4, 1),
    ('Kevin', 'Malone', 4, 1),
    ('Angela', 'Martin', 5, 2),
    ('Kelly', 'Kapoor', 5, 2),
    ('Ryan', 'Howard', 6, 3),
    ('Andy', 'Bernard', 6, 3);
