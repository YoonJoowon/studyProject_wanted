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

// scroll
window.addEventListener('scroll', function() {
    var scrollingContainer = document.querySelector('.aside1');
    var threshold = 6200; // 스크롤 임계값
    
    if (window.scrollY > threshold) {
      scrollingContainer.classList.add('fixed');
    } else {
      scrollingContainer.classList.remove('fixed');
    }
});

// slide2
const prevButton = document.querySelector('.section1_btn_left');
const nextButton = document.querySelector('.section1_btn_right');
const section1_img00_1 = document.querySelector('.section1_img00_1');

let index = 0;

prevButton.addEventListener('click', () => {
   if (index === 0){
    return
   }
   index -= 1;
   
   section1_img00_1.style.transform = `translate3d(-${700 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
   if (index === 3){
    return
   }
   index += 1;
   
   section1_img00_1.style.transform = `translate3d(-${700 * index}px, 0, 0)`;
});



let slides = document.querySelector('.slides'); // carousel
let slideImg = document.querySelectorAll('.slides li');
currentIdx = 0;
slideCount = slideImg.length;
prev = document.querySelector('.prev'); //이전 버튼
next = document.querySelector('.next'); //다음 버튼
slideWidth = 300; //슬라이드이미지 넓이
slideMargin = 100; //슬라이드 끼리의 마진값

makeClone(); // 처음이미지와 마지막 이미지 복사 함수
initfunction(); //슬라이드 넓이와 위치값 초기화 함수

function makeClone() {
  let cloneSlide_first = slideImg[0].cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}
function initfunction() {
  slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + 'px';
  slides.style.left = -(slideWidth + slideMargin) + 'px';
}


next.addEventListener('click', function () {
  //다음 버튼 눌렀을때
  if (currentIdx <= slideCount - 1) {
    //슬라이드이동
    slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`; //이동 속도
  }
  if (currentIdx === slideCount - 1) {
    //마지막 슬라이드 일때
    setTimeout(function () {
      //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
      slides.style.left = -(slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
});
prev.addEventListener('click', function () {
  //이전 버튼 눌렀을때
  console.log(currentIdx);
  if (currentIdx >= 0) {
    slides.style.left = -currentIdx * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`;
  }
  if (currentIdx === 0) {
    setTimeout(function () {
      slides.style.left = -slideCount * (slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = slideCount;
  }
  currentIdx -= 1;
});