webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.tsx":
/*!************************************!*\
  !*** ./src/hooks/usePostsData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.tsx\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction usePostsData() {\r\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    (0, react_1.useEffect)(function () {\r\n        if (token !== \"\" && token !== \"undefined\") {\r\n            axios_1.default.get(\"https://oauth.reddit.com/best.json?sr_detail=true\", {\r\n                headers: { Authorization: \"bearer \".concat(token) },\r\n            })\r\n                .then(function (resp) {\r\n                var postsData = resp.data.data.children;\r\n                setData({ posts: postsData });\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.tsx?");

/***/ })

})