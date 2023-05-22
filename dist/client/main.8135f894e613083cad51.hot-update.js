webpackHotUpdate("main",{

/***/ "./src/hooks/useFocusInput.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useFocusInput.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useFocusInput = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction useFocusInput(inputRef) {\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        if (inputRef) {\r\n            var inputHtmlElem = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(\"textarea\");\r\n            if (!inputHtmlElem)\r\n                return;\r\n            inputHtmlElem.focus();\r\n            inputHtmlElem.selectionStart = inputHtmlElem.value.length;\r\n        }\r\n    }, []);\r\n}\r\nexports.useFocusInput = useFocusInput;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useFocusInput.tsx?");

/***/ })

})