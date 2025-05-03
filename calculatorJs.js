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
    let display = document.querySelector(".display");
    let map = {"seven": 7, "eight": 8, "nine": 9 , "divide": "/", "four": 4, "five": 5, "six": 6, "multiply": "*", "one": 1, "two": 2, "three": 3, "add": "+", "zero": 0, "decimal": ".", "equals": "=", "subtract": "-", "clear": "AC", "negative": "negative"};
    if (buttonClass === "buttons") {
        return;
    }

    if (pressed === false && (buttonClass === "divide" || buttonClass === "multiply" || buttonClass === "add" || buttonClass ==="subtract")) {
        return;
    }

    if (buttonClass !== "divide" && buttonClass !== "multiply" && buttonClass !== "add" && buttonClass !== "subtract" && buttonClass !== "equals" && buttonClass !== "decimal" && buttonClass !== "clear" && buttonClass !== "negative") {
        pressed = true;
        if (String(display.textContent).length === 10) {
            return;
        } else {
        display.textContent += map[buttonClass];
        }

        if (number1 === "notSet") {
        totalNum1 = String(totalNum1) + String(map[buttonClass]);
        console.log(totalNum1);
        return;
        }

        else if (number1 === "set") {
            totalNum2 = String(totalNum2) + String(map[buttonClass]);
            console.log(totalNum2);
            number2 = "set";
            return;
        }
    }

    if (buttonClass === "decimal") {
        pressed = true;
        if (number1 === "notSet" && decimal1 === "notSet") {
            display.textContent += map[buttonClass];
            totalNum1 = String(totalNum1) + String(map[buttonClass]);
            decimal1 = "set";
            return;
        }

        if (number1 === "set" && decimal2 === "notSet") {
            display.textContent += map[buttonClass];
            totalNum2 = String(totalNum2) + String(map[buttonClass]);
            decimal2 = "set";
            return;
        }

        return;
    }

    if (buttonClass === "divide" || buttonClass === "multiply" || buttonClass === "add" || buttonClass === "subtract") {
        if (operator !== "notSet") {
            return;
        }
        pressed = true;
        number1 = "set";
        operator = map[buttonClass];
        display.textContent = "";
        console.log(operator);
        flag = false;
        return;
    }

    if (buttonClass === "equals" && number1 === "set" && number2 === "set" && operator !== "notSet") {
        totalNum1 = operate(Number(totalNum1), Number(totalNum2), operator);
        console.log("called equals");
        if (String(totalNum1).length > 10) {
            totalNum1 = String(totalNum1).slice(0, 10);
        }
        totalNum1 = Number(totalNum1);
        display.textContent = totalNum1;
        number2 = "notSet";
        decimal2 = "notSet";
        totalNum2 = "";
        operator = "notSet";
        flag = true;
        pressed = true;
    }

    if (buttonClass === "negative") {
        if (number1 === "notSet" && Number(display.textContent) !== 0 || flag === true) {
            if (Number(display.textContent) > 0) {
            display.textContent = "-" + String(display.textContent);
            }
            else {
                display.textContent = String(Number(display.textContent)*-1);
            }
            totalNum1 = String(display.textContent);
            pressed = true;
            return;
        }

        if (number1 === "set" && Number(display.textContent) !== 0 && flag === false) {
            if (Number(display.textContent) > 0) {
                display.textContent = "-" + String(display.textContent);
                }
                else {
                    display.textContent = String(Number(display.textContent)*-1);
                }
                totalNum2 = String(display.textContent);
                pressed = true;
                return;
        }
        return;
    }

    if (buttonClass === "clear") {
        number1 = "notSet";
        number2 = "notSet";
        totalNum1 = "";
        totalNum2 = "";
        operator = "notSet";
        display.textContent = "";
        decimal1 = "notSet";
        decimal2 = "notSet";
        pressed = false;
    }
}

let number1 = "notSet";
let number2 = "notSet";
let totalNum1 = "";
let totalNum2 = "";
let decimal1 = "notSet";
let decimal2 = "notSet";
let operator = "notSet";
let flag = false;
let pressed = false;

let container = document.querySelector(".buttons");

container.addEventListener("click", (event) => getTarget(event));

