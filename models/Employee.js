const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
    {
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        is_manager: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'employee'
        }
    
);

module.exports = Employee;