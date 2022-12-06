// importing employee constructor
const employee = require('./employee');

// engineer constructer extends employee constructor
class engineer extends employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "engineer";
    }
}

// exporting engineer
module.exports = engineer;