const buttons = document.querySelectorAll("button");
let arr = [];
let resultado = "";
let display = document.querySelector(".resultado");
const currentOperand = "";
const previousOperand = "";

buttons.forEach(e => {
    e.addEventListener("click", i => {
        if (resultado.innerText == 0) {
            resultado.innerText = "";
        }
        switch (i.target.className) {

            case "num":
                resultado = i.target.innerHTML;
                arr.push(resultado);
                display.innerHTML = arr.join('');
                break;
            case "sinal":
                const verificar = simbol => {
                    if (arr.includes(simbol)) {
                        console.log("sinal existente");
                    } else {
                        console.log("nao existe sinal");
                        if (arr.length == 0) {
                            arr.push(0);
                        }
                        resultado = i.target.innerHTML;
                        arr.push(resultado);
                        display.innerHTML = arr.join('');
                    }
                }

                switch (i.target.innerHTML) {
                    case "+":
                        // display.innerHTML = currentOperand + previousOperand;
                        break;
                    case "-":

                        break;
                    case "x":

                        break;
                    case "÷":

                        break;

                    case "C":
                        display.innerHTML = "0";
                        arr = [];
                        break;
                    case ".":
                        verificar(".");
                        break;
                    case "=":
                        resultado.innerText = "";
                        // resultado.innerText = //conta
                        arr.forEach(num => {
                            resultado.innerText = num;
                        });
                        break;

                    default:
                        break;
                }
        }
        console.log(arr);
    });
});


/*

const buttons = document.querySelectorAll("button");
let arr = [];
let resultado = "";
let display = document.querySelector(".resultado");
const currentOperand = "";
const previousOperand = "";


buttons.forEach(e => {
    e.addEventListener("click", i => {
        const updateDisplay = () => {
            resultado = i.target.innerHTML;
            arr.push(resultado);
            display.innerHTML = arr.join('');
        }
        switch (i.target.className) {
            case "num":
                updateDisplay();
                break;
            case "sinal":
                const verificar = simbol => {
                    if (arr.includes(simbol)) {
                        console.log("sinal existente");
                    } else {
                        console.log("nao existe sinal");
                        if (arr.length == 0) {
                            arr.push(0);
                        }
                        resultado = i.target.innerHTML;
                        arr.push(resultado);
                        display.innerHTML = arr.join('');
                    }
                }

                switch (i.target.innerHTML) {
                    case "+":
                        // display.innerHTML = currentOperand + previousOperand;
                        break;
                    case "-":

                        break;
                    case "x":

                        break;
                    case "÷":

                        break;

                    case "C":
                        display.innerHTML = "0";
                        arr = [];
                        break;
                    case ".":
                        verificar(".");
                        break;
                    case "=":
                        resultado.innerText = "";
                        // resultado.innerText = //conta
                        arr.forEach(num => {
                            resultado.innerText = num;
                        });
                        break;

                    default:
                        break;
                }
        }
        console.log(arr);
    });
});

*/