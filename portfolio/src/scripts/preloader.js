const preloader = document.querySelector('.preloader');
const images = document.querySelectorAll('.parallax__image');

const promises = [...images].map((image) => loadImage(image.currentSrc || image.src));
Promise.all(promises).finally(() => {
  preloader.style.display = 'none';
  document.body.style.overflow = 'auto';
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image's URL: ${url}`));
    });
    img.src = url;
  });
}
