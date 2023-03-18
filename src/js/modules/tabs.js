import progressBar from "./progresBar";
const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,

  display = "flex"
) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
      item.classList.add("animate__animated");
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = display;
    content[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;

    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
        if (i == 3) {
          progressBar("#HTML5", 95);
          progressBar("#CSS3", 85);
          progressBar("#JavaScript", 80);
          progressBar("#ReactJS", 75);
          progressBar("#Redux", 70);
        }
      });
    }
  });
};

export default tabs;
