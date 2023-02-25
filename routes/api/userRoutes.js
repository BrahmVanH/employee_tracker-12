
//THIS NEEDS TO BE BROKEN INTO departmentRoutes.js, employeeRoutes.js, roleRoutes.js

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