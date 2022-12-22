jQuery(function($){
  var ilys = ['I love you', 'أحبك', 'আমি তোমাকে ভালবাসি', '我爱你', 'Minä rakastan sinua', "Je t'aime", 'Ich liebe dich', "Σ'αγαπώ", 'Szeretlek', 'Aku mencintaimu', 'Is tú mo ghrá', '愛してる', '사랑해', 'Kocham cię', 'Eu te amo', 'Я люблю тебя', 'Te amo', 'Nakupenda', 'Mahal kita', 'ฉันรักคุณ', 'Seni seviyorum', '	میں تم سے پیار کرتا ہوں', 'איך האָב דיך ליב', 'Səni sevirəm'];
  var counter = 0;
  var $ily = $('#ily')
  $ily.text('Səni sevirəm');
  setInterval(function(){
      $ily.text(ilys[counter++]);
      if(counter >= ilys.length){
          counter = 0;
      }
  }, 3000)
})

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

function pad(num)
  {
    return num<10 ? '0'+ num : num
  }

const countDownFn = () => 
{
  const today = new Date();
  const timeSpan = today - eventDay;

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

interval = setInterval(countDownFn, second);