jQuery(function ($) {
  var ilys = ['I love you', 'أحبك', 'আমি তোমাকে ভালবাসি', '我爱你', 'Minä rakastan sinua', "Je t'aime", 'Ich liebe dich', "Σ'αγαπώ", 'Szeretlek', 'Aku mencintaimu', 'Is tú mo ghrá', '愛してる', '사랑해', 'Kocham cię', 'Eu te amo', 'Я люблю тебя', 'Te amo', 'Nakupenda', 'Mahal kita', 'ฉันรักคุณ', 'Seni seviyorum', '	میں تم سے پیار کرتا ہوں', 'איך האָב דיך ליב', 'Səni sevirəm'];
  var counter = 0;
  var $ily = $('#ily')
  $ily.text('Səni sevirəm');
  setInterval(function () {
    $ily.text(ilys[counter++]);
    if (counter >= ilys.length) {
      counter = 0;
    }
  }, 3000)
})

import confetti from 'https://cdn.skypack.dev/canvas-confetti'

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
eventDay = new Date("December 12, 2022 00:00:00");

function pad(num) {
  return num < 10 ? '0' + num : num
}

const counter = () => {
  const today = new Date();
  const timeSpan = today - eventDay;

  const months = Math.floor(timeSpan / month);
  const days = Math.floor((timeSpan % month) / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  monthField.innerHTML = pad(months);
  dayField.innerHTML = pad(days);
  hourField.innerHTML = pad(hours);
  minuteField.innerHTML = pad(minutes);
  secondField.innerHTML = pad(seconds);

  if (secondField.innerHTML == "00") {
    confetti({
      particleCount: 300,
      startVelocity: 40,
      spread: 360,
      origin:
      {
        x: Math.random() - 0.1,
        y: Math.random() - 0.3
      }
    })
  }
}

interval = setInterval(counter, second);

const cursor = document.getElementById('cursor');

const moveCursor = (e) => {
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 75%), calc(${e.clientY}px - 75%), 0)`;
}

window.addEventListener('mousemove', moveCursor)

// Special Events counter

var countDownDate = new Date("May 5, 2023 00:00:00").getTime();

var countDown = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var months = Math.floor(distance / month),
    days = Math.floor((distance % month) / day),
    hours = Math.floor((distance % day) / hour),
    minutes = Math.floor((distance % hour) / minute),
    seconds = Math.floor((distance % minute) / second);

  document.getElementById("countDown").innerHTML = pad(months) + " : " + pad(days) + " : " + pad(hours) + " : "
    + pad(minutes) + " : " + pad(seconds);

  if (distance < 0) {
    clearInterval(countDown);
    document.querySelector(".counter-container").innerHTML = "Happy Birthday Rat !";
  }

  if (distance + day < 0) {
    document.querySelector(".counter-container").style = "display:none;";
  }
  else {
    setTimeout(() => { location.replace("https://rftglyv.github.io/raft/hbd") }, 3000);
  }
}, 1000);