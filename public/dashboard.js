alert("Hi You");
const navBar = document.getElementById("nav-bar");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
menu.addEventListener("click", () => {
  closeMenu.style.display = "block";
  menu.style.display = "none";
  navBar.style.top = "80px";
});
closeMenu.addEventListener("click", () => {
  menu.style.display = "block";
  closeMenu.style.display = "none";
  navBar.style.top = "-800px";
});
