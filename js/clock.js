console.log('clock');


function setClock(){
    let showTime = document.getElementById('clock');
    // Get the new date
    let currentTime = new Date();

    // Extract hour, minute and second from the date
    let currentHrs = currentTime.getHours();
    let currentMins = currentTime.getMinutes();
    let currentSec = currentTime.getSeconds();

   // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHrs < 12) ? 'AM' : 'PM';
    
   // Choose AM/PM as per the time of the day
   currentHrs = (currentHrs> 12)? currentHrs - 12 : currentHrs;
   currentHrs = (currentHrs == 00)? 12 : currentHrs; 

   let currentStr = addZero(currentHrs) + ":" + addZero(currentMins) + ":" + addZero(currentSec) + " " + timeOfDay;
   // Insert the time string inside the DOM
   showTime.innerHTML = currentStr;

}
 setInterval(setClock,10)


 // Pad 0 if minute or second is less than 10 (single digit)
 function addZero(zero){
   zero = (zero < 10) ? '0' + zero  : '' + zero;
   return zero
}