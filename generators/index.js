'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    initializing() {
        this.log("Installing Code Kata Environment for .net Core...");
    }

    prompting() {
        return this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Your project name',
            default : "some-kata"
          }]).then((answers) => {
            this.appName = answers.name;
            this.fs.copy(
                this.templatePath(`./`),
                this.destinationPath(`./${this.appName}/`)
            );            
          });
    }

    install() {
        this.spawnCommandSync("dotnet", [`restore`, `./${this.appName}/tests/`]);
    }
};
