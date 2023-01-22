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

let sliderSettings={
    slidePosition: 0,
    slideWidth: 400,
    sliderHeight: 800,
    slideAmount: 400,
    slideCount: 2,
    direction: 'vertical'
}

// Select elements
let customizationCard = document.querySelector('#customization-card');
let customizationInputs = document.querySelector('#customization-inputs');
let currentDims = document.querySelector('#current-dims');
let slides = document.querySelector('.slides');
let slider = document.querySelector('#slider');
let sliderDots = document.querySelector('.slider-dots');
let sliderControls = document.querySelector('.slider-controls');

// Set styles
function setStyles() {
    customizationCard.style.width=`${sliderSettings.slideWidth}px`;
    slides.style.width=`${data.length*sliderSettings.slideWidth}px`;
    slider.style.width=`${sliderSettings.slideWidth}px`;
    slider.style.height=`${sliderSettings.sliderHeight}px`;
    sliderControls.style.width=`calc(${sliderSettings.slideWidth}px - 1rem)`
}

// Generate slides
function generateSlides(data){
    slides.innerHTML = "";
    sliderDots.innerHTML = "";
	for (i in data) {
		let slidesTemplate = `
        <div class="slide">
            <img src="${data[i].img}" alt="">
        </div>
        `;
		slides.innerHTML += slidesTemplate;
        sliderDotsTemplate =`
        <span onclick="setSlide(${sliderSettings.slideAmount-sliderSettings.slideAmount*(Number(i)+1)})"></span>
        `
        sliderDots.innerHTML += sliderDotsTemplate
        sliderDots.children[0].classList.add('active')
	}
    writeDims()
}

// Set Dot
const setDot = () => {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
    }
    sliderDots.children[sliderSettings.slidePosition/sliderSettings.slideAmount].classList.add('active')
}

// Set Slide
const setSlide = (value) => {
    if (value == "reset"){
        sliderSettings.slidePosition = 0
        slides.style.transform = `translateX(0px)`
    }else{
        slides.style.transform = `translateX(${value}px)`;
        sliderSettings.slidePosition = Math.abs(value)
    }
    setDot()
}

// Slide Left
function slideLeft(e){
    e.preventDefault();
    if(sliderSettings.slidePosition<=0){
        sliderSettings.slidePosition=data.length*sliderSettings.slideAmount;
    }
    sliderSettings.slidePosition-=sliderSettings.slideAmount;
    setSlide(`-${sliderSettings.slidePosition}`)
    setDot()
}

// Slide Right
function slideRight(e){
    e.preventDefault();
    sliderSettings.slidePosition+=sliderSettings.slideAmount;
    if(sliderSettings.slidePosition>(data.length-1)*sliderSettings.slideAmount){
        setSlide("reset")
    }
    setSlide(`-${sliderSettings.slidePosition}`)
    setDot()
}

// Customize Slider
function customizeSlider(){
    if (!(customizationInputs.children[0].value == '' || customizationInputs.children[2].value == '')){
        sliderSettings.slideWidth = Number(customizationInputs.children[0].value)
        sliderSettings.slideAmount = Number(customizationInputs.children[0].value)
        sliderSettings.sliderHeight = Number(customizationInputs.children[2].value)
    }
    setSlide("reset")
    generateSlides(data)
    writeDims()
    setStyles()
}

const writeDims = () => {
    currentDims.innerHTML = `Current Dims <br> slideWidth : ${sliderSettings.slideWidth} | slideHeight : ${sliderSettings.sliderHeight}`
}

// Start app
generateSlides(data);
setStyles()