document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const contactPanel = document.getElementById("contactPanel");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");

  contactBtn.addEventListener("click", function (event) {
    event.preventDefault();
    contactPanel.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    contactPanel.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    contactPanel.classList.remove("active");
    overlay.classList.remove("active");
  });
});