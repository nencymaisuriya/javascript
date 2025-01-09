
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


 
