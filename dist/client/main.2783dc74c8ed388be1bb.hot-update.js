webpackHotUpdate("main",{

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/store/store.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch((0, exports.meRequest)());\r\n    axios_1.default\r\n        .get(\"https://oauth.reddit.com/api/v1/me\", {\r\n        headers: { Authorization: \"bearer \".concat(getState().token) },\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch((0, exports.meRequestError)(String(error)));\r\n    });\r\n}; };\r\nexports.meRequestAsync = meRequestAsync;\r\nvar saveToken = function () { return function (dispatch) {\r\n    function getToken() {\r\n        var checkToken = typeof window !== undefined &&\r\n            window.__token__ !== \"undefined\" &&\r\n            window.__token__;\r\n        var resp = checkToken || localStorage.getItem(\"token\");\r\n        return resp;\r\n    }\r\n    var token = getToken();\r\n    if (token) {\r\n        dispatch((0, store_1.setToken)(token));\r\n        localStorage.setItem(\"token\", token);\r\n    }\r\n}; };\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ })

})