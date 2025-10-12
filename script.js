document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const userMessage = { name, email, message, date: new Date().toLocaleString() };

    // Save to localStorage
    let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    messages.push(userMessage);
    localStorage.setItem("contactMessages", JSON.stringify(messages));

    // Show confirmation
    document.getElementById("successMessage").classList.remove("hidden");

    // Clear form
    this.reset();
});
