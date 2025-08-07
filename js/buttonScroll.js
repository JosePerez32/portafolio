const scrollBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


// En tu scrollAnimation.js o similar
document.addEventListener('DOMContentLoaded', function() {
  const verticalLines = document.querySelectorAll('.vertical-line');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {threshold: 0.1});

  verticalLines.forEach(line => {
    observer.observe(line);
  });
});