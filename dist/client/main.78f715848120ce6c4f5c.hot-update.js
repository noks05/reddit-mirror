webpackHotUpdate("main",{

/***/ "./src/hooks/useObserver.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useObserver.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useObserver = void 0;\r\nfunction useObserver(props) {\r\n    var observableEl = props.observableEl, load = props.load, setLoadMore = props.setLoadMore, countLoad = props.countLoad, setCountLoad = props.setCountLoad;\r\n    var observer = new IntersectionObserver(function (entries) {\r\n        if (entries[0].isIntersecting) {\r\n            console.log(countLoad);\r\n            switch (countLoad) {\r\n                case 0:\r\n                case 1:\r\n                    load();\r\n                    setCountLoad(countLoad + 1);\r\n                    break;\r\n                case 2:\r\n                    setLoadMore(true);\r\n            }\r\n        }\r\n    }, { rootMargin: \"50px\" });\r\n    if (observableEl) {\r\n        observer.observe(observableEl);\r\n    }\r\n    return function () {\r\n        if (observableEl) {\r\n            observer.unobserve(observableEl);\r\n        }\r\n    };\r\n}\r\nexports.useObserver = useObserver;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useObserver.tsx?");

/***/ })

})