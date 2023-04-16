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
const prevButton = document.querySelector('.subSlideBtn1');
const nextButton = document.querySelector('.subSlideBtn2');
const carousel = document.querySelector('.carousel');
let index = 0;

prevButton.addEventListener('click', () => {
   if (index === 0){
    index = 6
   }
   index -= 1;
   
   carousel.style.transform = `translate3d(-${1084 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
   if (index === 5){
    index = -1;
   }
   index += 1;
   
   carousel.style.transform = `translate3d(-${1084 * index}px, 0, 0)`;
});

setInterval(() => {
    if (index === 5) {
        index = -1;
    }
    index += 1;
    carousel.style.transform = `translate3d(-${1084 * index}px, 0, 0)`;
  }, 3000);