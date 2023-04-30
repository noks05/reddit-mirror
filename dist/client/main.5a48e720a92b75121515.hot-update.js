webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Comments/Comments.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/Comments.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar comments_less_1 = __importDefault(__webpack_require__(/*! ./comments.less */ \"./src/shared/CardsList/Card/Comments/comments.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar ListComments_1 = __webpack_require__(/*! ./ListComments */ \"./src/shared/CardsList/Card/Comments/ListComments/index.ts\");\r\nfunction Comments() {\r\n    var _a = (0, react_1.useState)(false), isActive = _a[0], setIsActive = _a[1];\r\n    function addPaddingBottom(e) {\r\n        setIsActive(!isActive);\r\n        var li = e.currentTarget.closest(\"[class^=card__card--]\");\r\n        var container = e.currentTarget.parentNode;\r\n        var heightContr = container.getBoundingClientRect()\r\n            .height;\r\n        var heightBtn = e.currentTarget.getBoundingClientRect().height;\r\n        var castomPadding = heightContr - heightBtn;\r\n        if (li)\r\n            li.style.paddingBottom = castomPadding + \"px\";\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: comments_less_1.default.commentsContainer },\r\n        react_1.default.createElement(\"button\", { type: \"button\", className: comments_less_1.default.commentsButton, onClick: function (e) { return addPaddingBottom(e); } },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comments, size: 14, As: \"div\", color: isActive ? types_global_1.EColors.orange : types_global_1.EColors.grey99 }),\r\n            react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, color: isActive ? types_global_1.EColors.orange : types_global_1.EColors.grey99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\")),\r\n        isActive && react_1.default.createElement(ListComments_1.ListComments, null)));\r\n}\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/ListComments/ListComments.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/ListComments/ListComments.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (5:12)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| exports.ListComments = void 0;\\n| function ListComments() {\\n>     return ();\\n| }\\n| exports.ListComments = ListComments;\");\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/ListComments/ListComments.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/ListComments/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/ListComments/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ListComments */ \"./src/shared/CardsList/Card/Comments/ListComments/ListComments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/ListComments/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/CardsList/Card/Comments/Comments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/index.ts?");

/***/ })

})