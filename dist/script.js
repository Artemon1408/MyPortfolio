/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burgermenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burgermenu */ "./src/js/modules/burgermenu.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");




window.addEventListener("DOMContentLoaded", () => {
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])(".header__menu", ".header__menu-link", "section", "animate__fadeIn");
  Object(_modules_burgermenu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])("section", ".scroll");
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(".works__wrapper", ".works__media-btn");
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/burgermenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/burgermenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  menuItem.forEach(item => {
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
/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");
  const message = {
    loading: "Loading...",
    succes: "Thank you! We will contact you soon",
    failure: "Something went wrong..."
  };
  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = "";
    });
  };
  form.forEach(item => {
    item.addEventListener("submit", e => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);
      const formData = new FormData(item);
      postData("api/mailer/smart.php", formData).then(res => {
        statusMessage.textContent = message.succes;
      }).catch(() => statusMessage.textContent = message.failure).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/progresBar.js":
/*!**************************************!*\
  !*** ./src/js/modules/progresBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const progressBar = (id, percent) => {
  const percentIndex = percent;
  const ratio = percentIndex / 100;
  const canvas = document.querySelector(id);
  const ctx = canvas.getContext("2d");
  const startAngle = Math.PI / 6;
  const endAngle = (2 * Math.PI - startAngle) * ratio;
  const stepAngle = Math.PI / 108;
  let curAngle = startAngle;
  let grad = ctx.createLinearGradient(0, 0, 100, 0);
  grad.addColorStop(0, "#000");
  grad.addColorStop(1, "#0baeff");
  function drawArc(start, end, strokeStyle) {
    ctx.save();
    ctx.translate(120, 120);
    ctx.rotate(Math.PI / 2);
    ctx.beginPath();
    ctx.strokeStyle = "lightgrey";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.arc(0, 0, 50, start, 2 * Math.PI - start);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.arc(0, 0, 50, start, end);
    ctx.stroke();
    ctx.restore();
  }
  function drawCircle(angle) {
    ctx.save();
    ctx.translate(120, 120);
    ctx.rotate(Math.PI / 2);
    ctx.fillStyle = "white";
    ctx.translate(Math.cos(angle) * 100, Math.sin(angle) * 100);
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
  function drawText(length, cur) {
    const percent = (cur / length * percentIndex).toFixed(0);
    ctx.save();
    ctx.translate(120, 120);
    ctx.font = "bold 20px sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.beginPath();
    ctx.fillText(percent + "%", 0, 0);
    ctx.stroke();
    ctx.restore();
  }
  function drawSpeed(start, end, cur) {
    // drawArc(start, end, "lightgrey");
    drawArc(start, cur, grad);
    drawText(end - start, cur - start);
    if (cur !== end) {
      drawCircle(cur);
    }
  }
  requestAnimationFrame(function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    curAngle = Math.min(curAngle + stepAngle, endAngle);
    drawSpeed(startAngle, endAngle, curAngle);
    if (curAngle < endAngle) {
      requestAnimationFrame(draw);
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (progressBar);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progresBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progresBar */ "./src/js/modules/progresBar.js");

const slider = (slides, next) => {
  let slideIndex = 1;
  const items = document.querySelectorAll(slides),
    dots = document.querySelectorAll(".works__sliderDots-dot"),
    headerTab = document.querySelector(".header__menu"),
    tab = document.querySelectorAll(".header__menu-link");
  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    if (slideIndex == 3) {
      Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#HTML5", 95);
      Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#CSS3", 85);
      Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#JavaScript", 80);
      Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#ReactJS", 75);
      Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#Redux", 70);
    }
    items.forEach(item => {
      item.classList.add("animate__animated");
      item.style.display = "none";
      if (item.classList.contains("works__wrapper")) {
        item.addEventListener("touchstart", handleTouchStart);
        item.addEventListener("touchmove", handleTouchMove);
      }
    });
    items[slideIndex - 1].style.display = "flex";
    try {
      dots.forEach(dot => {
        dot.classList.remove("dot-active");
        dot.classList.add("animate__animated");
      });
      dots[0].classList.add("dot-active");
    } catch (e) {}
    try {
      headerTab.addEventListener("click", e => {
        const target = e.target;
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            slideIndex += i;
          }
        });
      });
    } catch (e) {}
  }
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  let firstPos = null;
  function handleTouchStart(e) {
    const firstTouch = e.touches[0];
    firstPos = firstTouch.clientX;
  }
  function handleTouchMove(e) {
    if (!firstPos) {
      return false;
    }
    let lastPos = e.touches[0].clientX;
    let xDiff = lastPos - firstPos;
    if (xDiff < 0) {
      plusSlides(1);
      items[slideIndex - 1].classList.add("animate__fadeInRight");
      dots[0].classList.remove("dot-active");
      dots[slideIndex - 1].classList.add("dot-active");
    }
    firstPos = null;
  }
  try {
    const nextBtns = document.querySelectorAll(next);
    nextBtns.forEach(nextBtn => {
      if (nextBtn.classList.contains("works__media-btn")) {
        nextBtn.addEventListener("click", () => {
          plusSlides(1);
          items[slideIndex - 1].classList.add("animate__fadeInRight");
          dots[0].classList.remove("dot-active");
          dots[slideIndex - 1].classList.add("dot-active");
        });
      } else {
        nextBtn.addEventListener("click", () => {
          plusSlides(1);
          items[slideIndex - 1].classList.add("animate__fadeIn");
        });
      }
    });
  } catch (e) {}
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progresBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progresBar */ "./src/js/modules/progresBar.js");

const tabs = function (headerSelector, tabSelector, contentSelector, activeClass) {
  let display = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "flex";
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach(item => {
      item.style.display = "none";
      item.classList.add("animate__animated");
      item.classList.remove(activeClass);
    });
  }
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    content[i].style.display = display;
    content[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  header.addEventListener("click", e => {
    const target = e.target;
    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
        if (i == 3) {
          Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#HTML5", 95);
          Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#CSS3", 85);
          Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#JavaScript", 80);
          Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#ReactJS", 75);
          Object(_progresBar__WEBPACK_IMPORTED_MODULE_0__["default"])("#Redux", 70);
        }
      });
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map