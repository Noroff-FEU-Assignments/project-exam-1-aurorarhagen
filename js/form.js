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

const isRequired = value => value === '' ? false : true;

const isLengthBetween = (length, min, max) => length < min || length > max ? false : true;

const mailValidity = (mail) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
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
    inputField.classList.add('success');

    const error = inputField.querySelector('small');
    error.textContent = '';
}

const checkName = () => {

    let valid = false;
    const min = 5,
        max = 50;
    const nameInput = name.value.trim();

    if (!isRequired(nameInput)) {
        showError(name, 'Please enter your name');
    } else if (!isBetween(nameInput.length, min, max)) {
        showError(name, `Your name must be between ${min} and ${max} characters.`)
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
        showError(mail, 'Please enter your email.');
    } else if (!isEmailValid(mail)) {
        showError(mail, 'Your Email is not valid.')
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
        showError(subject, 'Please enter a subject.');
    } else if (!isBetween(subjectInput.length, min, max)) {
        showError(subject, `The subject must be between ${min} and ${max} characters.`)
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
        showError(message, 'Please enter a message.');
    } else if (!isBetween(messageInput.length, min, max)) {
        showError(message, `Your message must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(message);
        valid = true;
    }
    return valid;
}
