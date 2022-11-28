"use strict";
const readlineSync = require("readline-sync");
const chalk = require("chalk");
function main() {
    const firstOperand = readlineSync.question(chalk.blue("Enter first operand\n"));
    if (!isValidInput(firstOperand)) {
        console.log(chalk.red("Invalid Input\n"));
        main();
    }
    const operator = readlineSync.question(chalk.blue("Enter operator\n"));
    if (!isValidOperator(operator)) {
        console.log(chalk.red("Invalid Input\n"));
        main();
    }
    const secondOperand = readlineSync.question(chalk.blue("Enter second operand\n"));
    if (!isValidInput(secondOperand)) {
        console.log(chalk.red("Invalid Input\n"));
        main();
    }
    console.log(`\n==>  ${chalk.green(performOperation(firstOperand, operator, secondOperand))}\n`);
    main();
}
function performOperation(opr1, operator, opr2) {
    const num1 = Number(opr1);
    const num2 = Number(opr2);
    switch (operator) {
        case "*":
            return num1 * num2;
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
    }
    return NaN;
}
function isValidOperator(input) {
    return input == "*" || input == "+" || input == "-" || input == "/";
}
function isValidInput(input) {
    const num = Number(input);
    return !isNaN(num);
}
main();
