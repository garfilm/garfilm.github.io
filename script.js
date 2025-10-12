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

<script>
  const sections = document.querySelectorAll('section');

  const revealOnScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.85;
      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
</script>