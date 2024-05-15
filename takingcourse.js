if (!localStorage.getItem('loginStatus')) {
    window.location.href = 'login.html';
}
if (localStorage.getItem('loginStatus')) {
    let removeLogin = document.getElementById('loginPage');
    removeLogin.remove();
    document.getElementById('signup').innerHTML =  'DASHBOARD';
    document.getElementById('signup').addEventListener('click', gotodashboard);
    function gotodashboard(){
        window.location.href = 'dashboard.html';
    }
    document.getElementById("getstarted").disabled = true;
}