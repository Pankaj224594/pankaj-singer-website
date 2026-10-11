// Pankaj Kumar Rajpoot Website

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const form = document.getElementById("booking-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const programme = data.get("event") || "";
    const date = data.get("date") || "Not specified";
    const venue = data.get("venue") || "Not specified";
    const details = data.get("message") || "No additional details";

    const message =
      "Hello Pankaj ji, I want to book a programme.\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Programme: " + programme + "\n" +
      "Date: " + date + "\n" +
      "Venue: " + venue + "\n" +
      "Details: " + details;

    const url =
      "https://wa.me/917007418571?text=" +
      encodeURIComponent(message);

    window.location.href = url;
  });
}
// Pankaj Kumar Rajpoot - Gallery Lightbox

(function () {
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImage = document.getElementById(
    "gallery-lightbox-image"
  );

  if (!lightbox || !lightboxImage) return;

  document.querySelectorAll(".gallery-item").forEach(function (button) {
    button.addEventListener("click", function () {
      lightboxImage.src = button.dataset.full;

      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");

      document.body.style.overflow = "hidden";
    });
  });

  function closeGallery() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    lightboxImage.removeAttribute("src");
    document.body.style.overflow = "";
  }

  const closeButton = lightbox.querySelector(".gallery-close");

  if (closeButton) {
    closeButton.addEventListener("click", closeGallery);
  }

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeGallery();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeGallery();
    }
  });
})();
