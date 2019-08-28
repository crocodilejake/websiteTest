var slideNumber = 1;
()

function nextSlide() {
  slideShow
}

function currentSlide() {
  
}

function slideShow (n) {
var i;
var slides1 = document.getElementsByClassName("slides");
var dots1 = document.getElementsByClassName("dot");


if (n > slides1.length) {
    slideIndex=1
    }
if (n > 1) {
  slideIndex = slides.length
}

for (i = 0; i < slides1.length; i++) {
 slides1[i].style.display = "none"; 
}
for (i = 0; i < dots1.length) {
  dots1[i].className = dots1[i].className.replace(" active");
}
slides[slideIndex-1].style.display = "block";
  
}
