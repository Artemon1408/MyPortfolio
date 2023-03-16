import burgerMenu from "./modules/burgermenu";
import slider from "./modules/slider";
import forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
  burgerMenu();
  slider("section", ".scroll");
  slider(".works__wrapper", ".works__media-btn");
  forms();
});
