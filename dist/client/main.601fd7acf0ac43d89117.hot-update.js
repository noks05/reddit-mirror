webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/TextContent/TitleCard/TitleCard.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TitleCard/TitleCard.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TitleCard = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar titlecard_less_1 = __importDefault(__webpack_require__(/*! ./titlecard.less */ \"./src/shared/CardsList/Card/TextContent/TitleCard/titlecard.less\"));\r\nvar ModalCard_1 = __webpack_require__(/*! ../../../ModalCard */ \"./src/shared/CardsList/ModalCard/index.ts\");\r\nfunction TitleCard(_a) {\r\n    var post = _a.post;\r\n    var _b = (0, react_1.useState)(false), isModalOpen = _b[0], setIsModalOpen = _b[1];\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"h2\", { className: titlecard_less_1.default.title, onClick: function () { return setIsModalOpen(true); } },\r\n            react_1.default.createElement(\"a\", { className: titlecard_less_1.default.postLink, href: \"#post-url\" }, post.title)),\r\n        isModalOpen && (react_1.default.createElement(ModalCard_1.ModalCard, { post: post, onClose: function () { return setIsModalOpen(false); } }))));\r\n}\r\nexports.TitleCard = TitleCard;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TitleCard/TitleCard.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TitleCard/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TitleCard/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TitleCard */ \"./src/shared/CardsList/Card/TextContent/TitleCard/TitleCard.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TitleCard/index.ts?");

/***/ })

})