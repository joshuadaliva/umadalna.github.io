if (!localStorage.getItem('loginStatus')) {
    window.location.href = 'login.html';
}

let nameOfUser = localStorage.getItem('username');

document.getElementById('userName').innerHTML = nameOfUser;


document.getElementById('logout').style.backgroundColor =  'rgb(108,100,245)';
document.getElementById('logout').style.color = 'white';
document.getElementById('logout').style.padding = '6px 15px';

document.getElementById('logout').addEventListener('click', logoutPage);
 
function logoutPage(){
    localStorage.clear();
    window.location.href = 'index.html';
}


document.getElementById('courses').addEventListener('click', () => {
    window.location.href = 'courses.html';
})
document.getElementById('continue').addEventListener('click', ()=> {
    window.location.href = 'takingcourse.html';
})
