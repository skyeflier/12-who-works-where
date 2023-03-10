const Department = require('./Department');
const Role = require('./Role');

class Employee extends Department {
    constructor(addDepartmentId, addDepartmentName, addEmployeeId, addEmployeeFirstName, addEmployeeLastName, addRoleId, addRoleTitle, addRoleSalary) {
        super(addDepartmentId, addDepartmentName);
        this.addEmployeeId = addEmployeeId;
        this.addEmployeeFirstName = addEmployeeFirstName;
        this.addEmployeeLastName = addEmployeeLastName;
        this.addRoleId = addRoleId;
        this.addRoleTitle = addRoleTitle;
        this.addRoleSalary = addRoleSalary;
    }
    getEmployeeId() {
        return this.addEmployeeId
    }
    getFirstName() {
        return this.addEmployeeFirstName
    }
    getLastName() {
        return this.addEmployeeLastName
    }
    getEmployee() {
        return 'Employee'
    }
}

module.exports = Employee