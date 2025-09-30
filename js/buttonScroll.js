document.addEventListener('DOMContentLoaded', function() {
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (scrollBtn) {
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
  }

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