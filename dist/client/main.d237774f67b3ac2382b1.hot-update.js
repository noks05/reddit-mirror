webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar textcontent_less_1 = __importDefault(__webpack_require__(/*! ./textcontent.less */ \"./src/shared/CardsList/Card/TextContent/textcontent.less\"));\r\nvar Comments_1 = __webpack_require__(/*! ../Comments */ \"./src/shared/CardsList/Card/Comments/index.ts\");\r\nfunction TextContent(_a) {\r\n    var id = _a.id, subreddit = _a.subreddit, name = _a.name, avatar = _a.avatar, title = _a.title;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_less_1.default.textContent },\r\n        react_1.default.createElement(Comments_1.Comments, { id: id, subreddit: subreddit }),\r\n        react_1.default.createElement(\"div\", { className: textcontent_less_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_less_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { className: textcontent_less_1.default.avatar, src: avatar\r\n                        ? avatar\r\n                        : \"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_4.png\", alt: \"avatar\" }),\r\n                react_1.default.createElement(\"a\", { className: textcontent_less_1.default.username, href: \"#user-url\" }, name)),\r\n            react_1.default.createElement(\"span\", { className: textcontent_less_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_less_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043D\\u043E \"),\r\n                \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n        react_1.default.createElement(\"h2\", { className: textcontent_less_1.default.title },\r\n            react_1.default.createElement(\"a\", { className: textcontent_less_1.default.postLink, href: \"#post-url\" }, title))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ })

})