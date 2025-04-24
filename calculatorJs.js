function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function negative(num1) {
    return -num1;
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

function getTarget(event) {
    let buttonClass = (event.target.classList)[0];
    let map = {"seven": 7, "eight": 8, "nine": 9 , "divide": "/", "four": 4, "five": 5, "six": 6, "multiply": "*", "one": 1, "two": 2, "three": 3, "add": "+", "zero": 0, "decimal": ".", "equals": "=", "subtract": "-", "clear": "AC", "negative": "negative"};
    if (buttonClass === "buttons") {
        return;
    }
    if (number1 === "notSet" && (buttonClass !== "divide" && buttonClass !== "multiply" && buttonClass !== "add" && buttonClass !== "subtract" && buttonClass !== "equals" && buttonClass !== "decimal" && buttonClass !== "clear" && buttonClass !== "negative")) {
        display = document.querySelector(".display");
        display.textContent += map[buttonClass];
    }
}

let number1="notSet";
let number2="notSet";
let operator="notSet";
let previousResult="notSet";

let container = document.querySelector(".buttons");

container.addEventListener("click", (event) => getTarget(event));

