webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/ModalCard/ModalCommentsList/ModalCommentsList.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/ModalCard/ModalCommentsList/ModalCommentsList.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ModalCommentsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ../../../glop/Text */ \"./src/shared/glop/Text/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar GenericComments_1 = __webpack_require__(/*! ../../../../utils/react/GenericComments */ \"./src/utils/react/GenericComments/index.ts\");\r\nfunction ModalCommentsList(_a) {\r\n    var id = _a.id, subreddit = _a.subreddit;\r\n    var data = (0, useCommentsData_1.useCommentsData)(id, subreddit)[0];\r\n    if (!data.length) {\r\n        return (react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.grey99 }, \"\\u0411\\u0443\\u0434\\u044C\\u0442\\u0435 \\u043F\\u0435\\u0440\\u0432\\u044B\\u043C \\u043A\\u0442\\u043E \\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\"));\r\n    }\r\n    return react_1.default.createElement(GenericComments_1.GenericComments, { data: data });\r\n}\r\nexports.ModalCommentsList = ModalCommentsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/ModalCard/ModalCommentsList/ModalCommentsList.tsx?");

/***/ })

})