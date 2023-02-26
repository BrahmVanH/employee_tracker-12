const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// Import and require sequelize 
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });


