// document.addEventListener("DOMContentLoaded", redirect);
const login_email = document.getElementById("login_email");
const login_pasword = document.getElementById("login_password").value;

const login_button = document.getElementById("loginbtn").addEventListener("click",showMessage);

function showMessage(){
    console.log( login_email );
}