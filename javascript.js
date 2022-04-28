function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  if (b === 0) return "Not so Fast Lmao"
  else return Math.round(a/b * 10000) / 10000;
}

function operate(operator, a, b) {
  if (a === "") {
    return b
  } else {
    switch (operator) {
      case "+":
        return add(+a, +b);
      case "-":
        return subtract(+a, +b);
      case "×":
        return multiply(+a, +b);
      case "÷":
        return divide(+a, +b);
      default:
        console.log("Input the correct mathematical operator")
    }
  }
}

function populate() {
  num1 = "" + num1 + this.textContent
  display.textContent = num1
}

function addOperator() {
  num2 = operate(opr, num2, num1)
  num1 = ""
  display.textContent = num2 + this.textContent
  opr = this.textContent
}

function showResult() {
  result = operate(opr, num2, num1)
  ans = result
  num1 = ""
  num2 = ""
  display.textContent = result
}

function clearDisplay() {
  num1 = ""
  num2 = ""
  display.textContent = "0"
}

function deleteOneNum() {
  num1 = num1.slice(0, -1)
  display.textContent = num1
}

const buttons = document.querySelectorAll(".buttons button")
const numbers = document.querySelectorAll(".buttons .number")
const operators = document.querySelectorAll(".buttons .operator")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const backspace = document.querySelector(".backspace")
const display = document.querySelector("#display")

let num1 = ""
let num2 = ""
let opr = ""
let ans = ""

numbers.forEach((number) => {
  number.addEventListener("click", populate)
})

operators.forEach((operator) => {
  operator.addEventListener("click", addOperator)
})

equal.addEventListener("click", showResult)
clear.addEventListener("click", clearDisplay)
backspace.addEventListener("click", deleteOneNum)
