webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Comments/BtnActiveComments/BtnActiveComments.tsx":
/*!************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BtnActiveComments/BtnActiveComments.tsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BtnActiveComments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar btnactivecomments_less_1 = __importDefault(__webpack_require__(/*! ./btnactivecomments.less */ \"./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction BtnActiveComments(props) {\r\n    var data = props.data, isActive = props.isActive, setIsActive = props.setIsActive, setIsMore = props.setIsMore;\r\n    function openComments(e) {\r\n        setIsActive(!isActive);\r\n        setIsMore(false);\r\n    }\r\n    return (react_1.default.createElement(\"button\", { type: \"button\", className: data.length\r\n            ? btnactivecomments_less_1.default.button\r\n            : [btnactivecomments_less_1.default.button, btnactivecomments_less_1.default.buttonOff].join(\" \"), onClick: function (e) { return openComments(e); } },\r\n        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comments, size: 14, As: \"div\", color: isActive ? types_global_1.EColors.orange : types_global_1.EColors.grey99 }),\r\n        react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n        react_1.default.createElement(Text_1.Text, { size: 14, color: isActive ? types_global_1.EColors.orange : types_global_1.EColors.grey99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\")));\r\n}\r\nexports.BtnActiveComments = BtnActiveComments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BtnActiveComments/BtnActiveComments.tsx?");

/***/ })

})