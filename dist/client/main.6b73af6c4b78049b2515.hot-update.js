webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar textcontent_less_1 = __importDefault(__webpack_require__(/*! ./textcontent.less */ \"./src/shared/CardsList/Card/TextContent/textcontent.less\"));\r\nfunction TextContent(_a) {\r\n    var name = _a.name, title = _a.title;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_less_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_less_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_less_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { className: textcontent_less_1.default.avatar, src: \"https://cdn.dribbble.com/users/803221/avatars/small/c20484ece0f88ce6c8ddad5b4e662d8c.png?1566885869\", alt: \"avatar\" }),\r\n                react_1.default.createElement(\"a\", { className: textcontent_less_1.default.username, href: \"#user-url\" }, name)),\r\n            react_1.default.createElement(\"span\", { className: textcontent_less_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_less_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043D\\u043E \"),\r\n                \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n        react_1.default.createElement(\"h2\", { className: textcontent_less_1.default.title },\r\n            react_1.default.createElement(\"a\", { className: textcontent_less_1.default.postLink, href: \"#post-url\" }, title))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/index.ts?");

/***/ })

})