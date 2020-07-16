
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
document.getElementById("spanDate").innerHTML = screen.width;
let tomorrow;
if(screen.width <= 600){
    tomorrow = new Date();
    var currentDate = tomorrow.getDate()-2;
    var currentMonth = tomorrow.getMonth()+1;
    var currentYear = tomorrow.getFullYear();
    var displayDate = (currentDate.toString().length < 2) ? "0"+currentDate : currentDate;
    var displayMonth = (currentMonth.toString().length < 2) ? "0"+currentMonth : currentMonth;
    var displayYear = (currentYear.toString().length < 2) ? "0"+currentYear : currentYear;
    document.getElementById("spanDate").innerHTML = displayDate+"/"+displayMonth+"/"+displayYear;
}
else if(screen.width > 600){
    tomorrow = new Date();
    tomorrow.setTime(tomorrow.getTime() - (2*1000*3600*24));       
    document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();
}

// Extra Modal code
var modal = document.getElementById("Modal");
var btn = document.getElementById("Btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
