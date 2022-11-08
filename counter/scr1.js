let monthField = document.getElementById('month');
let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

let interval;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;

var eventDay = new Date();
eventDay = new Date("November 17, 2022 00:00:00");

const countDownFn = () => 
{
  const today = new Date();
  const timeSpan = eventDay - today;

    const months = Math.floor(timeSpan / month);
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    monthField.innerHTML = months;
    dayField.innerHTML = days;
    hourField.innerHTML = hours;
    minuteField.innerHTML = minutes;
    secondField.innerHTML = seconds;

}

interval = setInterval(countDownFn, second);