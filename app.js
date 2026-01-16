// Load donation count
let donationCount = localStorage.getItem("donationCount");
donationCount = donationCount ? parseInt(donationCount) : 0;

// Confirm donation button
function confirmDonation() {
  donationCount++;
  localStorage.setItem("donationCount", donationCount);
  alert("Thank you for your donation ❤️");
  window.location.href = "progress.html";
}

// ---------- SLIDER CODE (GLOBAL) ----------

let images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg"
 
];

let currentIndex = 0;

function showImage() {
  const img = document.getElementById("sliderImage");
  if (img) {
    img.src = images[currentIndex];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

// ---------- ON PAGE LOAD ----------
document.addEventListener("DOMContentLoaded", () => {
  const countEl = document.getElementById("count");
  if (countEl) {
    countEl.textContent = donationCount;
  }

  showImage(); // show first image
  setInterval(nextImage, 4000); // auto slide every 4 sec
});

