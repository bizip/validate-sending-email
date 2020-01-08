// variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');
//event listerners
eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', appInit);
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    //send message and reset form
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);

}
//functions

//app initialization
function appInit() {
    sendBtn.disabled = true;
}
//sending email by providing gift to the sender
function sendEmail(e) {
    e.preventDefault();
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';
    //hide spinner the show gif
    setTimeout(function() {
        spinner.style.display = 'none';
        //show image
        document.querySelector('#loaders').appendChild(sendEmailImage);
        setTimeout(function() {
            sendEmailForm.reset();
            sendEmailImage.remove();
        }, 4000);
    }, 3000);
    //display emage
    sendEmailImage = document.createElement('img');
    sendEmailImage.src = 'img/mail.gif';
    sendEmailImage.style.display = 'block';
}

//validate Field
function validateField() {
    let errors;
    //validate the field

    validateLength(this);
    if (this.type === 'email') {
        validateEmail(this);

    }
    errors = document.querySelectorAll('.rror');
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (errors.length === 0) {
            sendBtn.disabled = false;
        }
    }
}
//function validate the lenth of field
function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//check for the @ in the value
function validateEmail(field) {
    let textEmail = field.value;
    if (textEmail.indexOf('@') !== -1) {

        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
// adding functionality to reset button

//reset form
function resetForm() {
    sendEmailForm.reset();
}