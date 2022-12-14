// importing employee constructor
const employee = require('./employee');

// manager constructor extends employee constructor
class manager extends employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole () {
        return "Manager";
    }
}

// exporting manager
module.exports = manager;