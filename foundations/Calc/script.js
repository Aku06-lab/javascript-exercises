function add(num1, num2){
    return num1 + num2;

}
function substract(num1, num2) {
    return num1 - num2;

}
function multiply(num1, num2) {
    return num1 * num2;

}
function divide(num1, num2) {
    return num1 / num2;

}

function operator(num1, num2, operation){

    switch(operation){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return substract(num1,num2);
            break;
        case "*":
           return multiply(num1,num2);
            reak;
        case "/":
            return divide(num1,num2);
            break;             
    }
}
let firstNumber = "";
let secondNumber = ""
let currentNumber = "";
let operation = "";
let resultDisplayed= false;
let result="";

const buttons = document.querySelectorAll(".digit")
const buttonsOperator = document.querySelectorAll(".operation")
const display = document.querySelector("#display")
console.log(display.value)

buttons.forEach(button => {
    button.addEventListener("click",() => {
        if (resultDisplayed === true){
            firstNumber="";
            operation="";
            currentNumber=button.textContent;
            display.value=currentNumber;
            resultDisplayed=false;
      

        }else{
            currentNumber = currentNumber + button.textContent;
            display.value = currentNumber

        }
        
    })
})

buttonsOperator.forEach(button => {
    button.addEventListener("click", () => {
        if(resultDisplayed === true){
            firstNumber =result;
            operation = button.textContent;
            currentNumber="";
            resultDisplayed=false;
        }else{
            if (firstNumber === "") {
                firstNumber = currentNumber;
                operation = button.textContent;
                currentNumber = ""

            } else if (currentNumber === "") {
                operation = button.textContent;
            }
            else {
                result = operator(+firstNumber, +currentNumber, operation)
                display.value = result
                firstNumber = result;
                operation = button.textContent;
                currentNumber = "";

            }

        }
       
    })
})

const buttonsEquals= document.getElementById("equalsToo");

buttonsEquals.addEventListener("click", () => {
        if (firstNumber !== "" && operation !== "" && currentNumber!==""){
            result = operator(+firstNumber, +currentNumber, operation)
            display.value = result
            firstNumber =result;
            currentNumber="";
            resultDisplayed = true;

        }

    });
const buttonClear = document.getElementsByClassName("clear")[0];

buttonClear.addEventListener("click", () => {
    firstNumber = "";
    currentNumber="";
    operation ="";
    display.value ="";
    result="";
 });
const buttonDelete = document.getElementsByClassName("delete")[0];

buttonDelete.addEventListener("click", () => {
    if(currentNumber !== ""){
        currentNumber = currentNumber.slice(0,-1);
        display.value = currentNumber
    }
  
});
 
const buttonDot = document.getElementsByClassName("dot")[0];

buttonDot.addEventListener("click", () => {
    if (currentNumber !== ".") {
        currentNumber = currentNumber +"."
        display.value = currentNumber
    }

});
