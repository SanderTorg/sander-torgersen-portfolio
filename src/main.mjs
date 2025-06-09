const header = document.getElementById("hide-header");
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.transform = "translateY(0)";
  } else {
    header.style.transform = "translateY(-60px)";
  }

  prevScrollpos = currentScrollPos;
};
