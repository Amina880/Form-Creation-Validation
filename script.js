document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener('submit',function(event){
    event.preventDefault()
    isValid = true;
    messages = []
    //Username validation
    const username1 = document.getElementById('username');
    const username = username1.value.trim();
    if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long.')
        return;
    } 
    //Email validation
    const email1 = document.getElementById('email');
    const email = email1.value.trim();
    if(!email.includes('@') && !email.includes('.')){
        isValid = false;
        messages.push("Email must include the '@' character.");
    }

    //Password validation
    const password1 = document.getElementById('password');
    const password = password11.value.trim();
    if(password.length < 8){
        isValid = false;
        messages.push('Password must be at least 8 characters')
    }
    feedbackDiv.style.display = 'block'
    if (isValid = true){
        feedbackDiv.textContent = 'Registration successful!'
        feedbackDiv.style.color = '#28a745'
    }else{
        feedbackDiv.innerHTML = messages.join('<br>'); 
        feedbackDiv.style.color = "#dc3545";
    }
    })
    form.submit();
})