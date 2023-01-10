const calculator = {
  displayValue: "0",
  currentOperand: null,
  previousOperand: false,
  operatorMath: null,
};

const inputDigit = (digit) => {
  const { displayValue, previousOperand: waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.previousOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
};

const inputDecimal = (dot) => {
  if (calculator.previousOperand === true) {
    calculator.displayValue = "0.";
    calculator.previousOperand = false;
    return;
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
};
const calculate = (firstOperand, secondOperand, operator) => {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }

  return secondOperand;
};
const handleOperator = (nextOperator) => {
  const { currentOperand: firstOperand, displayValue, operatorMath: operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.previousOperand) {
    calculator.operatorMath = nextOperator;
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.currentOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.currentOperand = result;
  }

  calculator.previousOperand = true;
  calculator.operatorMath = nextOperator;
};

const clearCalculator = () => {
  calculator.displayValue = "0";
  calculator.currentOperand = null;
  calculator.previousOperand = false;
  calculator.operatorMath = null;
};

const updateDisplay = () => {
  const display = document.querySelector(".resultado");
  display.innerHTML = calculator.displayValue;
};

updateDisplay();

const keys = document.querySelectorAll("button");

keys.forEach((e) => {
  e.addEventListener("click", (event) => {
    const { target } = event;
    const { value } = target;
    if (!target.matches("button")) {
      return;
    }

    switch (value) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "=":
        handleOperator(value);
        break;
      case ".":
        inputDecimal(value);
        break;
      case "all-clear":
        clearCalculator();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputDigit(value);
        }
    }

    updateDisplay();
  });
});
