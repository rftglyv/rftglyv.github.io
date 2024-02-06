jQuery(function ($) {
  var hbds = ['Happy Birthday!', 'Best UI/UX designer'];
  var counter = 0;
  var $hbd = $('#hbd')
  $hbd.text('Happy Birthday!');
  setInterval(function () {
    $hbd.text(hbds[counter++]);
    if (counter >= hbds.length) {
      counter = 0;
    }
  }, 2000)
})

import confetti from 'https://cdn.skypack.dev/canvas-confetti'

let divTimer = document.querySelector(".timer"),
divBack = document.querySelector(".back"),
body = document.querySelector("body")

setInterval(() => {
  confetti({
    particleCount: 300,
    startVelocity: 40,
    spread: 360,
    origin:
    {
      x: Math.random() - 0.01,
      y: Math.random() - 0.3
    }
  })
}, 3000);

// Special Events counter

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  month = day * 30;

function pad(num) {
  return num < 10 ? '0' + num : num
}

var countDownDate = new Date("February 6, 2024 23:20:30").getTime();

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
    document.getElementById("countDown").innerHTML = "Happy Birthday Sanan !";
    divTimer.classList.add("fade-out");
  }
  
  if (distance < -5000) {
    clearInterval(countDown);
    body.removeChild(divTimer)
    body.removeChild(divBack)
    var end = Date.now() + 5 * second;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }())
  }
}, 1000);