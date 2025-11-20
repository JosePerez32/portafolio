document.addEventListener('DOMContentLoaded', function() {
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTopBtn');
  const sections = document.querySelectorAll('section'); // Cambiar el color del scroll button según la sección

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.add('show');
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.classList.remove('show');
      }
    });
    
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  // Observador de intersección para cambiar el color del botón según la sección
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cambiar color basado en la sección
        if (entry.target.id === 'portfolio') {
          scrollBtn.style.backgroundColor = '#65b8e8'; // Azul para portfolio
        } else if (entry.target.id === 'experience') {
          scrollBtn.style.backgroundColor = '#f5c242'; // Dorado para experience
        } else {
          scrollBtn.style.backgroundColor = '#defaultColor'; // Color por defecto
        }
      }
    });
  }, { threshold: 0.5 });
  // Fin de observador de intersección
  // Observar todas las secciones
sections.forEach(section => observer.observe(section));
  // CV Dropdown functionality
  const cvDropdown = document.querySelector('.download-cv-dropdown');
  const cvButton = document.querySelector('.download-cv-button');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (cvButton && dropdownContent) {
    let isDropdownOpen = false;

    // Toggle dropdown
    cvButton.addEventListener('click', function(e) {
      e.stopPropagation();
      isDropdownOpen = !isDropdownOpen;
      dropdownContent.style.display = isDropdownOpen ? 'block' : 'none';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!cvDropdown.contains(e.target)) {
        dropdownContent.style.display = 'none';
        isDropdownOpen = false;
      }
    });

    // Close dropdown after selecting an option
    dropdownContent.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        dropdownContent.style.display = 'none';
        isDropdownOpen = false;
        // El download funciona naturalmente, no necesitas forzarlo
      }
    });
  }
});