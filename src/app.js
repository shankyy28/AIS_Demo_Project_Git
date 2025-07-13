const display = document.getElementById('display');
const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'];

const btnContainer = document.querySelector('.buttons');
buttons.forEach(val => {
  const btn = document.createElement('button');
  btn.textContent = val;
  btn.addEventListener('click', () => onClick(val));
  btnContainer.appendChild(btn);
});

function onClick(val) {
  if (val === 'C') {
    display.value = '';
  } else if (val === '=') {
    try {
      display.value = eval(display.value) || '';
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value += val;
  }
}