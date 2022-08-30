let slideIndex = 1;
let slideMin = 17;
let slideMax = 20;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
   // let dots = document.getElementsByClassName("dot");
    if (n > slideMax) { slideIndex = slideMin }
    if (n < slideMin) { slideIndex = slideMax }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
 //   for (i = 0; i < dots.length; i++) {
 //       dots[i].className = dots[i].className.replace(" active", "");
 //   }
 //   alert('Slide Index: ' + slideIndex + 'Slide min: ' + slideMin + 'Slide max: ' + slideMax + 'Slide length: ' + slides.length);
    slides[slideIndex - 1].style.display = "block";
  //  dots[slideIndex - 1].className += " active";
}