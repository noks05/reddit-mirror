webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Comments/Comments.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Comments/Comments.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar comments_less_1 = __importDefault(__webpack_require__(/*! ./comments.less */ \"./src/shared/CardsList/Card/Comments/comments.less\"));\r\nvar BoxComments_1 = __webpack_require__(/*! ./BoxComments */ \"./src/shared/CardsList/Card/Comments/BoxComments/index.ts\");\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.tsx\");\r\nvar useChangePadding_1 = __webpack_require__(/*! ../../../../hooks/useChangePadding */ \"./src/hooks/useChangePadding.tsx\");\r\nvar BtnActiveComments_1 = __webpack_require__(/*! ./BtnActiveComments */ \"./src/shared/CardsList/Card/Comments/BtnActiveComments/index.ts\");\r\nfunction Comments(_a) {\r\n    var postId = _a.postId, subreddit = _a.subreddit;\r\n    var _b = (0, react_1.useState)(false), isActive = _b[0], setIsActive = _b[1];\r\n    var refBtn = (0, react_1.useRef)(null);\r\n    var _c = (0, react_1.useState)(false), isMore = _c[0], setIsMore = _c[1];\r\n    var data = (0, useCommentsData_1.useCommentsData)(postId, subreddit)[0];\r\n    (0, useChangePadding_1.useChangePadding)(refBtn.current, isActive, isMore, data);\r\n    // data = [...data, ...data, ...data];\r\n    return (react_1.default.createElement(\"div\", { className: comments_less_1.default.container, ref: refBtn },\r\n        react_1.default.createElement(BtnActiveComments_1.BtnActiveComments, { data: data, isActive: isActive, setIsMore: setIsMore, setIsActive: setIsActive }),\r\n        isActive && (react_1.default.createElement(BoxComments_1.BoxComments, { data: data, isActive: isActive, setIsActive: setIsActive, isMore: isMore, setIsMore: setIsMore }))));\r\n}\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Comments/Comments.tsx?");

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