document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const contactPanel = document.getElementById("contactPanel");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");

  if (contactBtn && contactPanel && closeBtn && overlay) {
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
  }

  const galleryImages = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentImageIndex = 0;

  if (galleryImages.length > 0 && lightbox && lightboxImage && lightboxClose && prevBtn && nextBtn) {
    galleryImages.forEach((image, index) => {
      image.addEventListener("click", () => {
        currentImageIndex = index;
        lightboxImage.src = image.src;
        lightbox.classList.add("active");
      });
    });

    nextBtn.addEventListener("click", () => {
      currentImageIndex++;

      if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
      }

      lightboxImage.src = galleryImages[currentImageIndex].src;
    });

    prevBtn.addEventListener("click", () => {
      currentImageIndex--;

      if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
      }

      lightboxImage.src = galleryImages[currentImageIndex].src;
    });

    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }
});