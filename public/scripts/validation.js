const formLogin = window.document.querySelector('#form');

formLogin.addEventListener('submit', (e) => {
    let formInputs = window.document.querySelectorAll('.form__input');
    let formLabels = window.document.querySelectorAll('.form__label');
    let arrayError = ['First Name', 'Last Name', 'Looks like this is not an email', 'Password'];

    formInputs.forEach((formInput, i) => {
        
        if(formInput.value == "" || formInput.value == null){
            formInput.classList.add('error');
            formLabels[i].classList.add('label-error');
            if(formLabels[i].getAttribute('for') == 'email-address') {
                formInput.setAttribute('placeholder', 'email@example.com');
                formLabels[i].textContent = `${arrayError[i]}`;
            } else {
                formLabels[i].textContent = `${arrayError[i]} cannot be empty`;
            }
            e.preventDefault();
        } else {
            formInput.classList.remove('error');
            formLabels[i].classList.remove('label-error');
            formLabels[i].textContent = '';
        }
    });
});