function startTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  if (hours > 12) {
    hours = hours - 12;
  }
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  document.getElementById("timeText").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
