document.addEventListener("DOMContentLoaded",function(){
    const registrationForm = document.getElementById("registrationForm");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById ("confirmPassword");

    registrationForm.addEventListener("submit",function(event){
        if(passwordInput.value !== confirmPasswordInput.value){
            alert("Password do not match");
            event.preventDefault();
        }
    });
});