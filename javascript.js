window.onscroll = function() {myFunction()};

var workheader = document.getElementById("workHeader");

var sticky = workheader.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    workheader.classList.add("sticky");
  } else {
    workheader.classList.remove("sticky");
  }
}
