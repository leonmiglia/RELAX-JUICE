const carouselInner = document.getElementById('carousel-inner');
const nImg = carouselInner.childElementCount;
let current = 1;
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

const goNext = () => {
    current++;
    if(current>nImg) {
        current=1;
    }
    for (const img of carouselInner.children) {
        img.classList.add('hidden');
    }
    carouselInner.querySelector(`img:nth-child(${current})`).classList.remove('hidden');
};
nextButton.addEventListener("click", goNext);

prevButton.addEventListener("click", function(){
    current--;
    if(current===0) {
        current=nImg;
    }
    for (const img of carouselInner.children) {
        img.classList.add('hidden');
    }
    carouselInner.querySelector(`img:nth-child(${current})`).classList.remove('hidden');
});

setInterval(goNext, 5000);