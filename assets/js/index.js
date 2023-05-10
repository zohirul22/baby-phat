

// slider js 
document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    const slideWidth = sliderContainer.clientWidth;
    let currentPosition = 0;
  
    prevBtn.addEventListener("click", function() {
      currentPosition += slideWidth;
      if (currentPosition > 0) {
        currentPosition = -(sliderContainer.clientWidth - slideWidth);
      }
      sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    });
  
    nextBtn.addEventListener("click", function() {
      currentPosition -= slideWidth;
      if (currentPosition < -(sliderContainer.clientWidth - slideWidth)) {
        currentPosition = 0;
      }
      sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    });
  
    window.addEventListener("resize", function() {
      slideWidth = sliderContainer.clientWidth;
      sliderContainer.style.transform = `translateX(0px)`;
    });
  });
  
  // slider js

  // haader js