import progressBar from "./progresBar";
const slider = (slides, next) => {
  let slideIndex = 1;

  const items = document.querySelectorAll(slides),
    dots = document.querySelectorAll(".works__sliderDots-dot");

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    if (slideIndex == 3) {
      progressBar("#HTML5", 95);
      progressBar("#CSS3", 85);
      progressBar("#JavaScript", 80);
      progressBar("#ReactJS", 75);
      progressBar("#Redux", 70);
    }

    items.forEach((item) => {
      item.classList.add("animate__animated");
      item.style.display = "none";

      if (item.classList.contains("works__wrapper")) {
        item.addEventListener("touchstart", handleTouchStart);
        item.addEventListener("touchmove", handleTouchMove);
      }
    });

    items[slideIndex - 1].style.display = "flex";

    try {
      dots.forEach((dot) => {
        dot.classList.remove("dot-active");
        dot.classList.add("animate__animated");
      });
      dots[0].classList.add("dot-active");
    } catch (e) {}
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  let firstPos = null;

  function handleTouchStart(e) {
    e.preventDefault();

    const firstTouch = e.touches[0];
    firstPos = firstTouch.clientX;
  }

  function handleTouchMove(e) {
    e.preventDefault();

    if (!firstPos) {
      return false;
    }

    let lastPos = e.touches[0].clientX;
    let xDiff = lastPos - firstPos;

    if (xDiff < 0) {
      plusSlides(1);
      items[slideIndex - 1].classList.add("animate__fadeInRight");
      dots[0].classList.remove("dot-active");
      dots[slideIndex - 1].classList.add("dot-active");
    }

    firstPos = null;
  }

  try {
    const nextBtns = document.querySelectorAll(next);

    nextBtns.forEach((nextBtn) => {
      if (nextBtn.classList.contains("works__media-btn")) {
        nextBtn.addEventListener("click", () => {
          plusSlides(1);
          items[slideIndex - 1].classList.add("animate__fadeInRight");
          dots[0].classList.remove("dot-active");
          dots[slideIndex - 1].classList.add("dot-active");
        });
      } else {
        nextBtn.addEventListener("click", () => {
          plusSlides(1);
          items[slideIndex - 1].classList.add("animate__fadeIn");
        });
      }
    });
  } catch (e) {}
};

export default slider;
