# Yeoman Generator: .net core Code Kata
This little Yeoman generator generates two projects:
- An application project
- A test project (using xUnit)

This is especially useful if you want to solve coding katas like the ones in this great collection:
https://github.com/gamontal/awesome-katas

## How to use it?
### Prerequisites
You need to have the following installed on your machine:
- .net Core 2.1
- NPM (including node.js)
- Yeoman

### Installing this generator
First download the package via NPM:
```
npm i -g generator-corekata
```

Then go to the directory you want to practice your code kata and use Yeoman to setup your environment:
```
yo corekata
```

### Running the tests
In code katas it's all about TDDing so your biggest concern at this stage should be how to run the tests. When you are in the root directory of your kata project use your terminal to run this command:
```
dotnet test ./tests/
```