import confetti from 'https://cdn.skypack.dev/canvas-confetti'

let countDownSelf = document.getElementById("countDown"),
  countDownElements = document.getElementById("countDown").children,
  title = document.getElementById("words")

// Special Events counter

let specialEvents = [
  {
    title: "İmtahana son :",
    endTitle: "Cavablar 3 gün sonra açıqlanacaq",
    date: new Date("February 11, 2024 11:00:00")
  },
  {
    title: "Əsgərlik ?",
    endTitle: "Cavablar açıqlandı",
    date: new Date("February 14, 2024 00:00:00")
  }
]
specialEvents.sort(function compareByDate(a, b) { return a.date - b.date; })

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  month = day * 30;

function pad(num) {
  return num < 10 ? '0' + num : num
}

var i = 0,
  timerFunc = setInterval(timerFuncBase, 1000)
  title.innerHTML = specialEvents[i].title;
function timerFuncBase() {
  var now = new Date().getTime(),
    date = new Date(specialEvents[i].date),
    distance = date - now
  var months = Math.floor(distance / month),
    days = Math.floor((distance % month) / day),
    hours = Math.floor((distance % day) / hour),
    minutes = Math.floor((distance % hour) / minute),
    seconds = Math.floor((distance % minute) / second);

  if (countDownElements.length !== 0) {
    countDownElements[0].innerHTML = pad(months)
    countDownElements[2].innerHTML = pad(days)
    countDownElements[4].innerHTML = pad(hours)
    countDownElements[6].innerHTML = pad(minutes)
    countDownElements[8].innerHTML = pad(seconds)
  }

  if (distance < 0) {
    countDownSelf.innerHTML = specialEvents[i].endTitle;
    countDownSelf.classList.remove("fade-in")
  }
  if (distance < 0 && distance > -6000) {
    var end = Date.now() + 300;
    (function frame() {
      confetti({
        resize: true,
        particleCount: 3,
        colors: ['#0092bc', '#e4002b', '#00af66'],
        zIndex: 999,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        resize: true,
        particleCount: 3,
        colors: ['#0092bc', '#e4002b', '#00af66'],
        zIndex: 999,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }())
  }
  countDownSelf.classList.toggle("fade-out", distance < -9000)
  if (distance < -10000) {
    countDownSelf.classList.remove("fade-out")
    confetti.reset()
    clearInterval(timerFunc)
    countDownSelf.innerHTML = `<span class="months"></span>
        <span class="blink">:</span>
        <span class="days"></span>
        <span class="blink">:</span>
        <span class="hours"></span>
        <span class="blink">:</span>
        <span class="minutes"></span>
        <span class="blink">:</span>
        <span class="seconds"></span>`;
    i++
    if (i >= specialEvents.length) {
      countDownSelf.innerHTML = specialEvents[i - 1].endTitle;
      clearInterval(timerFunc)
    } else {
      title.innerHTML = specialEvents[i].title;
      countDownSelf.classList.add("fade-in")
      timerFunc = setInterval(timerFuncBase, 1000)
    }
  }
}