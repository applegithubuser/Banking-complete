// set click listener event

document.getElementById("login-buttton").addEventListener("click", function () {
//get email 
const userEmailField = document.getElementById("user-email");
const userEmail = userEmailField.value;


// get password
const userPasswordField = document.getElementById("user-password");
const userPassword = userPasswordField.value;


// set password / check valudation
if (userEmail == "apple@gmail.com" && userPassword == 1234){
    window.location.href = "banking.html"
    alert("Login Successfull")

} else if (userEmail != "apple@gmail.com" || userPassword != 1234){
    alert("User Email or Password is not valid")
}


})