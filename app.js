const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    setTimeout(() => {
      navList.classList.remove("active");
    }, 300);
  });
});
