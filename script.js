function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

let slideImages = document.querySelectorAll('img');
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let dots = document.querySelectorAll('.dot');

var counter = 0;

next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 1.5s ease-in forwards';
    if(counter >= slideImages.length-1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 1.5s ease-in forwards';
    indicators();
}
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 1.5s ease-in forwards';
    if(counter == 0) {
        counter = slideImages.length-1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 1.5s ease-in forwards';
    indicators();
}

function autoSlide() {
    deletInterval = setInterval(timer, 2000);
    function timer() {
        slideNext();
        indicators();
    }
}
autoSlide();

const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function() {
    clearInterval(deletInterval);
});

container.addEventListener('mouseout', autoSlide);

function indicators() {
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

function switchImage(currentImage){
    currentImage.classList.add('active');
    let imageId = currentImage.getAttribute('attr');
    if(imageId > counter) {
        slideImages[counter].style.animation = 'next1 2s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 2s ease-in forwards';
    } else if(imageId == counter) {
        return;
    } else {
        slideImages[counter].style.animation = 'prev1 2s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 2s ease-in forwards';
    }
}