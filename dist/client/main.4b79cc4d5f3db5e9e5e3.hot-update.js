webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar textcontent_less_1 = __importDefault(__webpack_require__(/*! ./textcontent.less */ \"./src/shared/CardsList/Card/TextContent/textcontent.less\"));\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar TitleCardContainer_1 = __webpack_require__(/*! ./TitleCardContainer */ \"./src/shared/CardsList/Card/TextContent/TitleCardContainer/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"./node_modules/@redux-devtools/extension/lib/esm/index.js\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar store_1 = __webpack_require__(/*! ../../../../store/store */ \"./src/store/store.ts\");\r\nvar App_1 = __webpack_require__(/*! ../../../../App */ \"./src/App.tsx\");\r\nvar store = (0, redux_1.legacy_createStore)(\r\n// @ts-ignore\r\nstore_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(App_1.logger)));\r\nfunction TextContent(_a) {\r\n    var post = _a.post;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_less_1.default.textContent },\r\n        react_1.default.createElement(MetaData_1.MetaData, { avatar: post.sr_detail.icon_img, name: post.author }),\r\n        react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n            react_1.default.createElement(TitleCardContainer_1.TitleCardContainer, { post: post }))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

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