document.addEventListener('DOMContentLoaded', function () {
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function () {
      alert('Selamat! Anda telah berkomitmen untuk hidup sehat tanpa rokok.');
    });
  }

  // Scroll-Spy untuk Navigasi
  const navLinks = document.querySelectorAll('header nav ul li a');
  const sections = document.querySelectorAll('main section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Smooth Scroll saat klik navigasi
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // Event untuk tombol pada fakta rokok
  const pricingButtons = document.querySelectorAll('.pricing-card button');
  pricingButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert(`Ayo mulai hidup sehat: ${button.parentElement.querySelector('h4').textContent}`);
    });
  });

  // Slider Testimoni
  const slides = document.querySelectorAll('.game-slide');
  let currentSlide = 0;
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
  }
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  }
});