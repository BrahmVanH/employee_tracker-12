const Employee = require('./Employee');
const Role = require('./Role');
const Department = require('./Department');

Employee.hasOne(Role, {
    foreignKey: 'role_id',
});

Employee.hasOne(Department, {
    foreignKey: 'department_id',

});

Role.hasOne(Department, {
    foreignKey: 'department_id',
})