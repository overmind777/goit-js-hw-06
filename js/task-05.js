const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        span.textContent = input.value;
    } else {
        span.textContent = 'Anonymous';
    }
    
})