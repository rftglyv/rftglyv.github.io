data = [
	{
		id: 1,
		img: "assets/1.png",
	},
	{
		id: 2,
		img: "assets/2.jpg",
	},
	{
		id: 3,
		img: "assets/3.png",
	},
    {
		id: 4,
		img: "assets/4.png",
	},
];

const slides = document.querySelector(".slides");
const dots = document.querySelector(".slider-dots");
const childNodesDots = document.querySelector(".slider-dots").childNodes
let slideAmount = 800;
let slidePosition = 0;

function generateSlides() {
	slides.innerHTML = "";
    dots.innerHTML = "";
	for (i in data) {
		let slidesTemplate = `
        <div class="slide">
            <img src="${data[i].img}" alt="">
        </div>
        `;
		slides.innerHTML += slidesTemplate;
        dotsTemplate =`
        <span onclick="setSlide(${slideAmount-slideAmount*(Number(i)+1)})"></span>
        `
        dots.innerHTML += dotsTemplate
	}
    slides.style.width = `${slideAmount*data.length}px`
    slides.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
}
generateSlides();

const setSlide = (value) => {
    value == "reset" ? slides.style.transform = `matrix(1, 0, 0, 1, 0, 0)` : slides.style.transform = `matrix(1, 0, 0, 1, ${value}, 0)`;
}

let matrixValueX = ()=> {
    let matrix = window.getComputedStyle(document.querySelector('.slides')).transform
    return Number(matrix.match(/matrix.*\((.+)\)/)[1].split(', ')[4])
}

function slideLeft(e) {
	e.preventDefault();
    if(!(matrixValueX()+slideAmount > 0)){
        setSlide(matrixValueX()+slideAmount)
    } else {
        setSlide("reset")
    }
}
function slideRight(e) {
	e.preventDefault();
    if(!(matrixValueX()-slideAmount==-Math.abs(slideAmount*data.length))){
        setSlide(matrixValueX()-slideAmount)
    } else {
        setSlide("reset")
    }
}

// Alternative

const altSlides = document.querySelector(".alt-slides-wrapper");
const altDots = document.querySelector(".alt-slider-dots");

function altGenerateSlides() {
	altSlides.innerHTML = "";
    altDots.innerHTML = "";
	for (i in data) {
		let slidesTemplate = `
        <div class="alt-slides fade">
                <img src="${data[i].img}">
            </div>
        `;
		altSlides.innerHTML += slidesTemplate;
        dotsTemplate =`
        <span onclick="currentSlide(${Number(i)+1})"></span>
        `
        altDots.innerHTML += dotsTemplate
	}
}
altGenerateSlides();

let slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("alt-slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}