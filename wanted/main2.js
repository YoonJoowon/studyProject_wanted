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
