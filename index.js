document.getElementById("loginPage").addEventListener("click", gotologin);
document.getElementById("getstarted").addEventListener("click", gotosignup);

function gotologin(){
    window.location.href = 'login.html';
}
function gotosignup(){
    window.location.href = 'signup.html';
}


if (localStorage.getItem('loginStatus')) {
    let removeLogin = document.getElementById('loginPage');
    removeLogin.remove();
    document.getElementById('signup').innerHTML =  'DASHBOARD';
    document.getElementById('signup').addEventListener('click', gotodashboard);
    function gotodashboard(){
        window.location.href = 'dashboard.html';
    }
}


document.getElementById("aibtn").addEventListener("click", ai);
document.getElementById("editbtn").addEventListener("click", editing);
document.getElementById("programmingbtn").addEventListener("click", programming);
document.getElementById("designbtn").addEventListener("click", design);
document.getElementById("showall").addEventListener("click", showall);




function ai(){
    hideAllExcept('ai');
}

function editing(){
    hideAllExcept('editing');
}

function programming(){
    hideAllExcept('programming');
}

function design(){
    hideAllExcept('design');
}

function hideAllExcept(elementId) {
    let elements = document.getElementsByClassName('course-card');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id === elementId) {
            elements[i].style.display = 'block';
        } else {
            elements[i].style.display = 'none';
        }
    }
}

function showall(){
    let elements = document.getElementsByClassName('course-card');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
    }
}   
