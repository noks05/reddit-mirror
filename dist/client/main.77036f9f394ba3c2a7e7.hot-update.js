webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"./node_modules/@redux-devtools/extension/lib/esm/index.js\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\r\n__webpack_require__(/*! ./shared/main.global.less */ \"./src/shared/main.global.less\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.tsx\");\r\nvar logger = function (store) { return function (next) { return function (action) {\r\n    next(action);\r\n}; }; };\r\nvar store = (0, redux_1.legacy_createStore)(\r\n// @ts-ignore\r\nstore_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(logger)));\r\nfunction AppComponent() {\r\n    (0, useToken_1.useToken)(store);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardsList_1.CardsList, null)))))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

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

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar textcontent_less_1 = __importDefault(__webpack_require__(/*! ./textcontent.less */ \"./src/shared/CardsList/Card/TextContent/textcontent.less\"));\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar TitleCardContainer_1 = __webpack_require__(/*! ./TitleCardContainer */ \"./src/shared/CardsList/Card/TextContent/TitleCardContainer/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"./node_modules/@redux-devtools/extension/lib/esm/index.js\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar store_1 = __webpack_require__(/*! ../../../../store/store */ \"./src/store/store.ts\");\r\nvar store = (0, redux_1.legacy_createStore)(\r\n// @ts-ignore\r\nstore_1.rootReducer, (0, extension_1.composeWithDevTools)());\r\nfunction TextContent(_a) {\r\n    var post = _a.post;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_less_1.default.textContent },\r\n        react_1.default.createElement(MetaData_1.MetaData, { avatar: post.sr_detail.icon_img, name: post.author }),\r\n        react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n            react_1.default.createElement(TitleCardContainer_1.TitleCardContainer, { post: post }))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateToken = exports.updateComment = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\r\nvar UPDATE_COMMENT = \"UPDATE_COMMENT\";\r\nvar updateComment = function (text) { return ({\r\n    type: \"UPDATE_COMMENT\",\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar TOKEN = \"TOKEN\";\r\nvar updateToken = function (text) { return ({\r\n    type: TOKEN,\r\n    text: text,\r\n}); };\r\nexports.updateToken = updateToken;\r\nvar initialState = {\r\n    commentText: \"\",\r\n    token: \"\",\r\n    me: { loading: false },\r\n};\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case TOKEN:\r\n            return __assign(__assign({}, state), { token: action.text });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ })

})