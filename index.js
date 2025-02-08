document.getElementById("searchbutton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default action

    const searchInput = document.getElementById("searchbox").value.toLowerCase();
    const contentBlocks = document.querySelectorAll(".content, .gallery, .display-section, .photo-gallery, .media-showcase");
    const carouselItems = document.querySelectorAll(".carousel__item, .image-carousel__item, .slider__item, .image-slider__item, .media-slider__item");

    if (searchInput.trim() === "") {
        carouselItems.forEach((item) => {
            item.style.display = "block";
            item.classList.remove("highlight");
        });
        contentBlocks.forEach((block) => {
            block.style.display = "block";
        });
        return;
    }

    let foundMatch = false;

    carouselItems.forEach((item) => {
        item.classList.remove("highlight");
        const text = item.textContent.toLowerCase();
        if (text.includes(searchInput)) {
            item.style.display = "block";
            item.classList.add("highlight");
            foundMatch = true;
        } else {
            item.style.display = "none";
        }
    });

    contentBlocks.forEach((block) => {
        if (!foundMatch || block.querySelector(".highlight")) {
            block.style.display = "block";
        } else {
            block.style.display = "none";
        }
    });
});

// Real-time search updates
document.getElementById("searchbox").addEventListener("input", function () {
    const searchInput = this.value.toLowerCase();
    const contentBlocks = document.querySelectorAll(".content, .gallery, .display-section, .photo-gallery, .media-showcase");
    const carouselItems = document.querySelectorAll(".carousel__item, .image-carousel__item, .slider__item, .image-slider__item, .media-slider__item");

    if (searchInput.trim() === "") {
        carouselItems.forEach((item) => {
            item.style.display = "block";
            item.classList.remove("highlight");
        });
        contentBlocks.forEach((block) => {
            block.style.display = "block";
        });
        return;
    }

    let foundMatch = false;

    carouselItems.forEach((item) => {
        item.classList.remove("highlight");
        const text = item.textContent.toLowerCase();
        if (text.includes(searchInput)) {
            item.style.display = "block";
            item.classList.add("highlight");
            foundMatch = true;
        } else {
            item.style.display = "none";
        }
    });

    contentBlocks.forEach((block) => {
        if (!foundMatch || block.querySelector(".highlight")) {
            block.style.display = "block";
        } else {
            block.style.display = "none";
        }
    });
});










    
    // Select the button and dropdown
    const button = document.getElementById('tableofcontentbutton');
    const dropdown = document.getElementById('dropdown');

    // Toggle the dropdown visibility when the button is clicked
    button.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    // Hide the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#tableofcontentbutton')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });

    // Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }















// Section 1 JavaScript
let slidePosition1 = 0;
const slides1 = document.getElementsByClassName('carousel__item');
const totalSlides1 = slides1.length;

document.getElementById('carousel__button--next1')
    .addEventListener('click', function () {
        moveToNextSlide1();
    });

document.getElementById('carousel__button--prev1')
    .addEventListener('click', function () {
        moveToPrevSlide1();
    });

function updateSlidePosition1() {
    for (let slide of slides1) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }
    slides1[slidePosition1].classList.add('carousel__item--visible');
}

function moveToNextSlide1() {
    if (slidePosition1 === totalSlides1 - 1) {
        slidePosition1 = 0;
    } else {
        slidePosition1++;
    }
    updateSlidePosition1();
}

function moveToPrevSlide1() {
    if (slidePosition1 === 0) {
        slidePosition1 = totalSlides1 - 1;
    } else {
        slidePosition1--;
    }
    updateSlidePosition1();
}











// Gallery 2 JavaScript
let currentSlide = 0;
const imageSlides = document.getElementsByClassName('image-carousel__item');
const totalImages = imageSlides.length;

document.getElementById('carousel-next')
    .addEventListener('click', function () {
        moveToNextImage();
    });

document.getElementById('carousel-prev')
    .addEventListener('click', function () {
        moveToPrevImage();
    });

function updateSlidePosition() {
    for (let slide of imageSlides) {
        slide.classList.remove('image-carousel__item--visible');
        slide.classList.add('image-carousel__item--hidden');
    }
    imageSlides[currentSlide].classList.add('image-carousel__item--visible');
}

function moveToNextImage() {
    if (currentSlide === totalImages - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlidePosition();
}

function moveToPrevImage() {
    if (currentSlide === 0) {
        currentSlide = totalImages - 1;
    } else {
        currentSlide--;
    }
    updateSlidePosition();
}













let currentSlide3 = 0;
const slides3 = document.getElementsByClassName('slider__item');
const totalSlides3 = slides3.length;

document.getElementById('slider-next')
    .addEventListener('click', function () {
        moveToNextSlide3();
    });

document.getElementById('slider-prev')
    .addEventListener('click', function () {
        moveToPrevSlide3();
    });

function updateSlidePosition3() {
    for (let slide of slides3) {
        slide.classList.remove('slider__item--visible');
        slide.classList.add('slider__item--hidden');
    }
    slides3[currentSlide3].classList.add('slider__item--visible');
}

function moveToNextSlide3() {
    if (currentSlide3 === totalSlides3 - 1) {
        currentSlide3 = 0;
    } else {
        currentSlide3++;
    }
    updateSlidePosition3();
}

function moveToPrevSlide3() {
    if (currentSlide3 === 0) {
        currentSlide3 = totalSlides3 - 1;
    } else {
        currentSlide3--;
    }
    updateSlidePosition3();
}

















let currentArtSlide = 0;
const artSlides = document.getElementsByClassName('image-slider__item');
const totalArtSlides = artSlides.length;

document.getElementById('image-slider-next')
    .addEventListener('click', function () {
        moveToNextArtSlide();
    });

document.getElementById('image-slider-prev')
    .addEventListener('click', function () {
        moveToPrevArtSlide();
    });

function updateArtSlidePosition() {
    for (let slide of artSlides) {
        slide.classList.remove('image-slider__item--visible');
        slide.classList.add('image-slider__item--hidden');
    }
    artSlides[currentArtSlide].classList.add('image-slider__item--visible');
}

function moveToNextArtSlide() {
    if (currentArtSlide === totalArtSlides - 1) {
        currentArtSlide = 0;
    } else {
        currentArtSlide++;
    }
    updateArtSlidePosition();
}

function moveToPrevArtSlide() {
    if (currentArtSlide === 0) {
        currentArtSlide = totalArtSlides - 1;
    } else {
        currentArtSlide--;
    }
    updateArtSlidePosition();
}

let mediaSlidePosition = 0;
const mediaSlides = document.getElementsByClassName('media-slider__item');
const totalMediaSlides = mediaSlides.length;

document.getElementById('media-slider-next')
    .addEventListener('click', function () {
        moveToNextMediaSlide();
    });

document.getElementById('media-slider-prev')
    .addEventListener('click', function () {
        moveToPrevMediaSlide();
    });

function updateMediaSlidePosition() {
    for (let slide of mediaSlides) {
        slide.classList.remove('media-slider__item--visible');
        slide.classList.add('media-slider__item--hidden');
    }
    mediaSlides[mediaSlidePosition].classList.add('media-slider__item--visible');
}

function moveToNextMediaSlide() {
    if (mediaSlidePosition === totalMediaSlides - 1) {
        mediaSlidePosition = 0;
    } else {
        mediaSlidePosition++;
    }
    updateMediaSlidePosition();
}

function moveToPrevMediaSlide() {
    if (mediaSlidePosition === 0) {
        mediaSlidePosition = totalMediaSlides - 1;
    } else {
        mediaSlidePosition--;
    }
    updateMediaSlidePosition();
}






