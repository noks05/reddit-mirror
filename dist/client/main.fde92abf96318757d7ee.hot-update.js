webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/Comment.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/Comment.tsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar comment_less_1 = __importDefault(__webpack_require__(/*! ./comment.less */ \"./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/comment.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar BoxFormReasponse_1 = __webpack_require__(/*! ./BoxFormReasponse */ \"./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/index.ts\");\r\nfunction Comment(_a) {\r\n    var comment = _a.comment;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: comment_less_1.default.user },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.anon, size: 20 }),\r\n            react_1.default.createElement(Break_1.Break, { size: 8 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.orange }, comment.data.author)),\r\n        react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.black, As: \"p\", userClass: [comment_less_1.default.lineHeight24, comment_less_1.default.textBody].join(\" \") }, comment.data.selftext),\r\n        react_1.default.createElement(BoxFormReasponse_1.BoxFormReasponse, { author: comment.data.author })));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/index.ts":
/*!**************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/index.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comment */ \"./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/Comment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/index.ts?");

/***/ })

})