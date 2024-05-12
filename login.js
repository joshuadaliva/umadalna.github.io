document.getElementById("login").addEventListener("click", loginDetails);


function loginDetails(){
    const userInputPassword = document.getElementById('password').value;
    const hashedUserInput = sha256(userInputPassword);
    if(document.getElementById('email').value == localStorage.getItem('email') && hashedUserInput == localStorage.getItem('password')){
        loginStatus = true;
        localStorage.setItem('loginStatus' , loginStatus)
        window.location.href = "dashboard.html";
    }
    else{
        Swal.fire({
            title: 'Username or Password is incorrect',
            text: "please try again",
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
    }
}


