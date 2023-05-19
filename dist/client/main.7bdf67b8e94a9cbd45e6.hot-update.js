webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.tsx":
/*!************************************!*\
  !*** ./src/hooks/usePostsData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction usePostsData() {\r\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) {\r\n        return state.token;\r\n    });\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token)\r\n            return;\r\n        axios_1.default\r\n            .get(\"https://oauth.reddit.com/best.json?sr_detail=true\", {\r\n            headers: { Authorization: \"bearer \".concat(token) },\r\n        })\r\n            .then(function (resp) {\r\n            var postsData = resp.data.data.children;\r\n            // console.log(resp.data.data.children);\r\n            setData({ posts: postsData });\r\n        })\r\n            .catch(console.log);\r\n        return function () {\r\n            setData({});\r\n        };\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.tsx?");

/***/ }),

/***/ "./src/hooks/useToken.tsx":
/*!********************************!*\
  !*** ./src/hooks/useToken.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\r\nfunction useToken(store) {\r\n    function setToken(windowToken) {\r\n        store.dispatch((0, store_1.updateToken)(windowToken));\r\n    }\r\n    (0, react_1.useEffect)(function () {\r\n        var token = localStorage.getItem(\"token\") || window.__token__;\r\n        setToken(token);\r\n        if (token) {\r\n            localStorage.setItem(\"token\", token);\r\n        }\r\n    }, []);\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.tsx?");

/***/ }),

/***/ "./src/hooks/useUserData.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useUserData.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch((0, actions_1.meRequest)());\r\n        axios_1.default\r\n            .get(\"https://oauth.reddit.com/api/v1/me\", {\r\n            headers: { Authorization: \"bearer \".concat(token) },\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            var myUserData = { name: userData.name, iconImg: userData.icon_img };\r\n            setData(myUserData);\r\n            dispatch((0, actions_1.meRequestSuccess)(myUserData));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch((0, actions_1.meRequestError)({ type: \"ME_REQUEST_ERROR\", error: error }));\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.tsx?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateToken = exports.updateComment = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\r\nvar UPDATE_COMMENT = \"UPDATE_COMMENT\";\r\nvar updateComment = function (text) { return ({\r\n    type: \"UPDATE_COMMENT\",\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar TOKEN = \"TOKEN\";\r\nvar updateToken = function (text) { return ({\r\n    type: TOKEN,\r\n    text: text,\r\n}); };\r\nexports.updateToken = updateToken;\r\nvar initialState = {\r\n    commentText: \"\",\r\n    token: \"\",\r\n    me: { loading: false },\r\n    data: {},\r\n};\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case TOKEN:\r\n            return __assign(__assign({}, state), { token: action.text });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})