// Replace these with the actual names/paths of your images
const images = [
    "image.jpg",
    "image2.jpg",
    "image3.jpg"
];

let currentIndex = 0;

function showImage(index) {
    document.getElementById("gallery-image").src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}