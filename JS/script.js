const display = document.getElementById("display");

const numbers = document.getElementsByClassName("numbers");
console.log(numbers);

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", inputNumber);
}

function inputNumber(e) {
    let value = e.target.innerText;
    console.log(value);
    updateDisplay(value);
}

function updateDisplay(val) {
    const currentValue = display.innerText;
    console.log(currentValue);
    if(display.innerText === "0") {
        display.innerText = val;
    }
    else if(display.innerText.length < 15) {
        display.innerText = currentValue + val;        
    }
}




//Special buttons
const clear = document.getElementById("clear");
clear.addEventListener("click", clearDisplay);

function clearDisplay() {
    display.textContent = 0;
}

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deleteLastNumber);

function deleteLastNumber() {
    let string = display.textContent;
    if(string !== "0" && string.length === 1) {
        display.textContent = "0";
    }
    else if(string.length > 1 || string !== "0") {
        display.textContent = display.textContent.substr(0, display.textContent.length -1);
        console.log("yes");
    }
}

const negativeButton = document.getElementById("negative");
negativeButton.addEventListener("click", plusOrNegative)

function plusOrNegative() {
    console.log("yes");
    if(display.textContent.includes("-")) {
        display.textContent = display.textContent.replace("-" , "");
    }
    else {
        display.textContent = display.textContent + "-";
    }
}





















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