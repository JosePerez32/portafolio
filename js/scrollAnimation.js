  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // solo animar una vez
        }
      });
    }, {
      threshold: 0.2 // cuando 20% del elemento es visible
    });

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  });