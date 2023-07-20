// document.addEventListener("DOMContentLoaded", redirect);

const login_button = document.getElementById("loginbtn").addEventListener("click",showMessage);

function showMessage(){
    const login_email = document.getElementById("login_email").value;
    const login_pasword = document.getElementById("login_password").value;

    if ( login_email == ""  ||  login_pasword == "" ){
        console.log("check empty fields");
    }else {
        // check if data in db
    }
}

