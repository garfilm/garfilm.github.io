document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const newEntry = { name, email, message, date: new Date().toLocaleString() };

  // Store in localStorage
  let storedMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
  storedMessages.push(newEntry);
  localStorage.setItem("contactMessages", JSON.stringify(storedMessages));

  document.getElementById("successMessage").classList.remove("hidden");
  this.reset();
});