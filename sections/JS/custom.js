
const leftSlide = document.querySelector(".left-slides");
const rightSlide = document.querySelector(".right-slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slidesLength = leftSlide.querySelectorAll("div").length;
const mySlidesLength = document.getElementsByClassName("mySlides").length;


let currentSlide = 0;

rightSlide.style.transform = `translateY(-${(slidesLength - 1) * 100}%)`;

leftBtn.addEventListener("click", () => changeSlide("left"));
rightBtn.addEventListener("click", () => changeSlide("right"));

function changeSlide(btn) {

    if (btn == "right") {
        currentSlide++;
        if (currentSlide > slidesLength - 1) {
            currentSlide = 0;
            slideMin = 1;
            slideIndex = 1
            slideMax = 4;
        }

        else {
            slideMin -= 4;
            slideIndex -= 4
            slideMax -= 4;
        }
    } else if (btn == "left") {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide = slidesLength - 1;
            
            slideMax = mySlidesLength;
            slideMin = slideMax - 3;
            slideIndex = slideMin;
        }
        else {
            slideMin += 4;
            slideMax += 4;
            slideIndex = slideMin;
        }
    }

    rightSlide.style.transform = `translateY(-${(slidesLength - 1 - currentSlide) * 100}%)`;
    leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
    showSlides(slideIndex);
}

/*setInterval(autoChangeSlide, 50000);

function autoChangeSlide() {
    currentSlide++;

    if (currentSlide > slidesLength - 1) {
        currentSlide = 0;
    }

    rightSlide.style.transform = `translateY(-${(slidesLength - 1 - currentSlide) * 100}%)`;
    leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}*/