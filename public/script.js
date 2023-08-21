window.addEventListener("scroll", () => {
  const header = document.querySelector(".sticky-header");
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = img.src;
    modalImage.style.maxWidth = "100%";
    modalImage.style.maxHeight = "90%";
    modalImage.style.display = "block";
    modalImage.style.margin = "auto";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalImage.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalImage.style.display = "none";
  }
});

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

window.addEventListener("load", function () {
  // Hide the loading animation once the page is fully loaded
  var loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.opacity = 0;
  loadingScreen.style.pointerEvents = "none";
});
