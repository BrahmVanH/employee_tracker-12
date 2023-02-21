const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Odinson!042920',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

app.get('/api/employee', (req, res) =>{
    const sql = `SELECT * FROM employees.employee`;

    db.query(sql, (err, res) =>{
        if(err) {
            res.status(500).json({ error: err.message});
            return;
        }
        console.log(res);
    });
});

app.get('/api/role', (req, res) => {
    const sql =`SELECT * FROM employees.role`;

    db.query(sql, (err, res) => {
        if(err) {
            res.status(500).json({ error: err.message});
            return;
        }
        console.log(res);
    });
});

app.get('/api/department', (req, res) => {
    const sql = `SELECT * FROM employees.department`;

    db.query(sql, (err, res) =>{
        if(err) {
            res.status(500).json({ error: err.message});
            return;
        }
        console.log(res);
    });
});

app.post('/api/new-employee', (req, res) => {

    const sql = `INSERT INTO employee (first_name,
        last_name, title, department, salary, manager)
        VALUES (?)`;
    const params = [body.first_name, body.last_name, body.title, 
        body.department, body.salary, body.manager];
    
    db.query(sql, params, (err, res) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});


