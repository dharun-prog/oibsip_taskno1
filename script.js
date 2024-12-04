let historyField = document.getElementById("history");
let resultField = document.getElementById("result");
let currentInput = ""; // Current input string
let history = ""; // History string

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      currentInput += value;
      resultField.textContent = currentInput;
    } else if (button.id === "clear") {
      currentInput = "";
      history = "";
      resultField.textContent = "0";
      historyField.textContent = "";
    } else if (button.id === "del") {
      currentInput = currentInput.slice(0, -1);
      resultField.textContent = currentInput || "0";
    } else if (button.id === "enter") {
      try {
        let evaluatedResult = evaluateExpression(currentInput);
        history = currentInput;
        currentInput = evaluatedResult.toString();
        historyField.textContent = history;
        resultField.textContent = currentInput;
      } catch (error) {
        resultField.textContent = "Error";
      }
    }
  });
});

// Evaluate expression
function evaluateExpression(expression) {
  if (expression.includes("sqrt")) {
    return Math.sqrt(parseFloat(expression.split("sqrt")[1]));
  } else {
    return eval(expression.replace("x", "*").replace("÷", "/"));
  }
}
