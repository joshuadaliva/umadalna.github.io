document.getElementById("signup").addEventListener("click", accessHTML);
document.getElementById("signupDetails").addEventListener("click", putDetails);

let email, username, password;


// Function to access HTML
function accessHTML() {
    window.location.href = "signup.html";
}

function putDetails(){
    if (document.getElementById('name').value.trim() == "" || document.getElementById('email').value.trim() == "" ||  document.getElementById('password').value.trim() == ""){
            alert("no value maybe in name, username or password please try again")
        }
    username = document.getElementById('name').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

}   

