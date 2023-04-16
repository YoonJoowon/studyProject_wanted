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


// slide1
let slides = document.querySelector('.slides');
let slideImg = document.querySelectorAll('.slides li');
currentIdx = 0;
slideCount = slideImg.length;
prev = document.querySelector('.prev'); //이전 버튼
next = document.querySelector('.next'); //다음 버튼

slideWidth = 1084; //슬라이드이미지 넓이
slideMargin = 0; //슬라이드 끼리의 마진값

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


function slideNext() {
  next.click();
}

let timer = setInterval(slideNext, 3000);

// 마우스가 슬라이드 위에 있을 때 타이머를 멈추도록 이벤트 핸들러 추가
slides.addEventListener('mouseenter', function() {
  clearInterval(timer);
});

// 마우스가 슬라이드 밖으로 이동할 때 타이머를 다시 시작하도록 이벤트 핸들러 추가
slides.addEventListener('mouseleave', function() {
  timer = setInterval(slideNext, 3000);
});