const buttons = document.querySelectorAll("button");
let arr = [];
//const arr = [];
let resultado = "";
let display = document.querySelector(".resultado");
const currentOperand = "";
const previousOperand = "";

buttons.forEach((e) => {
  e.addEventListener("click", (i) => {
    const twoOperators = () => {
      //função que verifica se ha um operador matematico seguido de outro
      const operatorsName = ["+", "-", "*", "÷"];
      for (let i = 0; i < operatorsName.length; i++) {
        if (
          arr[arr.length - 1] == operatorsName[i] &&
          arr[arr.length - 2] == operatorsName[i]
        ) {
          console.log("2 operadores matematicos juntos");
          arr.pop();
        }
      }
    };

    const operatorMathematical = () => {
      if (arr.length == 0) {
        if (i.target.className == "sinal") {
          arr = [];
          arr.push(0);
          console.log(arr);
        }
      }
    };
    const updateDisplay = () => {
      twoOperators();
      operatorMathematical();
      resultado = i.target.innerHTML;
      arr.push(resultado);
      display.innerHTML = arr.join("");
    };
    switch (i.target.className) {
      case "num":
        updateDisplay();
        break;
      case "sinal":
        const verificar = (simbol) => {
          if (!arr.includes(simbol)) {
            console.log("nao existe sinal");
            if (arr.length == 0) {
              arr.push(0);
            }
            updateDisplay();
          }
        };
        const sinalInvalido = (sinal) => {
          if (arr[arr.length - 1] == sinal) {
            alert("Formato Usado Invalido");
          }
        };

        switch (i.target.innerHTML) {
          case "+":
            // display.innerHTML = currentOperand + previousOperand;
            operatorMathematical();
            updateDisplay();
            break;
          case "-":
            updateDisplay();

            break;
          case "*":
            updateDisplay();

            break;
          case "÷":
            updateDisplay();

            break;
          case "C":
            display.innerHTML = "0";
            arr = [];
            break;
          case ".":
            verificar(".");
            break;
          case "=":
            sinalInvalido("+");
            sinalInvalido("-");
            sinalInvalido("*");
            sinalInvalido("÷");
            resultado.innerText = "";
            // arr.forEach(num => {
            //     resultado.innerText = num;
            // });
            break;

          default:
            break;
        }
    }
    console.log(arr);
  });
});
