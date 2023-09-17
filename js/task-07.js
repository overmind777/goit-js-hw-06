const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

slider.addEventListener('input', (event) => {
    const sliderValue = event.currentTarget.value + 'px';
    text.style.fontSize = sliderValue;
})