webpackHotUpdate("main",{

/***/ "./src/hooks/useObserver.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useObserver.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useObserver = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction useObserver(bottomOfList, load) {\r\n    var _a = (0, react_1.useState)(false), loadMore = _a[0], setLoadMore = _a[1];\r\n    var _b = (0, react_1.useState)(0), countLoad = _b[0], setCountLoad = _b[1];\r\n    var observer = new IntersectionObserver(function (entries) {\r\n        if (entries[0].isIntersecting) {\r\n            console.log(countLoad);\r\n            switch (countLoad) {\r\n                case 0:\r\n                case 1:\r\n                    load();\r\n                    setCountLoad(countLoad + 1);\r\n                    break;\r\n                case 2:\r\n                    setLoadMore(true);\r\n            }\r\n        }\r\n    }, { rootMargin: \"50px\" });\r\n    if (bottomOfList.current) {\r\n        observer.observe(bottomOfList.current);\r\n    }\r\n    return function () {\r\n        if (bottomOfList.current) {\r\n            observer.unobserve(bottomOfList.current);\r\n        }\r\n    };\r\n}\r\nexports.useObserver = useObserver;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useObserver.tsx?");

/***/ })

})