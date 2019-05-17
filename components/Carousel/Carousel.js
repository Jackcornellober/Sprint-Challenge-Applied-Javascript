class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.images = element.querySelectorAll('img')
        this.currentIndex = 1;
        this.currentImage = document.querySelector(`img[data-num='${this.currentIndex}']`)
        this.images.forEach(img => img.classList.remove('imgDisplay'))
        this.currentImage.classList.toggle('imgDisplay')
        this.leftButton.addEventListener('click', event => this.spinLeft())
        this.rightButton.addEventListener('click', event => this.spinRight())
    }
    spinLeft() {
        this.images.forEach(image => image.classList.remove('imgDisplay'))
        if (this.currentIndex == 1) {
            this.currentIndex = 4
            this.currentImage = document.querySelector(`img[data-num='${this.currentIndex}']`)
            this.currentImage.classList.add('imgDisplay')
            console.log(this.currentIndex)
        }
        else {
            this.currentIndex--;
            this.currentImage = document.querySelector(`img[data-num='${this.currentIndex}']`)
            this.currentImage.classList.add('imgDisplay')
            console.log(this.currentIndex)
        }
    }

   spinRight() {
        this.images.forEach(image => image.classList.remove('imgDisplay'))
        if (this.currentIndex == 4) {
            this.currentIndex = 1
            this.currentImage = document.querySelector(`img[data-num='${this.currentIndex}']`)
            this.currentImage.classList.add('imgDisplay')
            console.log(this.currentIndex)
        }
        else {
            this.currentIndex++;
            this.currentImage = document.querySelector(`img[data-num='${this.currentIndex}']`)
            this.currentImage.classList.add('imgDisplay')
            console.log(this.currentIndex)
        }
   } 
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach(caro => new Carousel(caro));
console.log('hi')

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

console.log('hi')