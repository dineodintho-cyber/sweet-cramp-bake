// -------------------------------
// Accordion Functionality
// -------------------------------
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle("active");
    const panel = button.nextElementSibling;

    panel.style.display =
      panel.style.display === "block" ? "none" : "block";
  });
});


// -------------------------------
// Lightbox Functionality
// -------------------------------
function openLightbox(src) {
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImage = document.getElementById("lightboxImage");

  lightbox.style.display = "flex"; // better for centering
  lightboxImage.src = src;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightboxModal");
  lightbox.style.display = "none";
}


// -------------------------------
// Hamburger Menu Toggle
// -------------------------------
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close on click (mobile)
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}
<script>
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button =
 {
  button.addEventListener("click", () => {
    button.classList.toggle("active"); // highlight clicked question
    const panel = button.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // collapse answer
      panel.style.padding = "0 15px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // expand answer
      panel.style.padding = "15px";
    }
  })
});
</script>
