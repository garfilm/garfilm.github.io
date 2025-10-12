// Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const newMessage = { name, email, message, date: new Date().toLocaleString() };

  // Store in localStorage
  let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
  messages.push(newMessage);
  localStorage.setItem("contactMessages", JSON.stringify(messages));

  // Feedback to user
  document.getElementById("successMessage").classList.remove("hidden");

  // Reset form
  this.reset();
});