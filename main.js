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
      display.value = '8';
      break;

    default:
      break;
  }
});
