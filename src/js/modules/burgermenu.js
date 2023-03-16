const burgerMenu = () => {
  const menu = document.body.querySelector(".header__menu"),
    menuItem = document.body.querySelectorAll(".header__menu-link"),
    hamburger = document.body.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    menu.classList.toggle("header__menu-active");
    if (hamburger.classList.contains("hamburger-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger-active");
      menu.classList.toggle("header__menu-active");
      if (menu.classList.contains("header__menu-active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  });
};

export default burgerMenu;
