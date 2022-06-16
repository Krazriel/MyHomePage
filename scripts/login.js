var updateDay = setTimeout(getDayOfWeek, 500);
var updateTime = setTimeout(getTimeOfDay, 500);

function getDayOfWeek(){
    const weekName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = new Date();
    var day = weekName[d.getDay()];
    var month = monthName[d.getMonth()];
    var date = d.getDate();


    document.getElementById("dayInfo").innerHTML = day + " " + month + " " + date;
}

function getTimeOfDay(){
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var period = "AM";

    if(hours > 12){
        hours = hours - 12;
        period = "PM";
    }
    if(hours == 0){
        hours = 12;
    }

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    document.getElementById("clockInfo").innerHTML = hours + ":" + minutes + " " + period;
}

function validatePassword(){
    var password = document.getElementById("passwordText");
    if(password.value == "Welcome1"){
        alert("Correct");
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

window.onload=function(){
    const pwdButton = document.getElementById("enterPwd");
    const pwdText = document.getElementById("passwordText");
    pwdButton.addEventListener("click", validatePassword);
    pwdText.addEventListener("keyup", enterPressed);
}


