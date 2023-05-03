webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/BtnActiveComments/BtnActiveComments.tsx":
/*!************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BtnActiveComments/BtnActiveComments.tsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BtnActiveComments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar btnactivecomments_less_1 = __importDefault(__webpack_require__(/*! ./btnactivecomments.less */ \"./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nfunction openComments(e) {\r\n    setIsActive(!isActive);\r\n    setIsMore(false);\r\n}\r\nfunction BtnActiveComments(_a) {\r\n    var data = _a.data, refBtn = _a.refBtn, isActive = _a.isActive, setIsActive = _a.setIsActive, setIsMore = _a.setIsMore;\r\n    return (react_1.default.createElement(\"button\", { type: \"button\", className: data.length\r\n            ? btnactivecomments_less_1.default.button\r\n            : [btnactivecomments_less_1.default.button, btnactivecomments_less_1.default.buttonOff].join(\" \"), onClick: function (e) { return openComments(e); }, ref: refBtn },\r\n        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comments, size: 14, As: \"div\", color: isActive ? types_global_1.EColors.orange : types_global_1.EColors.grey99 }),\r\n        react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n        react_1.default.createElement(Text_1.Text, { size: 14, color: isActive ? types_global_1.EColors.orange : types_global_1.EColors.grey99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\")));\r\n}\r\nexports.BtnActiveComments = BtnActiveComments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BtnActiveComments/BtnActiveComments.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../node_modules/less-loader/dist/cjs.js!./btnactivecomments.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../node_modules/less-loader/dist/cjs.js!./btnactivecomments.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less\",\n      function () {\n        content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../node_modules/less-loader/dist/cjs.js!./btnactivecomments.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BtnActiveComments/btnactivecomments.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/BtnActiveComments/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/BtnActiveComments/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./BtnActiveComments */ \"./src/shared/CardsList/Card/Comments/BtnActiveComments/BtnActiveComments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/BtnActiveComments/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Comments/Comments.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/Comments.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar comments_less_1 = __importDefault(__webpack_require__(/*! ./comments.less */ \"./src/shared/CardsList/Card/Comments/comments.less\"));\r\nvar BoxComments_1 = __webpack_require__(/*! ./BoxComments */ \"./src/shared/CardsList/Card/Comments/BoxComments/index.ts\");\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.tsx\");\r\nvar useChangePadding_1 = __webpack_require__(/*! ../../../../hooks/useChangePadding */ \"./src/hooks/useChangePadding.tsx\");\r\nvar BtnActiveComments_1 = __webpack_require__(/*! ./BtnActiveComments */ \"./src/shared/CardsList/Card/Comments/BtnActiveComments/index.ts\");\r\nfunction Comments(_a) {\r\n    var postId = _a.postId, subreddit = _a.subreddit;\r\n    var _b = (0, react_1.useState)(false), isActive = _b[0], setIsActive = _b[1];\r\n    var refBtn = (0, react_1.useRef)(null);\r\n    var _c = (0, react_1.useState)(false), isMore = _c[0], setIsMore = _c[1];\r\n    var data = (0, useCommentsData_1.useCommentsData)(postId, subreddit)[0];\r\n    (0, useChangePadding_1.useChangePadding)(refBtn.current, isActive, isMore, data);\r\n    // data = [...data, ...data, ...data];\r\n    return (react_1.default.createElement(\"div\", { className: comments_less_1.default.container, ref: refBtn },\r\n        react_1.default.createElement(BtnActiveComments_1.BtnActiveComments, { data: data, isActive: isActive, setIsMore: setIsMore, setIsActive: setIsActive },\r\n            react_1.default.createElement(BtnActiveComments_1.BtnActiveComments, null),\r\n            isActive && (react_1.default.createElement(BoxComments_1.BoxComments, { data: data, isActive: isActive, setIsActive: setIsActive, isMore: isMore, setIsMore: setIsMore })))));\r\n}\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/Comments.tsx?");

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