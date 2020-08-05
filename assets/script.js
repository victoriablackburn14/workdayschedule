var currentDay=document.querySelector("#currentDay");
var newDate=(new Date());
var myEvent=document.querySelector(".myEvent");
var storedEvent= localStorage.getItem("myEvent");
var button=document.querySelector("button");

console.log(newDate.getHours());
document.getElementById("currentDay").innerHTML=newDate.toLocaleString();


function store(){
    event1=$("#event1"); 
    localStorage.setItem("event1", event1.value);
    console.log(event1);

    event2=$("#event2"); 
    localStorage.setItem("event2", event2.value);
    console.log(event2);

    event3=$("#event3"); 
    localStorage.setItem("event3", event3.value);
    console.log(event3);

    event4=$("#event4"); 
    localStorage.setItem("event4", event4.value);
    console.log(event4);

    event5=$("#event5"); 
    localStorage.setItem("event5", event5.value);
    console.log(event5);

    event6=$("#event6"); 
    localStorage.setItem("event6", event6.value);
    console.log(event6);

    event7=$("#event7"); 
    localStorage.setItem("event7", event7.value);
    console.log(event7);

    event8=$("#event8"); 
    localStorage.setItem("event8", event8.value);
    console.log(event8);

    event1=$("#event9"); 
    localStorage.setItem("event9", event9.value);
    console.log(event9);
}
    $(button).on("click", function(){
    store();
    });

$('.check').click(function(){
var hour9=parseInt($("#09").text());
var currentHour=parseInt($("newDate.getHours"));
If (hour9==currentHour);{
    $("#09").css('background-color', 'green')
}
If (hour9!==currentHour);{
    $("#09").css('background-color', 'red')
}
var hour10=parseInt($("#10").text());
var currentHour=parseInt($("newDate.getHours"));
If (hour10==currentHour);{
    $("#10").css('background-color', 'green')
}
If (hour10!==currentHour);{
    $("#10").css('background-color', 'red')
}
var hour11=parseInt($("#11").text());
var currentHour=parseInt($("newDate.getHours"));
If (hour11==currentHour);{
    $("#11").css('background-color', 'green')
}
If (hour11!==currentHour);{
    $("#11").css('background-color', 'red')
}
var hour12=parseInt($("#12").text());
var currentHour=parseInt($("newDate.getHours"));
If (hour12==currentHour);{
    $("#12").css('background-color', 'green')
}
If (hour12!==currentHour);{
    $("#12").css('background-color', 'red')
}
var hour13=parseInt($("#13").text());
var currentHour=parseInt($("newDate.getHours"));
If (hour13==currentHour);{
    $("#13").css('background-color', 'green')
}
If (hour13!==currentHour);{
    $("#13").css('background-color', 'red')
}
var hour14=parseInt($("#14").text());
var currentHour=parseInt($("newDate.getHours"));
If (hour14==currentHour);{
    $("#14").css('background-color', 'green')
}
If (hour14!==currentHour);{
    $("#14").css('background-color', 'red')
}
var hour15=parseInt($("#15").text());
var currentHour=parseInt($("newDate.getHours"));
If (hour15==currentHour);{
    $("#15").css('background-color', 'green')
}
If (hour15!==currentHour);{
    $("#15").css('background-color', 'red')
}
var hour16=parseInt($("#16").text());
var currentHour=parseInt($("newDate.getHours"));
If (hour16==currentHour);{
    $("#16").css('background-color', 'green')
}
If (hour16!==currentHour);{
    $("#16").css('background-color', 'red')
}
var hour17=parseInt($("#17").text());
var currentHour=parseInt($("newDate.getHours"));
If (hour17==currentHour);{
    $("#17").css('background-color', 'green')
}
If (hour17!==currentHour);{
    $("#17").css('background-color', 'red')
}

});  




//color coded if .getHours
//put ids on all of the element who's color you want to change
//id for input to put into local storage
// is my id >/< getHours 


