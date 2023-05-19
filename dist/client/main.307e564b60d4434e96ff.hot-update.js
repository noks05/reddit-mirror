webpackHotUpdate("main",{

/***/ "./src/utils/react/GenericComments/GenericComments.tsx":
/*!*************************************************************!*\
  !*** ./src/utils/react/GenericComments/GenericComments.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericComments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar genericcomments_less_1 = __importDefault(__webpack_require__(/*! ./genericcomments.less */ \"./src/utils/react/GenericComments/genericcomments.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../shared/glop/Icon */ \"./src/shared/glop/Icon/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../shared/types.global */ \"./src/shared/types.global.ts\");\r\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"./node_modules/@redux-devtools/extension/lib/esm/index.js\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar store_1 = __webpack_require__(/*! ../../../store/store */ \"./src/store/store.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar CommentContainer_1 = __webpack_require__(/*! ../../../shared/CardsList/CommentContainer */ \"./src/shared/CardsList/CommentContainer/index.ts\");\r\nvar App_1 = __webpack_require__(/*! ../../../App */ \"./src/App.tsx\");\r\nvar store = (0, redux_1.legacy_createStore)(\r\n// @ts-ignore\r\nstore_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(App_1.logger)));\r\nfunction GenericComments(_a) {\r\n    var data = _a.data, classContainer = _a.classContainer;\r\n    return (react_1.default.createElement(\"ul\", { className: classContainer }, data.map(function (comment) { return (react_1.default.createElement(\"li\", { className: genericcomments_less_1.default.comment, key: comment.data.id },\r\n        react_1.default.createElement(\"div\", { className: genericcomments_less_1.default.commentInner },\r\n            react_1.default.createElement(\"div\", { className: genericcomments_less_1.default.hideControls },\r\n                react_1.default.createElement(Icon_1.Icon, { name: \"up\", userClass: genericcomments_less_1.default.iconUp, color: types_global_1.EColors.greyD9 }),\r\n                react_1.default.createElement(Icon_1.Icon, { name: \"down\", userClass: genericcomments_less_1.default.iconDown, color: types_global_1.EColors.greyD9 })),\r\n            react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n                react_1.default.createElement(CommentContainer_1.CommentContainer, { comment: comment, controls: [\"Ответить\", \"Поделиться\", \"Пожаловаться\"] }))),\r\n        comment.data.replies && (react_1.default.createElement(GenericComments, { data: comment.data.replies.data.children })))); })));\r\n}\r\nexports.GenericComments = GenericComments;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/GenericComments/GenericComments.tsx?");

/***/ }),

/***/ "./src/utils/react/GenericComments/index.ts":
/*!**************************************************!*\
  !*** ./src/utils/react/GenericComments/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericComments */ \"./src/utils/react/GenericComments/GenericComments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/utils/react/GenericComments/index.ts?");

/***/ })

})