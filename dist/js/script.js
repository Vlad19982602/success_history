/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();
        
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./src/js/modules/pageup.js":
/*!**********************************!*\
  !*** ./src/js/modules/pageup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = (upSelector) => {
	const upElem = document.querySelector(upSelector);
	

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 250) {
			upElem.classList.add('animated', 'fadeInUp');
			upElem.classList.remove('fadeOut');
		} else {
			upElem.classList.add('fadeOut');
			upElem.classList.remove('fadeIn');
		}
	});

	// реализация плавного скролла

	const elem = document.documentElement,
		body = document.body;

	const calcScroll = () => {
		upElem.addEventListener('click', function(event) {
			let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

			if (this.hash !== '') {
				event.preventDefault();
				let hashElement = document.querySelector(this.hash),
					hashElementTop = 0;

				while (hashElement.offsetParent) {
					hashElementTop += hashElement.offsetTop;
					hashElement = hashElement.offsetParent;
				}

				hashElementTop = Math.round(hashElementTop);
				smoothScroll(scrollTop, hashElementTop, this.hash); 
			}
		});
	};

	const smoothScroll = (from, to, hash) => {
		let timeInterval = 1,
			prevScrollTop,
			speed;

		if (to > from) {
			speed = 30;
		} else {
			speed = -30;
		}

		let move = setInterval(function() {
			let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

			if (prevScrollTop === scrollTop ||
				(to > from && scrollTop >= to ||
					to < from && scrollTop <= to)) {
						clearInterval(move);
			} else {
				body.scrollTop += speed;
				elem.scrollTop += speed;
				prevScrollTop = scrollTop;
			}
		}, timeInterval);
	};

	calcScroll();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mask.js */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_pageup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageup.js */ "./src/js/modules/pageup.js");



window.addEventListener('DOMContentLoaded', () => {

	(0,_modules_pageup_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.pageup');
	(0,_modules_mask_js__WEBPACK_IMPORTED_MODULE_0__["default"])('[name="form_text_2"]');
});


})();

/******/ })()
;
//# sourceMappingURL=script.js.map