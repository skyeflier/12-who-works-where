class Department {
    constructor(departmentId, name) {
        this.departmentId = departmentId
        this.name = name
    }
    getDepartmentId() {
        return this.departmentId
    }
    getName() {
        return this.name
    }
    getDepartment() {
        return 'Department'
    }
}

module.exports = Department 