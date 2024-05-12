if (!localStorage.getItem('loginStatus')) {
    window.location.href = 'login.html';
}

let nameOfUser = localStorage.getItem('username');

document.getElementById('userName').innerHTML = nameOfUser;