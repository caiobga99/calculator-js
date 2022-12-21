const buttons = document.querySelectorAll("button");
let arr = [];
let resultado = document.querySelector(".resultado");

buttons.forEach(e => {
    e.addEventListener("click", i => {

        if (resultado.innerText == 0) {
            resultado.innerText = "";
        }

        console.log(i.target.innerHTML);
        console.log(arr);
        switch (i.target.className) {
            case "num":
                resultado.innerHTML += i.target.innerHTML;
                arr.push(resultado.innerHTML);
                break;
            case "sinal": //not number
                resultado.innerHTML += i.target.innerHTML;
                // if (arr.includes("+") || arr.includes("-") || arr.includes("x") || arr.includes("/")) {
                //     resultado.innerHTML += i.target.innerHTML;
                //     console.log("Teste");
                // }
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
                       
                        break;

                    default:
                        break;
                }
                break;
            default:
                break;
        }
    });
});