// Slider
import Glide from 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.6.0/glide.esm.min.js'

new Glide('.why_us',{
  type: 'slider',
  startAt: 0,
  perView: 1,
}).mount()

// Hamburger Menu
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Read More button
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `Read more<i class="ml-1 fa-solid fa-angle-right"></i>`;
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = `<i class="mr-1 fa-solid fa-angle-left"></i>Read less`;
    moreText.style.display = "inline";
  }
}
document.getElementById("readMoreBtn").addEventListener("click", readMore);