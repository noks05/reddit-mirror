webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar card_less_1 = __importDefault(__webpack_require__(/*! ./card.less */ \"./src/shared/CardsList/Card/card.less\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.tsx\");\r\nfunction Card(props) {\r\n    var id = props.id, name = props.name, avatar = props.avatar, img = props.img, title = props.title;\r\n    var e = (0, useCommentsData_1.useCommentsData)(id);\r\n    return (react_1.default.createElement(\"li\", { className: card_less_1.default.card, id: id },\r\n        react_1.default.createElement(TextContent_1.TextContent, { name: name, avatar: avatar, title: title }),\r\n        (img.includes(\".jpg\") || img.includes(\".png\")) && react_1.default.createElement(Preview_1.Preview, { img: img }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ })

})