<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO Enhancements -->
  <title>SWEET CRUMPS BAKERY | Home</title>
  <meta name="description" content="Welcome to Sweet Crumps Bakery – Freshly baked bread, cakes, and pastries made with love and organic ingredients.">
  <meta name="keywords" content="bakery, sweet crumbs, cakes, pastries, bread, organic, fresh, wedding cakes, custom cakes">
  <meta name="author" content="Talakgale Dineo">
  <link rel="canonical" href="https://sweetcrumbsbakery.co.za/">
  <link rel="stylesheet" href="css/style.css">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="./ASSETS/favicon.png">

  <!-- Font Awesome for Icons -->
  <script src="https://kit.fontawesome.com/a2b1234567.js" crossorigin="anonymous"></script>

  <!-- Animation Library (Optional for CSS/JS transitions) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
</head>

<body style="
    background: linear-gradient(to bottom, white(194, 124, 40), rgb(233, 204, 178));
    color: black (102, 65, 50);
    padding: 100px 20px;
    text-align: center;
">

  <!-- Navigation Menu -->
  <header>
    <nav>
      <ul>
        <li><a href="../Index.html" class="active">Home</a></li>
        <li><a href="./PAGES/about.html">About</a></li>
        <li><a href="./PAGES/product.html">Product</a></li>
        <li><a href="./PAGES/enquiry.html">Enquiry</a></li>
        <li><a href="./PAGES/contact.html">Contact</a></li>
        <li><a href="/PAGES/order now .html">order now</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main Section -->
  <main>
    <h1 style="text-align: center" class="animate_animated animate_fadeInDown">WELCOME TO SWEET CRAMPS BAKERY</h1>
    <p style="font-size:large;" class="animate_animated animate_fadeInUp">
      "The Sweetest Welcome! Hi there!
      We're excited to share our baked creations with you.
      Take a look around and treat yourself to something delightful!"
    </p>
  </main>

  <!-- Image Gallery with Lightbox -->
  <section class="hero">
    <div class="gallery">
      <img src="./ASSETS/R.jfif" width="250" height="250" alt="SWEET CRUMPS BAKERY" onclick="openLightbox(this.src)">
      <img src="./ASSETS/HGHY.webp" width="250" height="250" alt="SWEET CRUMPS BAKERY" onclick="openLightbox(this.src)">
      <img src="./ASSETS/OIP (1).webp" width="250" height="250" alt="SWEET CRUMPS BAKERY" onclick="openLightbox(this.src)">
    </div>
    <h1>Sweet Crumbs Bakery</h1>
    <p>Baked with Love, Served with Joy</p>
    <a href="/PAGES/order now .html" class="btn">Order Now</a>
  </section>

  <!-- Highlights -->
  <section class="highlights">
    <div class="card">
      <h2>Freshly Baked</h2>
      <p>We bake daily to ensure freshness and quality.</p>
    </div>
    <div class="card">
      <h2>Organic Ingredients</h2>
      <p>Our goods are made with locally sourced organic produce.</p>
      <p>such as -whole wheat ,Quinoa and organic milk.</p>
    </div>
    <div class="card">
      <h2>Custom Orders</h2>
      <p>We make birthday, wedding, and event cakes tailored to your needs.</p>
    </div>
  </section>

  <!-- Interactive Accordion (JS Enhancement Example) -->
  <section class="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="accordion">
      <button class="accordion-btn">Do you deliver?</button>
      <div class="accordion-content">
        <p>Yes! We deliver within a 10km radius from our bakery.</p>
      </div>
      <button class="accordion-btn">Do you make gluten-free cakes?</button>
      <div class="accordion-content">
        <p>We offer gluten-free options on special request.</p>
      </div>
    </div>
  </section>

  <!-- Lightbox Modal -->
  <div id="lightboxModal" class="lightbox">
    <span class="close" onclick="closeLightbox()">&times;</span>
    <img class="lightbox-content" id="lightboxImage">
  </div>

  <!-- Footer -->
  <footer>
    <div class="social-icons">
      <a href="https://www.facebook.com/dineo tala" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
      <a href="https://wa.me/27682678076" target="_blank"><i class="fab fa-whatsapp fa-3x"></i></a>
    </div>
    <p>&copy; 2025 Sweet Crumbs Bakery | Designed by TALAKGALE DINEO</p>
  </footer>

  <!-- JavaScript Enhancements -->
  <script>
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
  </script>

</body>
</html>