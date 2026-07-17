function showpassword(){
    var password=document.querySelector(".password")
    if(password.type=="password")
    {
        password.type="Text"
    }
    else
    {
        password.type="password"
    }
}
function login(){
    alert("You successfully logged in...!Thank You")
    window.location.href="dashboard.html"
}
function createAccount() {
    alert("Account created successfully!");
    window.location.href = "index.html";
}
