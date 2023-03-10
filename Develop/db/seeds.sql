USE employee_tracker_db;

INSERT INTO department
(name)
VALUES
('departmentOne'),
('departmentTwo'),
('departmentThree');

INSERT INTO role
(title, salary, department_id)
VALUES
('roleOne', 100, 1),
('roleTwo', 200, 2),
('roleThree', 300, 3);

INSERT INTO employee
(first_name, last_name, title, salary, role_id, manager_id, department_id)
VALUES
('firstOne', 'lastOne', 'jobOne', 100,  1, 1, 1),
('firstTwo', 'lastTwo', 'jobOne', 200,  2, 2, 2),
('firstThree', 'lastThree', 'jobOne', 300,  3, 3, 3);

-- VIEW--

-- DELETE--