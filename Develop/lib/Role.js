const Department = require('./Department')

class Role extends Department {
    constructor(addDepartmentId, addDepartmentName, addRoleId, addRoleTitle, addRoleSalary) {
        super(addDepartmentId, addDepartmentName)
        this.addRoleId = addRoleId
        this.addRoleTitle = addRoleTitle
        this.addRoleSalary = addRoleSalary
    }
    getTitle() {
        return this.addRoleId
    }
    getTitle() {
        return this.addRoleTitle
    }
    getSalary() {
        return this.addRoleSalary
    }
    getRole() {
        return 'Role'
    }
}

module.exports = Role