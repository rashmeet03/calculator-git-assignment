function calculate(operation) {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultSpan = document.getElementById("result-value");

  const n1 = parseFloat(num1Input.value);
  const n2 = parseFloat(num2Input.value);

  if (isNaN(n1) || isNaN(n2)) {
    resultSpan.textContent = "Please enter both numbers.";
    return;
  }

  let result;

  if (operation === "add") {
    result = n1 + n2;
  } else if (operation === "sub") {
    result = n1 - n2;
  } else if (operation === "mul") {
    result = n1 * n2;
  } else if (operation === "div") {
    if (n2 === 0) {
      resultSpan.textContent = "Cannot divide by zero.";
      return;
    }
    result = n1 / n2;
  } else {
    resultSpan.textContent = "Unknown operation.";
    return;
  }

  const formatted = Number(result.toFixed(6));
  resultSpan.textContent = formatted;
}
