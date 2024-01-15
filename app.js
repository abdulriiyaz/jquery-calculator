$(document).ready(function () {
    let currentInput = '';
    let operator = '';
    let previousInput = '';
  
    $('.buttons span').click(function () {
      const buttonValue = $(this).text();
  
      if (buttonValue === 'C') {
        clearCalculator();
      } else if (buttonValue === '=') {
        calculateResult();
      } else {
        updateInput(buttonValue);
      }
    });
  
    function clearCalculator() {
      currentInput = '';
      operator = '';
      previousInput = '';
      updateScreen();
    }
  
    function calculateResult() {
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);
  
      if (!isNaN(num1) && !isNaN(num2)) {
        switch (operator) {
          case '+':
            currentInput = num1 + num2;
            break;
          case '-':
            currentInput = num1 - num2;
            break;
          case 'x':
            currentInput = num1 * num2;
            break;
          case '÷':
            currentInput = num1 / num2;
            break;
        }
  
        updateScreen();
        previousInput = currentInput;
        currentInput = '';
        operator = '';
      }
    }
  
    function updateInput(value) {
      if (isOperator(value)) {
        if (currentInput !== '') {
          if (operator !== '') {
            calculateResult();
          } else {
            previousInput = currentInput;
            currentInput = '';
          }
        }
        operator = value;
      } else {
        currentInput += value;
      }
  
      updateScreen();
    }
  
    function updateScreen() {
      $('#screen').text(currentInput !== '' ? currentInput : '0');
    }
  
    function isOperator(value) {
      const operators = ['+', '-', 'x', '÷'];
      return operators.includes(value);
    }
  });
  