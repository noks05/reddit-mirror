webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/BoxComments.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BoxComments/BoxComments.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BoxComments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar boxcomments_less_1 = __importDefault(__webpack_require__(/*! ./boxcomments.less */ \"./src/shared/CardsList/Card/Comments/BoxComments/boxcomments.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar ListComments_1 = __webpack_require__(/*! ./ListComments */ \"./src/shared/CardsList/Card/Comments/BoxComments/ListComments/index.ts\");\r\nfunction BoxComments(props) {\r\n    var isActive = props.isActive, setIsActive = props.setIsActive;\r\n    return (react_1.default.createElement(\"div\", { className: boxcomments_less_1.default.listBox },\r\n        react_1.default.createElement(Icon_1.Icon, { name: \"rainbow\", color: types_global_1.EColors.orange, userClass: boxcomments_less_1.default.rainbow }),\r\n        react_1.default.createElement(\"button\", { className: boxcomments_less_1.default.close, onClick: function () {\r\n                setIsActive(!isActive);\r\n            } },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.closeX, size: 14, color: types_global_1.EColors.greyC4 })),\r\n        react_1.default.createElement(ListComments_1.ListComments, null)));\r\n}\r\nexports.BoxComments = BoxComments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BoxComments/BoxComments.tsx?");

/***/ })

})