const container = document.querySelector(".container");
let format = "AM";

function showTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let localTime = formatTime(hours);
  hours = checkTime(hours);

  let londonTime = formatTime(hours + 1);
  let tokyoTime = formatTime(hours + 9);
  let dubaiTime = formatTime(hours + 4);
  let newyorkTime = formatTime(hours - 5);
  let sydneyTime = formatTime(hours + 11);
  let berlinTime = formatTime(hours + 2);

  let localHours = addZero(hours);
  let londonHours = addZero(hours + 1);
  let tokyoHours = addZero(hours + 9);
  let dubaiHours = addZero(hours + 4);
  let newyorkHours = addZero(hours - 5);
  let sydneyHours = addZero(hours + 11);
  let berlinHours = addZero(hours + 2);

  let localTimeString = `${localHours}:${addZero(minutes)}:${addZero(
    seconds
  )} ${localTime}`;
  let londonTimeString = `${londonHours}:${addZero(minutes)}:${addZero(
    seconds
  )} ${londonTime}`;
  let tokyoTimeString = `${tokyoHours}:${addZero(minutes)}:${addZero(
    seconds
  )} ${tokyoTime}`;
  let dubaiTimeString = `${dubaiHours}:${addZero(minutes)}:${addZero(
    seconds
  )} ${dubaiTime}`;
  let newyorkTimeString = `${newyorkHours}:${addZero(minutes)}:${addZero(
    seconds
  )} ${newyorkTime}`;
  let sydneyTimeString = `${sydneyHours}:${addZero(minutes)}:${addZero(
    seconds
  )} ${sydneyTime}`;
  let berlinTimeString = `${berlinHours}:${addZero(minutes)}:${addZero(
    seconds
  )} ${berlinTime}`;

  container.innerHTML = `Time in Georgia - ${localTimeString} <br>
    London time: ${londonTimeString}<br>
    Tokyo time: ${tokyoTimeString}<br>
    Dubai time: ${dubaiTimeString}<br>
    New York time: ${newyorkTimeString}<br>
    Sydney time: ${sydneyTimeString}<br>
    Berlin time: ${berlinTimeString}<br>`;
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
    format = "PM";
  } else {
    format = "AM";
  }
  return format;
}

function addZero(time) {
  if (time < 10) {
    time = `0${time}`;
  }
  return time;
}

showTime();
setInterval(showTime, 1000);
