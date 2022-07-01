console.log('Alaram Clock');
// You have to crate an alarm clock in javascript (Use your creativity)
// Allow user to set alarm for a certain time

// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
// audio.play();


let time = document.getElementById('time');
let session = document.getElementById('session')
var audio = new Audio('alaram.mp3');

function displayTime() {
    let setTime = new Date()
    let h = setTime.getHours();
    let m = setTime.getMinutes();
    let s = setTime.getSeconds();
    if (h >= 12) {
        session.innerHTML = 'PM'
    }
    else {
        session.innerHTML = 'AM'

    }
    let html = '';
    html = `${h} : ${m} : ${s}`;
    time.innerHTML = html
}

setInterval(displayTime, 10);


let selective = document.getElementById('selective');
let setAlaramBtn = document.getElementById('setAlaramBtn');
setAlaramBtn.addEventListener('click', setAlaram);

function ringbell() {
    audio.play();
}
let timeToAlarm = null;
function setAlaram(e) {
    e.preventDefault();
    let hour = document.getElementById('alarm');
    let alarmDate = new Date(hour.value)
    console.log(alarmDate);
    currentDate = new Date();

    let timeToAlarm = alarmDate - currentDate;
    console.log(timeToAlarm);

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            ringbell();
            console.log('ringing now')
        }, timeToAlarm)
    }
}
let stopAlaram = document.getElementById('stopBtn');
stopAlaram.addEventListener('click', clearAlarm)
// setAlaram()
function clearAlarm() {
    timeToAlarm = alarmDate - currentDate;
    audio.pause();
    if (timeToAlarm) {
        clear(timeToAlarm);

        console.log('Alarm cleared');
    }
}
function showAlaram(){
    let alaramfix = document.getElementById('alaramfix');
    let html = '';
   alarmDate.forEach(element => {
     console.log(element)
   });
}
