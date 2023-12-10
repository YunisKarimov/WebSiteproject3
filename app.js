let menu = document.querySelector("#menu_btn");
let navbar = document.querySelector(" .header .flex .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
