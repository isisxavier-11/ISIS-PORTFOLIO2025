document.querySelectorAll('.slider-container').forEach(container => {
  const slides = container.querySelectorAll('.slide');
  const prevButton = container.querySelector('.prev');
  const nextButton = container.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  showSlide(0); 
  });
