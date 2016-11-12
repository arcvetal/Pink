var toggle = document.querySelector(".btn--toggle");
var cross = document.querySelector(".btn--cross");
var menuList = document.querySelector(".main-nav__wrapper");
var margtop = document.querySelector(".page-header");

cross.addEventListener("click", function(event) {
  event.preventDefault();
  margtop.classList.remove("page-header--open");
  menuList.classList.remove("main-nav__wrapper--open");
});

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  margtop.classList.add("page-header--open");
  menuList.classList.add("main-nav__wrapper--open");
});
