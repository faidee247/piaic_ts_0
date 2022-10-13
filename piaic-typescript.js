"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
inquirer_1["default"]
    .prompt([
    {
        type: 'list',
        name: 'calculation_type',
        message: 'What do you want to do?',
        choices: [{
                key: "A",
                value: "Addition"
            },
            {
                key: "S",
                value: "Subtraction"
            },
            {
                key: "M",
                value: "Multiplication"
            },
            {
                key: "D",
                value: "Division"
            }]
    }, {
        name: "Number1",
        message: "Enter Number 1"
    },
    {
        name: "Number2",
        message: "Enter Number 2"
    }
])
    .then(function (answers) {
    var caltype = answers.calculation_type;
    var num1 = answers.Number1;
    var num2 = answers.Number2;
    var result;
    if (caltype == 'Addition') {
        result = Number(num1) + Number(num2);
    }
    else if (caltype == 'Subtraction') {
        result = Number(num1) - Number(num2);
    }
    else if (caltype == 'Multiplication') {
        result = Number(num1) * Number(num2);
    }
    else if (caltype == 'Division') {
        result = Number(num1) / Number(num2);
    }
    else {
        result = 0;
    }
    console.log('The result is ' + result);
});
