webpackHotUpdate("main",{

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar icon_less_1 = __importDefault(__webpack_require__(/*! ./icon.less */ \"./src/shared/Icon/icon.less\"));\r\nvar types_global_1 = __webpack_require__(/*! ../types.global */ \"./src/shared/types.global.ts\");\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\r\nvar allIcons = {\r\n    comments: react_1.default.createElement(icons_1.CommentsIcon, null),\r\n    save: react_1.default.createElement(icons_1.SaveIcon, null),\r\n    share: react_1.default.createElement(icons_1.ShareIcon, null),\r\n    warning: react_1.default.createElement(icons_1.WarningIcon, null),\r\n    close: react_1.default.createElement(icons_1.CloseIcon, null),\r\n    menu: react_1.default.createElement(icons_1.MenuIcon, null),\r\n};\r\nfunction Icon(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? \"span\" : _d, name = props.name, size = props.size, mobileSize = props.mobileSize, tableSize = props.tableSize, desktopSize = props.desktopSize, _e = props.color, color = _e === void 0 ? types_global_1.EColors.greyEC : _e;\r\n    var classes = (0, classnames_1.default)(icon_less_1.default[\"s\".concat(size)], icon_less_1.default[color], (_a = {}, _a[icon_less_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[icon_less_1.default[\"t\".concat(tableSize)]] = tableSize, _b), (_c = {}, _c[icon_less_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c));\r\n    return;\r\n    react_1.default.createElement(As, { className: classes }, allIcons[name]);\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ })

})