function showHide(x) {
  const elements = document.querySelectorAll("#" + x + " p");
  const title = document.querySelector("#" + x + " h3 span");
  for (element of elements) {
    let display = window.getComputedStyle(element).getPropertyValue("display");
    if (display === "none") {
      element.style.display = "list-item";
      title.innerHTML = "&#8595";
    } else {
      element.style.display = "none";
      title.innerHTML = "&#8594";
    }
  }
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

function logSubmit(event) {
  log.textContent = "Message sent successfully. I will contact you soon";
  event.preventDefault();
}
