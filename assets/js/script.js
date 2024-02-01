(function(){
    "use strict";

const myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
let currentImage = 0;
const container = document.getElementById('content');
const nextPhoto = document.getElementById('next');
const previousPhoto = document.getElementById('previous');

nextPhoto.addEventListener('click', function(event) {
    event.preventDefault();

    currentImage++;
    if(currentImage > myImages.length - 1){
         currentImage = 0;
    }
    swapImage();
})

previousPhoto.addEventListener('click', function(event) {
    event.preventDefault();

    currentImage--;
    if(currentImage < 0){
        currentImage = myImages.length - 1;
    }
    swapImage();
})

function swapImage(){
    const newSlide = document.createElement('img');
    newSlide.src = `media/${myImages[currentImage]}`;
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);

    if(container.children.length > 2){
        container.removeChild(container.children[0]);
    }
}
})();