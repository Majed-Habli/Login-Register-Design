const dashboard = document.getElementById("text_content");
const localstorageData = localStorage.getItem("response")
const Data= JSON.parse(localstorageData);
dashboard.innerHTML = `Welcome ${Data.name}`