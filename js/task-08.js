const formReg = document.querySelector('.login-form');
const data = {}
        
formReg.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
        return alert('Всі поля мають бути заповнені!');
    } 

    data.email = email;
    data.password = password;
    
    console.log(data);

    form.reset();
})
