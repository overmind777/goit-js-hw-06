function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divElControls = document.querySelector('#controls');
const input = divElControls.querySelector('input');
const btnCreate = divElControls.querySelector('[data-create]');
const btnDestroy = divElControls.querySelector('[data-destroy]');

divElControls.appendChild.innerHTML = '<div id="boxes"></div>';
  const divBoxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  const total = +document.querySelector('#controls>input').value;
  createBoxes(total);
})

btnDestroy.addEventListener('click', () => {
  divBoxes.innerHTML = '';
})

function createBoxes(num) {
  
  const size = 30;

  for (let i = 0; i < num; i += 1){
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size + i * 10}px`;
    box.style.height = `${size + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    divBoxes.appendChild(box);
  }
}