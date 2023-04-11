// slide
const prevButton = document.querySelector('.subSlideBtn1');
const nextButton = document.querySelector('.subSlideBtn2');
const carousel = document.querySelector('.carousel');

let index = 0;

prevButton.addEventListener('click', () => {
   if (index === 0){
    index = 5
   }
   index -= 1;
   
   carousel.style.transform = `translate3d(-${1084 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
   if (index === 4){
    index = -1;
   }
   index += 1;
   
   carousel.style.transform = `translate3d(-${1084 * index}px, 0, 0)`;
});

// modal
// document.getElementById("login").onclick = function() {
//     document.getElementById("login-modal").style.display="block";
// }

// document.getElementById("close").onclick = function() {
//     document.getElementById("login-modal").style.display="none";
// }   
