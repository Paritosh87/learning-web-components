var signupForm = document.getElementById('signup');

signupForm.addEventListener('submit', function (event) {

var firstName = document.getElementById("first-name").value;
var lastName = document.getElementById("last-name").value;
var dob = document.getElementById("dob").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
        // stop the event from its default action: submitting the form 
        event.preventDefault();
        if ((validator.isEmpty(firstName) || (firstName.length<2)) || (validator.isEmpty(lastName) || lastName.length<2)
        	|| (validator.isEmpty(dob) || !validator.isBeforeToday(dob)) 
        	|| (validator.isEmpty(email) || !validator.isEmailAddress(email))
        	|| (validator.isEmpty(password) || (password.length<6 || password.length>8))) {
             signupForm.className = "invalid";
         console.log(signup.className);
        }

}, false);