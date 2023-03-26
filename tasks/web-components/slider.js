// Slider
import Glide from "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.6.0/glide.esm.min.js";

var glide = new Glide(".cards", {
	perView: 1,
	swipeThreshold: false,
	dragThreshold: false,
	gap: 5,
	focusAt: "center",
});

glide.mount();

document.getElementById("submitBtn").addEventListener("click", () => {
	glide.update()
});