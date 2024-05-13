document.getElementById("login").addEventListener("click", loginDetails);
document.getElementById("signup").addEventListener("click", gotosignup);



document.getElementById('loginButton').style.backgroundColor =  'rgb(108,100,245)';
document.getElementById('loginButton').style.color = 'white';
document.getElementById('loginButton').style.padding = '6px 20px';
document.getElementById('signup').style.background = 'white';
document.getElementById('signup').style.color = 'rgb(89,89,89)';
document.getElementById('signup').style.fontSize = '1rem';



function gotosignup(){
    window.location.href = 'signup.html';
}

function loginDetails(){
    const userInputPassword = document.getElementById('password').value;
    const hashedUserInput = sha256(userInputPassword);
    if(document.getElementById('email').value == localStorage.getItem('email') && hashedUserInput == localStorage.getItem('password')){
        loginStatus = true;
        localStorage.setItem('loginStatus' , loginStatus)
        window.location.href = "terms.html";
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


