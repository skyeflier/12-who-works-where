const Role = require('./Department')

class Role extends Department {
    constructor(id, name, title, salary) {
        super(id, name)
        this.title = title
        this.salary = salary
    }
    getTitle() {
        return this.title
    }
    getSalary() {
        return this.salary
    }
    getRole() {
        return 'Role'
    }
}

module.exports = Role