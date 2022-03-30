const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value);
    })
})

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(curentNumber);
    })
})

let prevNumber = '';
let calculationNumber = '';
let curentNumber = '0';

const inputNumber = (number) => {
    if (curentNumber === '0'){
        curentNumber = number;
    } else {
        curentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(curentNumber);
    })
})

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value);
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = curentNumber;
    }
    calculationOperator = operator;
    curentNumber = '0';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const equalSign = document.querySelector('.equal-sign');

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(curentNumber);
            break;
        case "-":
            result = prevNumber - curentNumber;
            break;
        case "*":
            result = prevNumber * curentNumber;
            break;
        case "/":
            result = prevNumber / curentNumber;
            break;
        default:
            break;
    }
    curentNumber = result;
    calculationOperator = '';
}

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(curentNumber);
})

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    console.log('Ac button is preseed');
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    curentNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(curentNumber);
})

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    console.log(event.target.value);
})

inputDecimal = (dot) => {
    if (curentNumber.includes('.')) {
        return;
    }
    curentNumber += dot;
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(curentNumber);
})
