  const login_button = document.getElementById("loginbtn");
  const register_button = document.getElementById("registerbtn");

  async function getData() {
    const login_email = document.getElementById("login_email").value;
    const login_password = document.getElementById("login_password").value;
    
    const login_data = { email: login_email, password: login_password };
    const url = "http://localhost/Login-Register-Design/back-end/signin.php";
    const body = JSON.stringify(login_data);
    
    try {
      const data = await fetch(url, {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: body
      }).then(response => response.json())
      .then(data=>(localStorage.setItem("response" , JSON.stringify(data))));
      
      console.log(data); 
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


    async function postData() {
    const user_name = document.getElementById("user_name").value;
    const register_email = document.getElementById("register_email").value;
    const user_password = document.getElementById("user_password").value;
    const user_gender = document.getElementById("user_gender").value;
    
    const register_data = { name : user_name,registered_email: register_email, password1: user_password, gender: user_gender };
    const url = "http://localhost/Login-Register-Design/back-end/signup.php";
    const body = JSON.stringify(register_data);
    
    try {
      const data = await fetch(url, {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: body
      }).then(response => response.json())
      .then(data=>(localStorage.setItem("response" , JSON.stringify(data))));
      
      console.log(data); 
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  login_button.addEventListener("click", function (event) {
    event.preventDefault(); 
    getData();
    window.location.href= "/front-end/javascript/dashboard.html"
  });

  register_button.addEventListener("click", function (e) {
    e.preventDefault(); 
    postData();
  });