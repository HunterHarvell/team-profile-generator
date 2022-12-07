// importing employee constructor
const employee = require('./employee');

// intern constructor extends employee constructor
class intern extends employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

// exporting intern
module.exports = intern;