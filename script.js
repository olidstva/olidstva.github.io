const images = [
  "img/1.webp",
  "img/2.webp",
  "img/3.webp",
  "img/4.webp"
];

let current = 0;
const imageElement = document.getElementById("carousel-image");

setInterval(() => {
  current = (current + 1) % images.length;
  imageElement.style.opacity = 0;
  setTimeout(() => {
    imageElement.src = images[current];
    imageElement.style.opacity = 1;
  }, 500);
}, 4000);
