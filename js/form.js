             //* Form validation //*

// Name - min 5 characters 

// Valid e-mail adress

// Subject - min 15 characters

// Message - min 25 characters 

// Error messages 

const name = document.querySelector('#name');
const mail = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

const form = document.querySelector('.send')

form.addEventListener('submit', function (e){
    e.preventDefault();
})


const isRequired = value => value === '' ? false : true;

const isLengthBetween = (length, min, max) => length < min || length > max ? false : true;

const emailValidity = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const showError = (input, message) => {
    const inputField = input.parentElement;
    inputField.classList.remove('success');
    inputField.classList.add('error');

    const error = inputField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const inputField = input.parentElement;

    inputField.classList.remove('error');
    inputFieldclassList.add('success');

    const error = inputField.querySelector('small');
    error.textContent = '';
}

const checkName = () => {

    let valid = false;
    const min = 5,
        max = 50;
    const nameInput = name.value.trim();

    if (!isRequired(nameInput)) {
        showError(name, 'Name cannot be blank.');
    } else if (!isBetween(nameInput.length, min, max)) {
        showError(name, `Name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(nameInput);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {

    let valid = false;
    const emailInput = mail.value.trim();
    if (!isRequired(emailInput)) {
        showError(mail, 'Email cannot be blank.');
    } else if (!isEmailValid(mail)) {
        showError(mail, 'Email is not valid.')
    } else {
        showSuccess(mail);
        valid = true;
    }
    return valid;
}

const checkSubject = () => {

    let valid = false;
    const min = 15,
        max = 150;
    const subjectInput = subject.value.trim();

    if (!isRequired(subjectInput)) {
        showError(subject, 'Subject cannot be blank.');
    } else if (!isBetween(subjectInput.length, min, max)) {
        showError(subject, `Subject must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(subject);
        valid = true;
    }
    return valid;
}

const checkMessage = () => {

    let valid = false;
    const min = 25,
        max = 1000;
    const messageInput = message.value.trim();

    if (!isRequired(messageInput)) {
        showError(message, 'Message cannot be blank.');
    } else if (!isBetween(messageInput.length, min, max)) {
        showError(message, `Message must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(message);
        valid = true;
    }
    return valid;
}
