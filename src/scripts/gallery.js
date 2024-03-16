const images = document.querySelectorAll('.image');

const handlerActiveImage = (currentImage) => {
  const isActive = currentImage.classList.contains('active')
  
  if (isActive) {
    return currentImage.classList.remove('active')
  }
  
  images
    .forEach((image) => image .classList.remove('active'));
  
  currentImage.classList.add('active');
}

images.forEach((image) => {
  image.addEventListener('click', (e) => handlerActiveImage(e.currentTarget))
})