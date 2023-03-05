const Employee = require('./Department')

class Employee extends Department {
    constructor(employeeId, firstName, lastName) {
        super(employeeId)
        this.firstName = firstName
        this.lastName = lastName
    }
    getFirstName() {
        return this.firstName
    }
    getLastName() {
        return this.lastName
    }
    getEmployee() {
        return 'Employee'
    }
}

module.exports = Employee