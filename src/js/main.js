// Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
});

// Rice Bowl Data
const riceBowls = [
  {
    name: "Chicken Katsu Teriyaki",
    description: "Crispy chicken, sweet teriyaki glaze, satisfying bite.",
    image: "./src/assets/images/rice-bowl-2.webp",
    price: "20K",
    rating: 4.8,
  },
  {
    name: "Pepper Squid Rice Bowl",
    description: "Flavorful squid paired with fragrant rice, perfection.",
    image: "./src/assets/images/rice-bowl-3.webp",
    price: "20K",
    rating: 4.7,
  },
  {
    name: "Original Shrip Rice Bowl",
    description: "Fresh shrimp, vegetables, and tofu for healthy goodness.",
    image: "./src/assets/images/rice-bowl-4.webp",
    price: "20K",
    rating: 4.6,
  },
];

// Drinks Data
const drinks = [
  {
    name: "Blue Ocean",
    description: "Refreshing citrus mocktail with hints of blue curaçao.",
    image: "./src/assets/images/drink-1.webp",
    price: "10K",
  },
  {
    name: "Virgin Mojito",
    description: "Classic mint and lime mocktail for ultimate refreshment.",
    image: "./src/assets/images/drink-2.webp",
    price: "10K",
  },
  {
    name: "Strawberry Spark Tea",
    description: "Sweet strawberry-infused iced tea, perfectly refreshing.",
    image: "./src/assets/images/drink-3.webp",
    price: "10K",
  },
];

// Populate Rice Bowls
const riceBowlsContainer = document.querySelector("#rice-bowl .grid");
riceBowls.forEach((bowl) => {
  const card = document.createElement("div");
  card.className = "card bg-white rounded-xl shadow-lg overflow-hidden reveal";
  card.innerHTML = `
        <img src="${bowl.image}" alt="${bowl.name}" class="w-full h-64 object-cover">
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${bowl.name}</h3>
            <p class="text-gray-600 mb-4">${bowl.description}</p>
            <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-orange-500">${bowl.price}</span>
                <div class="flex items-center">
                    <span class="text-yellow-400">★</span>
                    <span class="ml-1">${bowl.rating}</span>
                </div>
            </div>
            <button class="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
                Order Now
            </button>
        </div>
    `;
  riceBowlsContainer.appendChild(card);
});

// Populate Drinks
const drinksContainer = document.querySelector("#drinks .grid");
drinks.forEach((drink) => {
  const card = document.createElement("div");
  card.className = "card bg-white rounded-xl shadow-lg overflow-hidden reveal";
  card.innerHTML = `
        <img src="${drink.image}" alt="${drink.name}" class="w-full h-64 object-cover">
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${drink.name}</h3>
            <p class="text-gray-600 mb-4">${drink.description}</p>
            <div class="flex items-center justify-between">
                <span class="text-lg font-bold text-orange-500">${drink.price}</span>
                <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
                    Add to Order
                </button>
            </div>
        </div>
    `;
  drinksContainer.appendChild(card);
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Initial check

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.opacity = "0";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Newsletter Form
const newsletterForm = document.getElementById("newsletter-form");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  // Here you would typically send this to your backend
  alert("Thanks for subscribing! We'll keep you updated.");
  e.target.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
      // Close mobile menu if open
      mobileMenu.classList.add("hidden");
      hamburger.classList.remove("hidden");
      close.classList.add("hidden");
    }
  });
});
