const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
    const text = textInput.value;
    if (text.length < +textInput.dataset.length || text.length > +textInput.dataset.length) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    } else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
})

