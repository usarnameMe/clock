const container = document.querySelector(".container");
let format = "AM";

function showTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let formatedTime = formatTime(hours);
  hours = checkTime(hours);

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  container.innerHTML = `${hours}:${minutes}:${seconds} ${formatedTime}`;
}

function checkTime(time) {
  if (time > 12) {
    time = time - 12;
  }
  if (time === 0) {
    time = 12;
  }
  return time;
}

function formatTime(hours) {
  if (hours >= 12) {
  }
  return (format = "PM");
}

function addZero(time) {
  if (time < 10) {
    time = `0${time}`;
  }
  return time;
}

showTime();
setInterval(showTime, 1000);
