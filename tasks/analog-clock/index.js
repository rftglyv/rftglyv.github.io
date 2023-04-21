const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setHandsAndTime() {
  const now = new Date();

  const secs = now.getSeconds();
  const secsDegrees = secs * 6;
  secondHand.style.transform = `rotate(${secsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((secs/60)*6);
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  fH = padding(hour);
  fM = padding(mins);
  fS = padding(secs);
  document.title =  fH + ":" + fM + ":" + fS;

  function padding(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
}

setInterval(setHandsAndTime, 1000);

setHandsAndTime();