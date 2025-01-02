document.querySelectorAll('.slider').forEach((slider) => {
  let currentIndex = 0;
  const slides = slider.querySelectorAll('.CCPics');
  const prevButton = slider.querySelector('.prev');
  const nextButton = slider.querySelector('.next');

  let autoSlide;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'previous');
      if (i === index) {
        slide.classList.add('active');
      } else if (i === (index - 1 + slides.length) % slides.length) {
        slide.classList.add('previous');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  autoSlide = setInterval(nextSlide, 5000);

  showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  const navHeight = nav.offsetHeight;

  window.addEventListener('scroll', () => {
      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (footerTop <= viewportHeight) {
          nav.classList.add('hidden');
      } else {
          nav.classList.remove('hidden');
      }
  });
});