class Department {
    constructor(addDepartmentId, addDepartmentName) {
        this.addDepartmentId = addDepartmentId
        this.addDepartmentName = addDepartmentName
    }
    getDepartmentId() {
        return this.addDepartmentId
    }
    getName() {
        return this.addDepartmentName
    }
    getDepartment() {
        return 'Department'
    }
    createDepartment() {
        //THIS IS WHERE I WRITE SQL DATABASE
    }
}

module.exports = Department 