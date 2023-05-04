jQuery(function ($) {
  var hbds = ['Happy Birthday!','Wifey <3'];
  var counter = 0;
  var $hbd = $('#hbd')
  $hbd.text('Happy Birthday!');
  setInterval(function () {
    $hbd.text(hbds[counter++]);
    if (counter >= hbds.length) {
      counter = 0;
    }
  }, 1500)
})

import confetti from 'https://cdn.skypack.dev/canvas-confetti'

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
}, 2000);