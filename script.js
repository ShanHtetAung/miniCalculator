const form = document.querySelector("form");
const num1Field = form.querySelector(".firstNum"),
  num1Input = num1Field.querySelector("input");
const num2Field = form.querySelector(".secNum"),
  num2Input = num2Field.querySelector("input");
const opeField = form.querySelector(".operator"),
  operator = form.querySelector("#operation");
const result = document.querySelector("#result");

let finalresult;

form.onsubmit = (e) => {
  e.preventDefault(); //preventing form from submitting

  // Function to check if a value is a valid number
  function isValidNumber(value) {
    return  /^[+-]?((\.\d+)|(\d+(\.\d+)?))$/.test(value);
  }

  function showError(field, message) {
    field.classList.add("shake", "errorshow");
    field.querySelector(".error-txt").innerHTML = message;
  }

  function hideError(field) {
    field.classList.remove("shake", "errorshow");
  }

  // Check the first number
  if (num1Input.value === "") {
    showError(num1Field, "First Number can't be blank");
  } else if (!isValidNumber(num1Input.value)) {
    showError(num1Field, "Enter a valid number");
  } else {
    hideError(num1Field);
  }

  // Check the second number
  if (num2Input.value === "") {
    showError(num2Field, "Second number can't be blank");
  } else if (!isValidNumber(num2Input.value)) {
    showError(num2Field, "Enter a valid number");
  } else {
    hideError(num2Field);
  }

  // Check the operator
  if (operator.value === "empty") {
    showError(opeField, "Please select an operator");
  } else {
    hideError(opeField);
  }

  // Remove shake class after 500ms
  setTimeout(() => {
    num1Field.classList.remove("shake");
    num2Field.classList.remove("shake");
    opeField.classList.remove("shake");
  }, 500);



  if (
    !num1Field.classList.contains("error") &&
    !num2Field.classList.contains("error") &&
    !opeField.classList.contains("error")
  ) {
   
    
    num1 = Number(num1Input.value);
    num2 = Number(num2Input.value);
    switch (operator.value) {
      case "add":
        finalresult = num1 + num2;
        // console.log(finalresult);
        break;
      case "subtract":
        finalresult = num1 - num2;
        break;
      case "multiply":
        finalresult = num1 * num2;
        break;
      case "divide":
        finalresult = num1 / num2;
        break;

      default:
        console.log("error");
        break;
    }
    result.innerHTML = finalresult;
  }
};
