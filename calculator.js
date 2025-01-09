
// function getOperation() {
//     const operation = prompt("Choose an operation: +, -, *, /");
//     return operation;
//   }
 
//   function getNumbers() {
//     const num1 = parseFloat(prompt("Enter first number:"));
//     const num2 = parseFloat(prompt("Enter second number:"));
//     return { num1, num2 };
//   }
 
  function calculate(operation, num1, num2) {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
       
        if (num2 === 0) {
          return "Cannot divide by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  }
  
  function runCalculator() {
    const { num1, num2 } = getNumbers();
    const result = calculate( num1, num2);
    alert(`Result: ${result}`);
  }
  
  runCalculator();