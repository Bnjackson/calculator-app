const display = document.getElementById("display");
let valueArray = [];
let operatorArray = [];
let newValue;

const numbers = document.getElementsByClassName("numbers");
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", inputNumber);
}

function inputNumber(e) {
    let value = e.target.innerText;
    updateDisplay(value);
}

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

const operators = document.getElementsByClassName("operators");

for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", addOperator);
}

function addOperator(e) {
    newValue = true;
    const currentOperator = e.target.innerText;
    valueArray.push(display.innerText);
    operatorArray.push(e.target.innerText);
    console.log(valueArray, operatorArray);
}

const equals = document.getElementById("equals");
equals.addEventListener("click", operate = () => {

});


//Special buttons
const clear = document.getElementById("clear");
clear.addEventListener("click", clearDisplay = () => {
    display.textContent = 0;
    valueArray = [];
    operatorArray = [];
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
})


const floatingPoint = document.getElementById("floating-point");
floatingPoint.addEventListener("click", addFloatingPoint = () => {
    const string = display.textContent;
    if(string.includes(".")) {
    }
    else {
        display.textContent = display.textContent + ".";
    }
});






















/*
const addition = (first, second) =>  {
    return first + second;
};

const subtraction = (first, second ) => {
    return first - second;
};

const multiply = (first, second) => {
    return first * second;
};

const divide = (first, second) => {
    return first / second;
};

const num1 = 10;
const num2 = 10;

console.log(addition(num1, num2));
console.log(subtraction(num1, num2));
console.log(multiply(num1, num2));
console.log(divide(num1, num2));
*/