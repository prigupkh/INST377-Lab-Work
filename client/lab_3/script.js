/*
  Welcome to Javascript!

  This file is a simple script to make your carousel work

*/

// set our first slide's position to "0", the opening position in an array
// Note that it's a 'let' - this is because it will change as we use it
let slidePosition = 0;

// gather a reference to every slide we're using via the class name and querySelectorAll
const slides = document.querySelectorAll('.carousel_item');

// change that "NodeList" into a Javascript "array", to get access to "array methods"
const slidesArray = Array.from(slides);

// Figure out how many slides we have available
const totalSlides = slidesArray.length;

function updateSlidePosition() {
  /*
    Here, rather than using a for loop, we use an "array method"
    It does the same thing - loops through every element in the array and does something with it
    But is way less likely to contain an off-by-one error
  */

  slidesArray.forEach((slide) => {
    slide.classList.remove('visible'); // Let's remove any visibility
    slide.classList.add('hidden'); // and "add" the 'hidden' class, which sets display="none" for us in the css
  });

  slides[slidePosition].classList.add('visible'); // last step: re-add visibility to the new slide
}

function moveToNextSlide() {
  // if our current position is the most slides we have,
  // go to the first slide
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    // otherwise, go to the next one
    slidePosition += 1;
  }
  updateSlidePosition();
}
function moveToPrevSlide() {
  // If removing 1 from our slide's position sets it to less than the first possible position
  if (slidePosition - 1 < 0) {
    // set it to the last slide in totalSlides
    slidePosition = totalSlides - 1;
  } else {
    // otherwise move back a step
    slidePosition -= 1;
  }
  console.log(slidePosition);
  updateSlidePosition();
}

document.querySelector('.next')
  .addEventListener('click', () => {
    console.log('clicked next');
    moveToNextSlide();
  });

document.querySelector('.prev')
  .addEventListener('click', () => {
    console.log('clicked prev');
    moveToPrevSlide();
  });