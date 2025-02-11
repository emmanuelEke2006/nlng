let menu = document.getElementById("menu");
let popup = document.getElementById("popup");

menu.addEventListener("click", () => {
  popup.classList.toggle("open");
  menu.classList.toggle("close");
});
