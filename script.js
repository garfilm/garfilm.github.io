<<<<<<< Updated upstream
// === Store contact form data in localStorage ===
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Create an object for the message
  const formData = { name, email, message, date: new Date().toISOString() };

  // Retrieve existing messages or initialize empty array
  const storedMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];

  // Add new message
  storedMessages.push(formData);

  // Save back to localStorage
  localStorage.setItem("contactMessages", JSON.stringify(storedMessages));

  // Show confirmation and reset form
  document.querySelector(".confirmation").classList.remove("hidden");
  this.reset();
=======
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
>>>>>>> Stashed changes
});
