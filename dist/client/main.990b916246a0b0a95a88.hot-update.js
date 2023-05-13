webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/MenuDropdownList/MenuDropdownList.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuDropdownList/MenuDropdownList.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuDropdownList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../../utils/react/GenericList */ \"./src/utils/react/GenericList/index.ts\");\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar menudropdownlist_less_1 = __importDefault(__webpack_require__(/*! ./menudropdownlist.less */ \"./src/shared/CardsList/Card/Menu/MenuDropdownList/menudropdownlist.less\"));\r\nfunction MenuDropdownList(_a) {\r\n    var items = _a.items, coordinates = _a.coordinates;\r\n    if (typeof window === \"undefined\")\r\n        return null;\r\n    var portalRoot = document.getElementById(\"portal-root\");\r\n    if (!portalRoot)\r\n        return null;\r\n    var positionDropdown = {\r\n        top: coordinates.top,\r\n        left: coordinates.left,\r\n    };\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: menudropdownlist_less_1.default.dropdown, style: positionDropdown },\r\n        react_1.default.createElement(\"ul\", { className: menudropdownlist_less_1.default.menuItemsList },\r\n            react_1.default.createElement(GenericList_1.GenericList, { As: \"li\", data: items, userClass: menudropdownlist_less_1.default.menuItem, classDesktop: menudropdownlist_less_1.default.desktop })),\r\n        react_1.default.createElement(\"button\", { className: menudropdownlist_less_1.default.closeButton }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")), portalRoot);\r\n}\r\nexports.MenuDropdownList = MenuDropdownList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuDropdownList/MenuDropdownList.tsx?");

/***/ })

})