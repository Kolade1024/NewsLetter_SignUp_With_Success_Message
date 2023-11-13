const CONTAINER = document.querySelector(".container");
const SUCCESS_State = document.querySelector(".success-container")
const SUBMIT_BTN = document.querySelector(".container button");
const INPUT = document.querySelector("form #email");
const ERROR_MSG = document.querySelector(".container .input_top .errorMsg");
const userEmail = document.querySelector(".success-container .mail");

SUBMIT_BTN.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let email = INPUT.value;
    let regExp = /\w@gmail.com$/;
    let Valid =regExp.test(email);
   
    if(Valid==true){
        userEmail.textContent = email;
        CONTAINER.style.display = "none";
        SUCCESS_State.style.display  = "flex";
        INPUT.className = "sucess";
        ERROR_MSG.classList.remove("errorMsg");
        ERROR_MSG.style.display = "block";
    }else{
        ERROR_MSG.style.display = "block";
        INPUT.className = "error";
        ERROR_MSG.classList.add("errorMessage");
    }
})