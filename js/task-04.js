let counterValue = 0;
const counterContainer = document.querySelector('#counter');

const incrementButton = counterContainer.querySelector('[data-action = increment]');
const decrementButton = counterContainer.querySelector('[data-action = decrement]');
const counterSpan = counterContainer.querySelector('#value');

function updateCounter() {
    counterSpan.textContent = counterValue;
}

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateCounter();
});

updateCounter();


