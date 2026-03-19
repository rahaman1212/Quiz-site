// ===== DIAGNOSTIC: Check if script is running =====
console.log('scroll.js loaded');

// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Scroll to Top & Bottom Buttons =====
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

// ===== DIAGNOSTIC: Check if buttons exist =====
console.log('scrollTopBtn element:', scrollTopBtn);
console.log('scrollBottomBtn element:', scrollBottomBtn);

if (!scrollTopBtn || !scrollBottomBtn) {
  console.error('ERROR: Scroll buttons not found! Make sure scroll.js is included in your HTML.');
}

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

scrollBottomBtn.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// ===== Active Link Highlight on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== Scroll Reveal Animations =====
ScrollReveal().reveal('section h2', {
  delay: 200,
  duration: 800,
  origin: 'top',
  distance: '50px',
  easing: 'ease-in-out',
});

ScrollReveal().reveal('#about img, #projects img', {
  delay: 300,
  duration: 800,
  origin: 'bottom',
  distance: '40px',
  interval: 150,
});

ScrollReveal().reveal('p, table, ol, form', {
  delay: 200,
  duration: 700,
  origin: 'bottom',
  distance: '20px',
});