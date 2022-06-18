let updateDay = setTimeout(getDayOfWeek, 500);
let updateTime = setTimeout(getTimeOfDay, 500);

function getDayOfWeek(){
    const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let d = new Date();
    let day = weekName[d.getDay()];
    let month = monthName[d.getMonth()];
    let date = d.getDate();


    document.getElementById("dayInfo").innerHTML = day + " " + month + " " + date;
}

function getTimeOfDay(){
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let period = "AM";

    if(hours > 12){
        hours = hours - 12;
        period = "PM";
    }
    if(hours == 0){
        hours = 12;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    document.getElementById("clockInfo").innerHTML = hours + ":" + minutes + " " + period;
}

function validatePassword(){
    const password = document.getElementById("passwordText");
    if(password.value == "Welcome1"){
        window.location.assign('homepage.html');
    }
    else{
        alert("Incorrect");
    }
}

function enterPressed(event){
    if (event.key === 'Enter') {
        validatePassword();
    }
}

window.onload = () => {
    const pwdButton = document.getElementById("enterPwd");
    const pwdText = document.getElementById("passwordText");
    pwdButton.addEventListener("click", validatePassword);
    pwdText.addEventListener("keyup", enterPressed);
}


