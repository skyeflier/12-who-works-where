const Department = require('./Department');
const Role = require('./Role');

class Employee extends Department {
    constructor(addDepartmentId, addDepartmentName, addEmployeeId, addEmployeeFirstName, addEmployeeLastName, addRoleId, addRoleTitle, addRoleSalary) {
        super(addDepartmentId, addDepartmentName);
        this.addEmployeeFirstName = addEmployeeFirstName;
        this.addEmployeeLastName = addEmployeeLastName;
        this.addRoleId = addRoleId;
        this.addManagerId = addManagerId;
    }
    getFirstName() {
        return this.addEmployeeFirstName
    }
    getLastName() {
        return this.addEmployeeLastName
    }
    getRoleId() {
        return this.addRoleId
    }
    getManagerId() {
        return this.addManagerId
    }
    getEmployee() {
        return 'Employee'
    }
}

module.exports = Employee