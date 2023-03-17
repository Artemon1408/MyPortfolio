import burgerMenu from "./modules/burgermenu";
import slider from "./modules/slider";
import forms from "./modules/forms";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
  tabs(".header__menu", ".header__menu-link", "section", "animate__fadeIn");
  burgerMenu();
  slider("section", ".scroll");
  slider(".works__wrapper", ".works__media-btn");
  forms();
});
