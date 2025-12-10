function validateForm(event) {
    event.preventDefault(); 

 
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const tos = document.getElementById('tos');


    let isValid = true;
    const errors = document.getElementsByClassName('error-msg');
    

    for(let err of errors) { err.style.display = 'none'; }


    if (name.value.trim() === "") {
        document.getElementById('err-name').style.display = 'block';
        document.getElementById('err-name').innerText = "Name is required.";
        isValid = false;
    }

    if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        document.getElementById('err-email').style.display = 'block';
        document.getElementById('err-email').innerText = "Enter a valid email (must contain @ and .).";
        isValid = false;
    }


    if (phone.value.trim() === "" || isNaN(phone.value)) {
        document.getElementById('err-phone').style.display = 'block';
        document.getElementById('err-phone').innerText = "Phone must be numeric.";
        isValid = false;
    }

    if (message.value.length < 20) {
        document.getElementById('err-message').style.display = 'block';
        document.getElementById('err-message').innerText = "Message must be at least 20 characters.";
        isValid = false;
    }

    if (!tos.checked) {
        document.getElementById('err-tos').style.display = 'block';
        document.getElementById('err-tos').innerText = "You must agree to the Terms.";
        isValid = false;
    }

    if (isValid) {
        alert("Message Sent Successfully!");
        
    }
}