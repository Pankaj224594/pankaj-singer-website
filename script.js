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
