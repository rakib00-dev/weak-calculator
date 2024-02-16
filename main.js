const display = document.getElementById('display');

function forDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = display.value.slice(0, -1);
}

function clearAllDisplay() {
  display.value = null;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Syntax Error';
  }
}

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case '8':
      display.value += '8';
      break;
    case '9':
      display.value += '9';
      break;
    case '0':
      display.value += '0';
      break;
    case '7':
      display.value += '7';
      break;
    case '6':
      display.value += '6';
      break;
    case '5':
      display.value += '5';
      break;
    case '4':
      display.value += '4';
      break;
    case '3':
      display.value += '3';
      break;
    case '2':
      display.value += '2';
      break;
    case '1':
      display.value += '1';
      break;
    case '.':
      display.value += '.';
      break;
    case 'Backspace':
      display.value = display.value.slice(0, -1);
      break;
    case 'Delete':
      display.value = null;
      break;
    case '+':
      display.value += '+';
      break;
    case '-':
      display.value += '-';
      break;
    case '/':
      display.value += '/';
      break;
    case '*':
      display.value += '*';
      break;
    case 'Enter':
      calculate();
      break;

    default:
      break;
  }
});
