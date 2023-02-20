CREATE TABLE department (
    id INT NOT NULL AUTO_INCRIMENT,
    department_name VARCHAR(30) NOT NULL
    PRIMARY KEY (id)
)

CREATE TABLE role (
    id INT NOT NULL AUTO_INCRIMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY department_id
    REFERENCES department(id)
    ON DELETE SET NULL
)

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCRIMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY role_id
    REFERENCES role(id)
)

