const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
let currentSlideIndex = 0;
// Function to show the previous slide
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide();
}

// Function to show the next slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide();
}
function updateSlide() {
    const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');

  // Update image source and tagline
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
  bannerText.innerHTML = slides[currentSlideIndex].tagLine;

  updateActiveDot();
}
function updateActiveDot(){
const dots=document.querySelector(".dots");
dots.innerHTML="";
for (let i=0; i<slides.length; i++){
	let dot=document.createElement("div");
	if (i==currentSlideIndex) {
		dot.className="dot dot_selected"; 
	} else {
		dot.className="dot";
	}
	
	dots.appendChild(dot);
	
}



}
updateActiveDot();
document.querySelector('.arrow_left').addEventListener('click', prevSlide);
document.querySelector('.arrow_right').addEventListener('click', nextSlide);

