const header = document.getElementById("header");
const home = document.getElementById("home");

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    home.style.fontSize = "20px";
    header.style.position = "fixed";
    header.style.top = "0px";
  } else {
    home.style.fontSize = "35px";
    header.style.position = "absolute";
    header.style.top = "50px";
  }
}
