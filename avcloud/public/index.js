const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

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
    btnText.innerHTML = `Read less<i class="ml-1 fa-solid fa-angle-left"></i>`;
    moreText.style.display = "inline";
  }
}