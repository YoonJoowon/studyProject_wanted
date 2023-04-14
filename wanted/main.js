// slide1
const prevButton = document.querySelector('.subSlideBtn1');
const nextButton = document.querySelector('.subSlideBtn2');
const carousel = document.querySelector('.carousel');
const carouselContents = document.querySelectorAll('.carousel_content')
const slideWidth = 1084;
let slideCount = carouselContents.length;
let currentIdx = 0;

const carousel_len = carouselContents.length; // 슬라이드의 길이

makeClone(); // 처음이미지와 마지막 이미지 복사 함수
initfunction(); //슬라이드 넓이와 위치값 초기화 함수

function makeClone() {
   let cloneSlide_first = carousel[0].cloneNode(true);
   let cloneSlide_last = carousel.lastElementChild.cloneNode(true);
   carousel.append(cloneSlide_first);
   carousel.insertBefore(cloneSlide_last, carousel.firstElementChild);
 }

 function initfunction() {
   carousel.style.width = (slideWidth) * slideCount + 2 + 'px';
   carousel.style.left = - (slideWidth) + 'px';
 }

// 이전 버튼 눌렀을때`

prevButton.addEventListener('click', () => {

   console.log(currentIdx);
   if (currentIdx >= 0) {
      carousel.style.left = -currentIdx * (slideWidth) + 'px';
      carousel.style.transition = `${0.5}s ease-out`;
   }

   if (currentIdx === 0) {
     setTimeout(function () {
      carousel.style.left = -slideCount * (slideWidth) + 'px';
      carousel.style.transition = `${0}s ease-out`;
     }, 500);
     currentIdx = slideCount;
   }

   currentIdx -= 1;

});

nextButton.addEventListener('click', () => {
     //다음 버튼 눌렀을때
  if (currentIdx <= slideCount - 1) {
   //슬라이드이동
   carousel.style.left = -(currentIdx + 2) * (slideWidth) + 'px';
   carousel.style.transition = `${0.5}s ease-out`; //이동 속도
 }
 if (currentIdx === slideCount - 1) {
   //마지막 슬라이드 일때
   setTimeout(function () {
     //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
     carousel.style.left = - (slideWidth) + 'px';
     carousel.style.transition = `${0}s ease-out`;
   }, 500);
   currentIdx = -1;
 }
 currentIdx += 1;
});

setInterval(() => {
   if (currentIdx === 4) {
      currentIdx = -1;
   }
   currentIdx += 1;
   carousel.style.transform = `translate3d(-${(slideWidth) * currentIdx}px, 0, 0)`;
 }, 3000);




// modal
document.getElementById("login").onclick = function() {
    document.getElementById("login_modal").style.display="block";
}

document.getElementById("modal_top_close").onclick = function() {
    document.getElementById("login_modal").style.display="none";
}   

// email
const emailInput = document.getElementById("email");
const emailMessage = document.getElementById("email_message");
const modal2_open = document.getElementById("modal2_open");
const modal2_close = document.getElementById("modal_top_close2")
const loginModal = document.getElementById("login_modal");
const loginModal2 = document.getElementById("login_modal2");

function checkEmailValidity() {
  // 이메일 유효성 검사에 사용할 정규식 패턴
  let emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
 
  if (!emailPattern.test(emailInput.value)) {
    emailMessage.innerText = "올바른 이메일을 입력해주세요.";
    emailMessage.style.color = "red";
    modal2_open.style.backgroundColor = "red";
    modal2_open.style.color = "white";
    emailInput.style.border = "red solid 1px";
    modal2_open.disabled = true;
  } else {
    emailMessage.innerText = "";
    emailInput.style.border = "blue solid 1px";
    modal2_open.style.backgroundColor = "rgb(63, 63, 255)";
    modal2_open.style.color = "white";
    modal2_open.disabled = false;
    modal2_open.addEventListener("click", openLoginModal2);
  }
}

function openLoginModal2() {
  if (emailInput.value) {
    loginModal2.style.display = "block";
  } else {
    alert("유효한 이메일 주소를 입력해주세요.");
  }
}

// modal close
modal2_close.addEventListener("click", function() {
  loginModal2.style.display = "none";
  loginModal.style.display = "none";
});



