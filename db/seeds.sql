USE employee_db;

INSERT INTO department (name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Marketing'),
    ('Legal'),
    ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Software Engineer', 120000, 2),
    ('Engineering Manager', 210000, 2),
    ('Salesperson', 75000, 1),
    ('Sales Manager', 950000, 1),
    ('Marketing Manager', 130000, 3),
    ('Marketing Associate', 90000, 3),
    ('Attorney', 150000, 4),
    ('Paralegal', 65000, 4),
    ('Financial Analyst', 88000, 5),
    ('Finance Manager', 140000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jerry', 'Smith', 1, 2),
    ('Tom', 'Brady', 2, 1),
    ('Michael', 'Jordan', 3, 4),
    ('Scooby', 'Doo', 4, NULL),
    ('Patrick', 'Star', 5, 4),
    ('Stevie', 'Nicks', 6, 5),
    ('Elton', 'John', 7, 2),
    ('Harry', 'Potter', 8, NULL);