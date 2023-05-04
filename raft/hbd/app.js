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