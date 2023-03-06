const Department = require('./Department')

class Employee extends Department {
    constructor(addDepartmentId, addDepartmentName, addEmployeeId, addEmployeeFirstName, addEmployeeLastName) {
        super(addDepartmentId, addDepartmentName)
        this.addEmployeeId = addEmployeeId
        this.addEmployeeFirstName = addEmployeeFirstName
        this.addEmployeeLastName = addEmployeeLastName
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