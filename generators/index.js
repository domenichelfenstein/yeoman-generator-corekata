'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        this.log("Welcome!");
    }

    writing() {
        this.fs.copy(
            this.templatePath('./'),
            this.destinationPath('./')
        );
    }
};
