webpackHotUpdate("main",{

/***/ "./src/hooks/useUserData.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useUserData.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token)\r\n            return;\r\n        //@ts-ignore\r\n        dispatch((0, actions_1.meRequestAsync)());\r\n    }, [token]);\r\n    return { data: data, loading: loading };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.tsx?");

/***/ })

})