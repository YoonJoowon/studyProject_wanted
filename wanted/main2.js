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