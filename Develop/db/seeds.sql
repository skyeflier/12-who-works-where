-- VIEW--
INSERT INTO department(name)
VALUES
('departmentOne'),
('departmentTwo'),
('departmentThree');

INSERT INTO roles(title, salary, department_id)
VALUES
('rolesOne', 100, 1),
('rolesTwo', 200, 2),
('rolesThree', 300, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('FirstOne', 'lastOne', 1,  null),
('FirstTwo', 'lastTwo', 2,  1),
('FirstThree', 'lastThree', 3,  1);

-- VIEW--

-- DELETE--