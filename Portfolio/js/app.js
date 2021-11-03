//const Mail = require("nodemailer/lib/mailer");
// const SMTPConnection = require("nodemailer/lib/smtp-connection");
// let connection = new SMTPConnection(options);


const contactForm = document.querySelector('.contact-form');

let name  =  document.getElementById('name');
let email =  document.getElementById('email');
let subject =  document.getElementById('subject');
let message =  document.getElementById('message');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    console.log(formData);

    let xhr = new XMLHttpRequest(); 
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        
        if(xhr.responseText == 'success'){
            alert('Email verzonden')
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
            
        }else{
            alert('ERROR')
        }
    }
    xhr.send(JSON.stringify(formData));
    
})
      