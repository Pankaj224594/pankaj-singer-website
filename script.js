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
// Stop other YouTube videos when one starts playing
(function () {
  const players = [];
  let apiReady = false;

  function loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
      createPlayers();
      return;
    }

    if (document.getElementById("youtube-iframe-api")) return;

    const tag = document.createElement("script");
    tag.id = "youtube-iframe-api";
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  }

  window.onYouTubeIframeAPIReady = function () {
    apiReady = true;
    createPlayers();
  };

  function createPlayers() {
    if (!apiReady && !(window.YT && window.YT.Player)) return;

    document.querySelectorAll(".youtube-player").forEach(function (iframe) {
      if (iframe.dataset.playerReady) return;

      iframe.dataset.playerReady = "true";

      players.push(new YT.Player(iframe, {
        events: {
          onStateChange: function (event) {
            if (event.data === YT.PlayerState.PLAYING) {
              players.forEach(function (player) {
                if (player !== event.target) {
                  try {
                    player.pauseVideo();
                  } catch (e) {}
                }
              });
            }
          }
        }
      }));
    });
  }

  loadYouTubeAPI();
})();
