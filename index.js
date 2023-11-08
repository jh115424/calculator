
let calculator = document.querySelector(".calculator");
let screen = document.querySelector(".calculator-screen");
let keys = document.querySelectorAll(".calculator-keys button");
let clear = document.querySelector(".calculator-keys button.clear");
let decimal = document.querySelector(".calculator-keys button.decimal");
let equals = document.querySelector(".calculator-keys button.equals");
let add = document.querySelector(".calculator-keys button.add");
let subtract = document.querySelector(".calculator-keys button.subtract");
let multiply = document.querySelector(".calculator-keys button.multiply");
let divide = document.querySelector(".calculator-keys button.divide");




let buttons = document.querySelectorAll(".calculator-keys button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let input = this.innerHTML;
        screen.innerHTML += input;
    

    }

);}