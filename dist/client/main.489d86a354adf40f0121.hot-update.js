webpackHotUpdate("main",{

/***/ "./src/hooks/useObserver.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useObserver.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useObserver = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction useObserver(load, bottomListEl) {\r\n    (0, react_1.useEffect)(function () {\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting) {\r\n                load();\r\n            }\r\n        }, { rootMargin: \"50px\" });\r\n        if (bottomListEl) {\r\n            observer.observe(bottomListEl);\r\n        }\r\n        return function () {\r\n            if (bottomListEl) {\r\n                observer.unobserve(bottomListEl);\r\n            }\r\n        };\r\n    }, [bottomListEl]);\r\n}\r\nexports.useObserver = useObserver;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useObserver.tsx?");

/***/ })

})