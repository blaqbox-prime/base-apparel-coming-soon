const form = document.querySelector("form");
const emailInput = document.forms["email-form"]["email"];
const emailError = document.getElementById("email-error");
const errorIcon = document.getElementById("error-icon");

// Change form border color on input focus
emailInput.addEventListener("focus",()=>{
    form.style.backgroundImage = "none";
});

emailInput.addEventListener("blur", () => {
    form.style.backgroundImage = "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))";
});

// Toggle Error Icon and Message

function toggleErrorMessage(hasError){
    if(hasError){
        emailError.style.display = "block";
        errorIcon.style.display = "block";
        emailInput.focus();
    } else{
        emailError.style.display = "none";
        errorIcon.style.display = "none";
    }
}

// Validate Email
function validateEmail(){
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(emailInput.value.match(mailFormat)){
        emailInput.value == "";
        emailError.innerHTML = "Subsribed Successfully. Thank You!"
        emailError.style.color = "green";
        toggleErrorMessage(false);
    }else{
        toggleErrorMessage(true);
    }
    return false;
}