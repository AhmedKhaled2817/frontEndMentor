let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let emailInput=document.getElementById("emailInput");
let submitBtn=document.querySelector(".submitBtn");

// add product
let list=[];

function addDetails(){
    if (firstNameValidation() && lastNameValidation() && emailInputValidation() && !emailIsExsist()){
        let singleObject={
            fName:firstName.value,
            lName:lastName.value,
            emailInput:emailInput.value,
        }
        list.push(singleObject);
        console.log(list);
        localStorage.setItem("list",JSON.stringify(list));
        clearInput();
    } 
    if (localStorage.getItem("list") !=null){
        list=JSON.parse(localStorage.getItem("list"));
    }
}

submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    addDetails();
});

// clear input

function clearInput(){
    firstName.value=null;
    lastName.value=null;
    emailInput.value=null;
    firstName.classList.remove("is-valid");
    lastName.classList.remove("is-valid");
    emailInput.classList.remove("is-valid");
}

//validation
function validation(inputElement,regx){
    if (regx.test(inputElement.value)){
        inputElement.classList.add("is-valid");
        inputElement.classList.remove("is-invalid");
        return true;
    }
    else{
        inputElement.classList.remove("is-valid");
        inputElement.classList.add("is-invalid");
        return false;
    }
}

function firstNameValidation(){
    let regx=/^[A-Za-z]{2,20}$/;
    return validation(firstName,regx);
}
function lastNameValidation(){
    let regx=/^[A-Za-z]{2,20}$/;
    return validation(lastName,regx);
}
function emailInputValidation(){
    let regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validation(emailInput,regx);
}
firstName.addEventListener("input",firstNameValidation);
lastName.addEventListener("input",lastNameValidation);
emailInput.addEventListener("input",emailInputValidation);

// email is exsist
function emailIsExsist(){
    for (let i=0; i<list.length;i++){
        if (emailInput.value===list[i].emailInput){
            alert("Email is already exsist");
            return true;
        }
    }
    return false;
}
