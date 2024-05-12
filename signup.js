document.getElementById("signup").addEventListener("click", accessHTML);
document.getElementById("signupDetails").addEventListener("click", putDetails);

let username, email, password;



// Function to access HTML
function accessHTML() {
    window.location.href = "signup.html";
}


function putDetails(){
    if (document.getElementById('name').value.trim() == ""){
        Swal.fire({
            title: 'Sign Up error!',
            text: "There's no name provided, please try again",
            icon: 'error',
            confirmButtonText: 'Try again'
          })
    }
    else if(document.getElementById('email').value.trim() == ""){
        Swal.fire({
            title: 'Sign Up error!',
            text: "There's no email provided, please try again",
            icon: 'error',
            confirmButtonText: 'Try again'
          })
        }
    else if(document.getElementById('password').value.trim() == ""){
        Swal.fire({
            title: 'Sign Up error!',
            text: "There's no password provided, please try again",
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
        }   
    else{
        username = document.getElementById('name').value;
        email = document.getElementById('email').value;
        const hashedUserInput = sha256(password = document.getElementById('password').value);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password' , hashedUserInput)


        let timerInterval;
        Swal.fire({
        title: "Sign up Success",
        icon: 'success',
        html: "Moving to login page in <b></b> Seconds.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
            }, 50);
            
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
            window.location.href = "login.html"
        }
        });
        
    }
    
}   

