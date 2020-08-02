var currentDay=document.querySelector("#currentDay");
var weekday=['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function displaycurrentDay(){    
currentDay=$(moment().weekday());
console.log(currentDay);
$("#currentDay").append(currentDay);
}