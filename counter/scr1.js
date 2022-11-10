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
  let examTemplate = `<li class="list-group-item d-flex justify-content-center">
  <div class="d-flex flex-column align-items-center">
    <p class="h3">${exams[i].name}</p>
    <div class="date-container justify-content-around">
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
    monthField = document.getElementById(`month-${i}`);
    dayField = document.getElementById(`day-${i}`);
    hourField = document.getElementById(`hour-${i}`);
    minuteField = document.getElementById(`minute-${i}`);
    secondField = document.getElementById(`second-${i}`);
    counter(i)
  }
}

function counter(i){
  eventDay = new Date();
  eventDay = new Date(exams[i].examDate);
  const today = new Date();
  const timeSpan = eventDay - today;

  const months = Math.floor(timeSpan / month);
  const days = Math.floor((timeSpan % month) / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  monthField.innerHTML = months;
  dayField.innerHTML = days;
  hourField.innerHTML = hours;
  minuteField.innerHTML = minutes;
  secondField.innerHTML = seconds;
}

setInterval(function(){main()}, 1000);