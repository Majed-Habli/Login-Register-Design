  const login_button = document.getElementById("loginbtn");

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
    } catch (err) {
      console.log(err);
      return null;
    }

    
  }

  login_button.addEventListener("click", function (event) {
    event.preventDefault(); 
    getData();
    window.location.href= "/front-end/javascript/dashboard.html"
  });