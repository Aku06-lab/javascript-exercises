const email = document.getElementById("mail");
const postalCode = document.getElementById("pcode");
const country = document.getElementById("ctry");
const passWord = document.getElementById("pwd");
const passWordConfirm = document.getElementById("pwdc");


const errorMail = document.getElementById("errorEmail");
const errorPostal = document.getElementById("errorPcode");
const errorCtry = document.getElementById("errorCty");
const errorPwd = document.getElementById("errorPwd");
const errorPwdc= document.getElementById("errorPwdc");

const subbtn= document.querySelector(".submitButton")


const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const isValidEmail = ()=> {
    const validity = email.value.length !== 0 &&
    emailRegExp.test(email.value);
    return validity
}


const isValidCountry = ()=> {
    const validity = country.value.trim() !== "";
    return validity;
}

const isValidPostal = ()=> {
    const validity = /^\d{4}$/.test(postalCode.value);
    return validity;
}

const isValidPwd = ()=> {
    const validity = passWord.value.length === 6 &&
    /[A-Z]/.test(passWord.value) &&
    /[a-z]/.test(passWord.value)&&
    /[0-9]/.test(passWord.value);
    return validity;
}

const isValidPwdConfirm = ()=> {
    const validity = (passWord.value === passWordConfirm.value) &&
        passWordConfirm.value != "";
    return validity;
}


function handleInput(input, error, validate, message){
    const valid = validate();

    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid",!valid);
    
    error.textContent = valid ? "": message;
    error.style.color = "red";
}

fields = [
    [email, errorMail, isValidEmail, "Please enter a valid email"],
    [postalCode, errorPostal, isValidPostal, "Please enter a valid Postal Code"],
    [country, errorCtry, isValidCountry, "please enter a country name"],
    [passWord, errorPwd, isValidPwd, "Please make sure the password contains alphabets or numbers only"],
    [passWordConfirm, errorPwdc, isValidPwdConfirm,"Please make sure the password matches"]
];


fields.forEach(([input, error, validate, message]) => {
    input.addEventListener("input",()=> {
        handleInput(input, error, validate, message)
    });

    input.addEventListener("blur",()=> {
        handleInput(input, error, validate, message)
    })
    
});

const form = document.getElementsByClassName("form")[0];

form.addEventListener("submit",(event)=> {
    event.preventDefault();

    fields.forEach(([input, error, validate, message]) => {
        handleInput(input, error, validate, message);
    });

});