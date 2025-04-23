let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let email=document.getElementById("emailAddress");
let password=document.getElementById("passwordInput");


// Fill Data

let list=[];
function addProduct(){

    if (emailExsist()){
        Toastify({
            text: "Email is already registered!",
            duration: 3000,
            gravity: "bottom",
            position: "center",
            backgroundColor: "#ff5f6d",
            className: "custom-toastify",
        }).showToast();
        email.classList.add("is-invalid");
        return ;
    }
    if (firstNameValidation() && lastNameValidation() && emailValidation() && passwordValidation() ){
        var singleObject={
            fName: firstName.value,
            lName: lastName.value,
            email: email.value,
            pass: password.value,
        }
        list.push(singleObject);
        localStorage.setItem("list",JSON.stringify(list));
        console.log(list);
        clearData();
        Toastify({
            text: "Signup completed successfully!",
            duration: 3000,
            gravity: "bottom",
            position: "center",
            className: "custom-toastify",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();          
    }
    
}

if (JSON.parse(localStorage.getItem("list"))!=null){
    list=JSON.parse(localStorage.getItem("list"));
}

// clear Data
function clearData(){
    firstName.value="";
    lastName.value="";
    email.value="";
    password.value="";
}



// validation

// function firstNameValidation(){
//     let regxName=/^[a-z0-9_-]{3,15}$/i;
//     let errorName=document.getElementById("errorFname");
//     if (regxName.test(firstName.value)){
//         firstName.classList.add("is-valid");
//         firstName.classList.remove("is-invalid");
//         errorName.classList.remove("d-block");
//         errorName.classList.add("d-none");
//         return true;
//     } else{
//         firstName.classList.add("is-invalid");
//         firstName.classList.remove("is-valid");
//         errorName.classList.remove("d-none");
//         errorName.classList.add("d-block");
//         return false;
//     }
// }


// function lastNameValidation(){
//     let regxName=/^[a-z0-9_-]{3,15}$/i;
//     let errorName=document.getElementById("errorLname");
//     if (regxName.test(lastName.value)){
//         lastName.classList.add("is-valid");
//         lastName.classList.remove("is-invalid");
//         errorName.classList.remove("d-block");
//         errorName.classList.add("d-none");
//         return true;
//     } else{
//         lastName.classList.add("is-invalid");
//         lastName.classList.remove("is-valid");
//         errorName.classList.remove("d-none");
//         errorName.classList.add("d-block");
//         return false;
//     }
// }

// function emailValidation(){
//     let regxEmail=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i;
//     let errorEmail=document.getElementById("errorEmail");
//     if (regxEmail.test(email.value)){
//         email.classList.add("is-valid");
//         email.classList.remove("is-invalid");
//         errorEmail.classList.remove("d-block");
//         errorEmail.classList.add("d-none");
//         return true;
//     } else{
//         email.classList.add("is-invalid");
//         email.classList.remove("is-valid");
//         errorEmail.classList.remove("d-none");
//         errorEmail.classList.add("d-block");
//         return false;
//     }
// }


// function passwordValidation(){
//     let regxPass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
//     let errorPass=document.getElementById("errorPass");
//     if (regxPass.test(password.value)){
//         password.classList.add("is-valid");
//         password.classList.remove("is-invalid");
//         errorPass.classList.remove("d-block");
//         errorPass.classList.add("d-none");
//         return true;
//     } else{
//         password.classList.add("is-invalid");
//         password.classList.remove("is-valid");
//         errorPass.classList.remove("d-none");
//         errorPass.classList.add("d-block");
//         return false;
//     }
// }



//  best Validation 

function validateInput(inputElement, regex, errorElementId) {
    let errorElement = document.getElementById(errorElementId);
    if (regex.test(inputElement.value)) {
        inputElement.classList.add("is-valid");
        inputElement.classList.remove("is-invalid");
        errorElement.classList.remove("d-block");
        errorElement.classList.add("d-none");
        return true;
    } else {
        inputElement.classList.add("is-invalid");
        inputElement.classList.remove("is-valid");
        errorElement.classList.remove("d-none");
        errorElement.classList.add("d-block");
        return false;
    }
}


function firstNameValidation() {
    let regex = /^[a-z0-9_-]{3,15}$/i;
    return validateInput(firstName, regex, "errorFname");
}

function lastNameValidation() {
    let regex = /^[a-z0-9_-]{3,15}$/i;
    return validateInput(lastName, regex, "errorLname");
}

function emailValidation() {
    let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i;
    return validateInput(email, regex, "errorEmail");
}

function passwordValidation() {
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    return validateInput(password, regex, "errorPass");
}

firstName.addEventListener("input",firstNameValidation);
lastName.addEventListener("input",lastNameValidation);
email.addEventListener("input",emailValidation);
password.addEventListener("input",passwordValidation);


// email is exisist
function emailExsist(){
    for (let i=0; i<list.length; i++){
        if (email.value===list[i].email){
            return true;
        }
    }
    return false;
}

