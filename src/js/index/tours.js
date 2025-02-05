const slides = document.querySelector('#tours-slides');
const slidesArray = slides.querySelectorAll('.tours__slide');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const pagination = document.querySelector('#pagination');
const checked = document.querySelector('#checked');
const page = document.querySelector('body');

let marginLeft = 0;
slides.style.marginLeft = '0px';
let checkedX = 0;
checked.style.left = '0px';
const checkedWidth = pagination.clientWidth / slidesArray.length;
let gap = 0;
if (page.clientWidth < 1024) {
  gap = 12;
} else if (page.clientWidth >= 1024) {
  gap = 32;
}
checked.style.width = `${checkedWidth}px`;

prevBtn.addEventListener('click', () => {
  if (marginLeft < 0) {
    marginLeft += slidesArray[0].clientWidth + gap;
    slides.style.marginLeft = `${marginLeft}px`;
    checkedX -= pagination.clientWidth / slidesArray.length;
    checked.style.left = `${checkedX}px`;
  }
});

nextBtn.addEventListener('click', () => {
  if (marginLeft > -(slides.scrollWidth - slidesArray[0].clientWidth - 12)) {
    marginLeft -= slidesArray[0].clientWidth + gap;
    slides.style.marginLeft = `${marginLeft}px`;
    checkedX += pagination.clientWidth / slidesArray.length;
    checked.style.left = `${checkedX}px`;
  }
});
