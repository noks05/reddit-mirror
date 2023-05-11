webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BoxComments/ListComments/ResponseFormComments/responseformcomments.less":
false,

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/BoxFormReasponse.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/BoxFormReasponse.tsx ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BoxFormReasponse = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar boxformreasponse_less_1 = __importDefault(__webpack_require__(/*! ./boxformreasponse.less */ \"./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less\"));\r\nfunction BoxFormReasponse() {\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"button\", { type: \"button\", className: boxformreasponse_less_1.default.button, onClick: function () {\r\n                setIsForm(!isForm);\r\n            } },\r\n            react_1.default.createElement(Icon, { name: EIcons.comments, color: EColors.grey99, size: 14 }),\r\n            react_1.default.createElement(Break, { size: 8 }),\r\n            react_1.default.createElement(Text, { size: 14, color: EColors.grey99, userClass: boxformreasponse_less_1.default.textBtn }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\r\n        isForm && (react_1.default.createElement(ResponseFormComments, { nameAutor: comment.data.author }))));\r\n}\r\nexports.BoxFormReasponse = BoxFormReasponse;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/BoxFormReasponse.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less":
/*!********************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../../../../node_modules/less-loader/dist/cjs.js!./boxformreasponse.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../../../../node_modules/less-loader/dist/cjs.js!./boxformreasponse.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less\",\n      function () {\n        content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../../../../node_modules/less-loader/dist/cjs.js!./boxformreasponse.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/boxformreasponse.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/index.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/index.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./BoxFormReasponse */ \"./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/BoxFormReasponse.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/Comment.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/Comment.tsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar comment_less_1 = __importDefault(__webpack_require__(/*! ./comment.less */ \"./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/comment.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar commentsContext_1 = __webpack_require__(/*! ../../../../../../context/commentsContext */ \"./src/shared/context/commentsContext.tsx\");\r\nvar useChangePadding_1 = __webpack_require__(/*! ../../../../../../../hooks/useChangePadding */ \"./src/hooks/useChangePadding.tsx\");\r\nvar BoxFormReasponse_1 = __webpack_require__(/*! ./BoxFormReasponse */ \"./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/BoxFormReasponse/index.ts\");\r\nfunction Comment(_a) {\r\n    var comment = _a.comment;\r\n    var _b = (0, react_1.useState)(false), isForm = _b[0], setIsForm = _b[1];\r\n    var _c = (0, react_1.useContext)(commentsContext_1.commentsContext), data = _c.data, refBtnCurrent = _c.refBtnCurrent, isActive = _c.isActive;\r\n    (0, useChangePadding_1.useChangePadding)(data, refBtnCurrent, isActive, isForm);\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: comment_less_1.default.user },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.anon, size: 20 }),\r\n            react_1.default.createElement(Break_1.Break, { size: 8 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.orange }, comment.data.author)),\r\n        react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.black, As: \"p\", userClass: [comment_less_1.default.lineHeight24, comment_less_1.default.textBody].join(\" \") }, comment.data.selftext),\r\n        react_1.default.createElement(BoxFormReasponse_1.BoxFormReasponse, null)));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/ResponseFormComments/ResponseFormComments.tsx":
false,

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/ResponseFormComments/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/ResponseFormComments/responseformcomments.less":
false

})