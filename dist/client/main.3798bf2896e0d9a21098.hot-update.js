webpackHotUpdate("main",{

/***/ "./src/hooks/useToken.tsx":
/*!********************************!*\
  !*** ./src/hooks/useToken.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\r\nfunction useToken(store) {\r\n    function getToken() {\r\n        var checkToken = typeof window !== undefined &&\r\n            window.__token__ !== \"undefined\" &&\r\n            window.__token__;\r\n        var resp = checkToken || localStorage.getItem(\"token\");\r\n        return resp;\r\n    }\r\n    (0, react_1.useEffect)(function () {\r\n        var token = getToken();\r\n        if (token) {\r\n            store.dispatch((0, store_1.saveToken)(token));\r\n            localStorage.setItem(\"token\", token);\r\n        }\r\n    }, []);\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.tsx?");

/***/ })

})