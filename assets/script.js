var currentDay=document.querySelector("#currentDay");
var newDate=(new Date());
var myEvent=document.querySelector(".myEvent");
var storedEvent= localStorage.getItem("myEvent");
var button=document.querySelector("button");

console.log(new Date());
document.getElementById("currentDay").innerHTML=newDate.toLocaleString();


function store(){
    myEvent=document.getElementById("myEvent");
    localStorage.setItem("myEvent", InputEvent.value);
    console.log(myEvent);
}
//having trouble running the user local storage

$(button).on("click", function(){
localStorage.setItem("myEvent", InputEvent.value);
});
