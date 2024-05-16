let nameOfUser = localStorage.getItem('username');

document.getElementById('userName').innerHTML = nameOfUser;

if (localStorage.getItem('loginStatus')) {
    let removeLogin = document.getElementById('loginPage');
    removeLogin.remove();
    document.getElementById('signup').innerHTML =  'DASHBOARD';
    document.getElementById('signup').addEventListener('click', gotodashboard);
    function gotodashboard(){
        window.location.href = 'dashboard.html';
    }
}

document.getElementById('claim').addEventListener('click', () =>{
    let timerInterval;
        Swal.fire({
        title: "Reward Claim Success",
        icon: 'success',
        html: "DONE!  <br><b></b> Seconds.",
        timer: 2000,
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
        }
        });
})

document.getElementById('claim2').addEventListener('click', () =>{
    let timerInterval;
        Swal.fire({
        title: "Reward Claim Success",
        icon: 'success',
        html: "DONE!  <br><b></b> Seconds.",
        timer: 2000,
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
        }
        });
})

document.getElementById('claim3').addEventListener('click', () =>{
    let timerInterval;
        Swal.fire({
        title: "Reward Claim Success",
        icon: 'success',
        html: "DONE!  <br><b></b> Seconds.",
        timer: 2000,
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
        }
        });
})


document.getElementById('claim4').addEventListener('click', () =>{
    let timerInterval;
        Swal.fire({
        title: "Reward Claim Success",
        icon: 'success',
        html: "DONE!  <br><b></b> Seconds.",
        timer: 2000,
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
        }
        });
})

document.getElementById('claim5').addEventListener('click', () =>{
    let timerInterval;
        Swal.fire({
        title: "Reward Claim Success",
        icon: 'success',
        html: "DONE!  <br><b></b> Seconds.",
        timer: 2000,
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
        }
        });
})

document.getElementById('claim6').addEventListener('click', () =>{
    let timerInterval;
        Swal.fire({
        title: "Reward Claim Success",
        icon: 'success',
        html: "DONE!  <br><b></b> Seconds.",
        timer: 2000,
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
        }
        });
})