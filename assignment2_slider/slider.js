const images = ["image1.JPG", "image2.JPG", "image3.JPG"];
let currentIndex = 0;

function showImage(index) {
  const imgElement = document.getElementById("slider-image");
  imgElement.src = images[index];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Initialize with the first image
showImage(currentIndex);
