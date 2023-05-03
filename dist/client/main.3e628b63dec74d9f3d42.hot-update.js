webpackHotUpdate("main",{

/***/ "./src/hooks/useChangePadding.tsx":
/*!****************************************!*\
  !*** ./src/hooks/useChangePadding.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useChangePadding = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction useChangePadding(elem, isActive, isMore, data) {\r\n    (0, react_1.useEffect)(function () {\r\n        if (!elem)\r\n            return;\r\n        if (!data.length)\r\n            return;\r\n        var li = elem.closest(\"[class^=card__card--]\");\r\n        if (isActive) {\r\n            var container = elem.closest(\"[class^=comments__container--]\");\r\n            var heightContr = (container === null || container === void 0 ? void 0 : container.lastChild).getBoundingClientRect().height;\r\n            var heightElem = elem.getBoundingClientRect().height;\r\n            var castomPadding = heightContr - heightElem;\r\n            if (li)\r\n                li.style.paddingBottom = castomPadding + 50 + \"px\";\r\n        }\r\n        else {\r\n            var paddingTop = li.style.paddingTop;\r\n            if (li)\r\n                li.style.paddingBottom = paddingTop;\r\n        }\r\n    }, [isActive, isMore]);\r\n}\r\nexports.useChangePadding = useChangePadding;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useChangePadding.tsx?");

/***/ })

})