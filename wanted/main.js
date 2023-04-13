// slide1
const prevButton = document.querySelector('.subSlideBtn1');
const nextButton = document.querySelector('.subSlideBtn2');
const carousel = document.querySelector('.carousel');

let index = 0;

prevButton.addEventListener('click', () => {
   if (index === 0){
    index = 9
   }
   index -= 1;
   
   carousel.style.transform = `translate3d(-${1084 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
   if (index === 8){
    index = -1;
   }
   index += 1;
   
   carousel.style.transform = `translate3d(-${1084 * index}px, 0, 0)`;
});


// modal
document.getElementById("login").onclick = function() {
    document.getElementById("login_modal").style.display="block";
}

document.getElementById("modal_top_close").onclick = function() {
    document.getElementById("login_modal").style.display="none";
}   

// modal2
document.getElementById("modal2_open").onclick = function() {
   document.getElementById("login_modal2").style.display="block";
}

document.getElementById("modal_top_close2").onclick = function() {
   document.getElementById("login_modal2").style.display="none";
   document.getElementById("login_modal").style.display="none";
}   
