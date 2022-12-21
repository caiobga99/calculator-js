const buttons = document.querySelectorAll("button");
let arr = [];
let resultado = document.querySelector(".resultado");
const n1 = "";
const n2 = "";
buttons.forEach(e => {
    e.addEventListener("click", i => {
        console.log(arr);
         if (resultado.innerText == 0) {
           resultado.innerText = "";
        }

        switch (i.target.className) {
            case "num":
                resultado.innerHTML = i.target.innerHTML;
                arr.push(resultado.innerHTML);
                break;
            case "sinal":

                if (arr.includes("+") || arr.includes(".") || arr.includes("-") || arr.includes("x") || arr.includes("/") ) {
                    console.log("sinal existente");
                    resultado.innerHTML = "";
                } else {
                    console.log("nao existe sinal");
                    resultado.innerHTML = i.target.innerHTML;
                    arr.push(resultado.innerHTML);
                }
                switch (i.target.innerHTML) {
                    case "+":
                        break;
                    case "-":

                        break;
                    case "x":

                        break;
                    case "/":

                        break;

                    case "C":
                        resultado.innerText = "0";
                        break;
                    case ".":

                        break;
                    case "=":
                        arr.forEach( num => {
                            resultado.innerText = num;
                        });
                        break;

                    default:
                        break;
                }
        }

    });
});