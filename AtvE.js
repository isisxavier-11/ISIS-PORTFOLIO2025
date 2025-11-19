document.querySelectorAll('.slider-container').forEach(container => {
  const slider = container.querySelector('.slider');
  const slides = container.querySelectorAll('.slide');
  const prevButton = container.querySelector('.prev');
  const nextButton = container.querySelector('.next');

  let currentIndex = 0;

  function updateSlide() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  });

  updateSlide();
});
