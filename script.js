// =========================================================
// Sana Sabih — Portfolio JavaScript
// 1. Dark / Light mode toggle
// 2. Mobile menu
// 3. Animated skill bars
// 4. Active nav link on scroll
// 5. Back to top button
// 6. Footer year
// =========================================================


// ---------- 1. Dark / Light Mode ----------
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    themeIcon.textContent = "☀️";
    themeLabel.textContent = "Light Mode";
  } else {
    document.body.classList.remove("dark");
    themeIcon.textContent = "🌙";
    themeLabel.textContent = "Dark Mode";
  }
}

// Remember user's choice
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", function () {
  const isDark = document.body.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});


// ---------- 2. Mobile Menu ----------
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.classList.toggle("open", isOpen);
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});


// ---------- 3. Animated Skill Bars ----------
const skillBars = document.querySelectorAll(".bar-fill");

const skillObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(function (bar) {
  skillObserver.observe(bar);
});


// ---------- 4. Active Nav Link on Scroll ----------
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  let current = "";
  sections.forEach(function (section) {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navAnchors.forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();


// ---------- 5. Back to Top Button ----------
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  backToTop.classList.toggle("show", window.scrollY > 400);
});


// ---------- 6. Footer Year ----------
document.getElementById("year").textContent = new Date().getFullYear();
