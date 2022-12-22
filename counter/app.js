jQuery(function($){
  var strings = ['Nigar', 'dərs', 'oxu', '!'];
  var counter = 0;
  var $str = $('#study')
  setInterval(function(){
    $str.text(strings[counter++]);
    if(counter >= strings.length){
      counter = 0;
    }
  }, 1000)
})

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;

let exams = [
  {
    name: "Morpholgy",
    examDate: "November 17, 2022 00:00:00"
  },
  {
    name: "CODH",
    examDate: "November 18, 2022 00:00:00"
  },
  {
    name: "English",
    examDate: "November 19, 2022 00:00:00"
  },
  {
    name: "Turkish",
    examDate: "November 20, 2022 00:00:00"
  }
]

const listGroup = document.querySelector(".list-group");

for (i in exams){
  let examTemplate = `<li class="container-fluid list-group-item d-flex justify-content-center">
  <div class="container-fluid d-flex flex-column align-items-center">
    <p class="h3">${exams[i].name}</p>
    <div class="date-container container-fluid  justify-content-around">
      <h2 id="month-${i}">00</h2>
      <p>:</p>
      <h2 id="day-${i}">00</h2>
      <p>:</p>
      <h2 id="hour-${i}">00</h2>
      <p>:</p>
      <h2 id="minute-${i}">00</h2>
      <p>:</p>
      <h2 id="second-${i}">00</h2>
    </div>
  </div>
</li>`;
	listGroup.innerHTML += examTemplate;
}

function main(){
  for (i in exams){
    if (isFinished(i)){
      const container = document.querySelectorAll(".date-container");
      for (j in container) {
        container[i].innerHTML = `<h2>Exam Over</h2>`
      }
    }else{
      monthField = document.getElementById(`month-${i}`);
      dayField = document.getElementById(`day-${i}`);
      hourField = document.getElementById(`hour-${i}`);
      minuteField = document.getElementById(`minute-${i}`);
      secondField = document.getElementById(`second-${i}`);
      counter(i)
    }
  }
}

function pad(num)
{
  return num<10 ? '0'+ num : num
}

function isFinished(exam)
{
  eventDay = new Date(exams[exam].examDate);
  const today = new Date();
  const timeSpan = eventDay - today;
  return timeSpan<0 ? true : false;
}

function counter(exam){
  eventDay = new Date(exams[exam].examDate);
  const today = new Date();
  const timeSpan = eventDay - today;

  const months = Math.floor(timeSpan / month);
  const days = Math.floor((timeSpan % month) / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  monthField.innerHTML = pad(months);
  dayField.innerHTML = pad(days);;
  hourField.innerHTML = pad(hours);
  minuteField.innerHTML = pad(minutes);
  secondField.innerHTML = pad(seconds);
}

setInterval(function(){main()}, 1000);