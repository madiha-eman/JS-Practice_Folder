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


function selectedHours(){
   let select = document.getElementById('selecthrs');
   let hrs = 12;
   for(let i=1; i<=hrs; i++){
      let option = new Option(i< 10 ? '0' + i : i,i)
      select.options[select.options.length] = option;
   // console.log(select.options[select.options.length] = option)
   }

}

selectedHours()

function selectedMinutes(){
   let selectmin = document.getElementById('selectmin');
   let mins = 59;
   for(let i=1; i<=mins; i++){
      let option = new Option(i< 10 ? '0' + i : i,i)
      selectmin.options[selectmin.options.length] = option;
   // console.log(select.options[select.options.length] = option)
   }

}
selectedMinutes()
