//Display
const display = document.getElementById("display");
let newValue, 
    currentOperator, 
    nextOperator, 
    firstValue, 
    secondValue,
    result,
    operatorInUse;

const numbers = document.getElementsByClassName("numbers");
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", inputNumber = (e) => {
        let value = e.target.innerText;
        updateDisplay(value);
    });
};

function updateDisplay(val) {
    const currentValue = display.innerText;
    if(display.innerText === "0" || newValue === true) {
        display.innerText = val;
        newValue = false;
    }
    else if(display.innerText.length < 14) {
        display.innerText = currentValue + val;        
    }
}

//Operation
const operators = document.getElementsByClassName("operators");

for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", addOperator = (e) => {
        if(e.target.innerText !== "=" && operatorInUse === undefined) {
            currentOperator = e.target.innerText;
            operatorInUse = true;
            console.log(currentOperator);
        }
        if(firstValue === undefined) {
            firstValue = display.innerText;
            console.log("this is first value " + firstValue);
        }
        else if(secondValue === undefined) {
            secondValue = display.innerText;
            nextOperator = e.target.innerText;
            operate();
        }
        else if(currentOperator === "=") {
            secondValue = display.innerText;
            operate();
        }
        else {
            nextOperator = e.target.innerText;
        }
        newValue = true;
    });
};

function operate() {
    switch(currentOperator) {
        case "+":
            result = Number(firstValue) + Number(secondValue);
            break;
        case "-":
            result = Number(firstValue) - Number(secondValue);
            break;
        case "*":
            result = Number(firstValue) * Number(secondValue);
            break;
        case "/":
            result = Number(firstValue) / Number(secondValue);
            break;
        default:
            display.innerText = "ERROR: SyntaxError";
    }
    if(Number(result.toString().length) > 14) {
        result = "ERROR";
        console.log("error");
    };
    display.innerText = result;
    firstValue = result;
    secondValue = undefined;
    operatorInUse = undefined;
    currentOperator = undefined;
    if(nextOperator !== undefined) {
        currentOperator = nextOperator;
        nextOperator = undefined;
        operatorInUse = true;
        console.log("next operator is " + nextOperator);
        console.log("currentOperator is " + currentOperator);
    }
}

//Special buttons
const clear = document.getElementById("clear");
clear.addEventListener("click", clearDisplay = () => {
    display.textContent = 0;
    firstValue = undefined;
    secondValue = undefined;
    result = undefined;
    operatorInUse = undefined;
    currentOperator = undefined;
    nextOperator === undefined;
});

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deleteLastNumber = () => {
    let string = display.textContent;
    if(string !== "0" && string.length === 1) {
        display.textContent = "0";
    }
    else if(string.length > 1 || string !== "0") {
        display.textContent = display.textContent.substr(0, display.textContent.length -1);
    }
});

const negativeButton = document.getElementById("negative");
negativeButton.addEventListener("click", plusOrNegative = () => {
    if(display.textContent.includes("-")) {
        display.textContent = display.textContent.replace("-" , "");
    }
    else if(display.textContent !== "0") {
        display.textContent = "-" + display.textContent;
    }
});

const floatingPoint = document.getElementById("floating-point");
floatingPoint.addEventListener("click", addFloatingPoint = () => {
    const string = display.textContent;
    if(string.includes(".")) {
    }
    else {
        display.textContent = display.textContent + ".";
    }
});