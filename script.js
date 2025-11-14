
  
    // Accordion Functionality
    const acc = document.getElementsByClassName("accordion-btn");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

    // Lightbox Gallery
    function openLightbox(src) {
      document.getElementById("lightboxModal").style.display = "block";
      document.getElementById("lightboxImage").src = src;
    }

    function closeLightbox() {
      document.getElementById("lightboxModal").style.display = "none";
    }
  // LIGHTBOX FUNCTIONALITY
function openLightbox(src) {
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImage = document.getElementById("lightboxImage");
  
  lightbox.style.display = "flex";
  lightboxImage.src = src;
}

// Close the lightbox when the background is clicked
function closeLightbox() {
  const lightbox = document.getElementById("lightboxModal");
  lightbox.style.display = "none";
}

// ACCORDION FUNCTIONALITY
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});


<script>
  // -------------------------------
  // Accordion Functionality
  // -------------------------------
  const acc = document.getElementsByClassName("accordion-btn");
  for (let i = 0; i < acc.length  i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  // -------------------------------
  // Lightbox Gallery
  // -------------------------------
  function openLightbox(src) {
    document.getElementById("lightboxModal").style.display = "flex"; // changed to flex for centering
    document.getElementById("lightboxImage").src = src;
  }

  function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
  }

  // -------------------------------
  // Hamburger Menu Toggle
  // -------------------------------
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  // Check elements exist before adding listeners
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');  // animate hamburger (turns into “X”)
      navMenu.classList.toggle('active');     // show/hide the nav menu
    });

    // Optional: close menu when a link is clicked (for mobile)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
</script>
// LIGHTBOX FUNCTIONALITY
function openLightbox(src) {
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImage = document.getElementById("lightboxImage");

  lightbox.style.display = "flex";
  lightboxImage.src = src;
}

// Close the lightbox when the background is clicked
function closeLightbox() {
  const lightbox = document.getElementById("lightboxModal");
  lightbox.style.display = "none";
}

// ACCORDION FUNCTIONALITY
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block

