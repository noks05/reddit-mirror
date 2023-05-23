webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar cardslist_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\"));\r\nvar cardContext_1 = __webpack_require__(/*! ../context/cardContext */ \"./src/shared/context/cardContext.tsx\");\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.tsx\");\r\nfunction CardsList() {\r\n    var Provider = cardContext_1.cardContext.Provider;\r\n    var bottomOfList = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        var _a = (0, usePostsData_1.usePostsData)(bottomOfList.current), posts = _a.posts, isLoading = _a.isLoading, errorLoading = _a.errorLoading;\r\n    }, []);\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"ul\", { className: cardslist_less_1.default.cardsList },\r\n            (posts === null || posts === void 0 ? void 0 : posts.length) === 0 && !isLoading && !errorLoading && (react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: \"center\" } }, \"\\u041D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u043E\")),\r\n            posts &&\r\n                posts.map(function (p) { return (react_1.default.createElement(Provider, { value: p, key: p.data.id },\r\n                    react_1.default.createElement(Card_1.Card, { post: p.data }))); }),\r\n            react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n            isLoading && (react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: \"center\" } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n            errorLoading && (react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: \"center\" } }, errorLoading)))));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ })

})