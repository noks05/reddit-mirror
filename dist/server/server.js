/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"@redux-devtools/extension\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar store_1 = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.tsx\");\r\n__webpack_require__(/*! ./shared/main.global.less */ \"./src/shared/main.global.less\");\r\nvar store = (0, redux_1.legacy_createStore)(\r\n// @ts-ignore\r\nstore_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    (0, useToken_1.useToken)(store);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardsList_1.CardsList, null)))))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useCommentsData.tsx":
/*!***************************************!*\
  !*** ./src/hooks/useCommentsData.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction useCommentsData(postId, subreddit) {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        axios_1.default\r\n            .get(\"http://api.reddit.com/r/\".concat(subreddit, \"/comments/\").concat(postId))\r\n            .then(function (resp) {\r\n            var commentsData = resp.data[1].data.children;\r\n            setData(commentsData);\r\n        })\r\n            .catch(function (e) {\r\n            setData([]);\r\n            console.log(e);\r\n        });\r\n        return function () {\r\n            setData([]);\r\n        };\r\n    }, [postId]);\r\n    return [data];\r\n}\r\nexports.useCommentsData = useCommentsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.tsx?");

/***/ }),

/***/ "./src/hooks/useFocusInput.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useFocusInput.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useFocusInput = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useFocusInput(inputRef) {\r\n    (0, react_1.useEffect)(function () {\r\n        var _a;\r\n        if (inputRef) {\r\n            var inputHtmlElem = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(\"textarea\");\r\n            if (!inputHtmlElem)\r\n                return;\r\n            inputHtmlElem.focus();\r\n            inputHtmlElem.selectionStart = inputHtmlElem.value.length;\r\n        }\r\n    }, []);\r\n}\r\nexports.useFocusInput = useFocusInput;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useFocusInput.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.tsx":
/*!************************************!*\
  !*** ./src/hooks/usePostsData.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction usePostsData() {\r\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) {\r\n        return state.token;\r\n    });\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token)\r\n            return;\r\n        axios_1.default\r\n            .get(\"https://oauth.reddit.com/best.json?sr_detail=true\", {\r\n            headers: { Authorization: \"bearer \".concat(token) },\r\n        })\r\n            .then(function (resp) {\r\n            var postsData = resp.data.data.children;\r\n            // console.log(resp.data.data.children);\r\n            setData({ posts: postsData });\r\n        })\r\n            .catch(console.log);\r\n        return function () {\r\n            setData({});\r\n        };\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.tsx?");

/***/ }),

/***/ "./src/hooks/useToken.tsx":
/*!********************************!*\
  !*** ./src/hooks/useToken.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useToken(store) {\r\n    (0, react_1.useEffect)(function () {\r\n        store.dispatch((0, actions_1.saveToken)());\r\n    }, []);\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.tsx?");

/***/ }),

/***/ "./src/hooks/useUserData.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useUserData.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch((0, actions_1.meRequestAsync)());\r\n    }, [token]);\r\n    return { data: data, loading: loading };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.tsx?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Reddit</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script>\\n      window.__token__ = '\".concat(token, \"';\\n    </script>\\n    <style>\\n      // #portal-root{\\n      //   position: absolute;\\n      // }\\n    </style>\\n</head>\\n<body>\\n    <div id=\\\"react-root\\\">\").concat(content, \"</div>\\n    <div id=\\\"portal-root\\\"></div>\\n</body>\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_tsx_1 = __webpack_require__(/*! ../App.tsx */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = (0, express_1.default)();\r\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\r\napp.get(\"/\", function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)())));\r\n});\r\napp.get(\"/auth\", function (req, res) {\r\n    axios_1.default\r\n        .post(\"https://www.reddit.com/api/v1/access_token\", \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\r\n        auth: {\r\n            username: '1zvLRFTNIfKsrbNLPmr0UA',\r\n            password: \"_WPwoO-K2KglGiaESEFzyiz_-K1Dog\",\r\n        },\r\n        headers: { \"Content-Type\": \"application/x-www-form-urlencoded\" },\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), data[\"access_token\"]));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"Server started on http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar break_less_1 = __importDefault(__webpack_require__(/*! ./break.less */ \"./src/shared/Break/break.less\"));\r\nvar types_global_1 = __webpack_require__(/*! ../types.global */ \"./src/shared/types.global.ts\");\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e, _f, _g;\r\n    var _h = props.As, As = _h === void 0 ? \"span\" : _h, size = props.size, topSize = props.topSize, mobileSize = props.mobileSize, topMobileSize = props.topMobileSize, tableSize = props.tableSize, topTableSize = props.topTableSize, desktopSize = props.desktopSize, topDesktopSize = props.topDesktopSize, _j = props.color, color = _j === void 0 ? types_global_1.EColors.white : _j;\r\n    var classes = (0, classnames_1.default)(break_less_1.default[\"s\".concat(size)], break_less_1.default[color], (_a = {}, _a[break_less_1.default[\"m\".concat(topSize)]] = topSize, _a), (_b = {}, _b[break_less_1.default[\"m\".concat(mobileSize)]] = mobileSize, _b), (_c = {}, _c[break_less_1.default[\"m\".concat(topMobileSize)]] = topMobileSize, _c), (_d = {}, _d[break_less_1.default[\"t\".concat(tableSize)]] = tableSize, _d), (_e = {}, _e[break_less_1.default[\"t\".concat(topTableSize)]] = topTableSize, _e), (_f = {}, _f[break_less_1.default[\"d\".concat(desktopSize)]] = desktopSize, _f), (_g = {}, _g[break_less_1.default[\"d\".concat(topDesktopSize)]] = topDesktopSize, _g));\r\n    return (react_1.default.createElement(As, { className: classes }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.less":
/*!*************************************!*\
  !*** ./src/shared/Break/break.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--mdIAL\",\n\t\"s8\": \"break__s8--uKILp\",\n\t\"s12\": \"break__s12--2nnLj\",\n\t\"s16\": \"break__s16--2aAdU\",\n\t\"s20\": \"break__s20--1TD5c\",\n\t\"s22\": \"break__s22--28yAL\",\n\t\"inline\": \"break__inline--10BUW\",\n\t\"top\": \"break__top--H31po\",\n\t\"mobile_s4\": \"break__mobile_s4--1VaPy\",\n\t\"mobile_s8\": \"break__mobile_s8--1BQTI\",\n\t\"mobile_s12\": \"break__mobile_s12--MAF66\",\n\t\"mobile_s16\": \"break__mobile_s16--1qdeZ\",\n\t\"mobile_s20\": \"break__mobile_s20--3NArg\",\n\t\"tablet_s4\": \"break__tablet_s4--30cm0\",\n\t\"tablet_s8\": \"break__tablet_s8--1ufPQ\",\n\t\"tablet_s12\": \"break__tablet_s12--kaf3T\",\n\t\"tablet_s16\": \"break__tablet_s16--3Jm3t\",\n\t\"tablet_s20\": \"break__tablet_s20--2KICY\",\n\t\"desktop_s4\": \"break__desktop_s4--17AIS\",\n\t\"desktop_s8\": \"break__desktop_s8--3fjuG\",\n\t\"desktop_s12\": \"break__desktop_s12--2OECw\",\n\t\"desktop_s16\": \"break__desktop_s16--2CR2t\",\n\t\"desktop_s20\": \"break__desktop_s20--1WoKN\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.less?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_less_1 = __importDefault(__webpack_require__(/*! ./card.less */ \"./src/shared/CardsList/Card/card.less\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\r\nfunction Card(_a) {\r\n    var post = _a.post;\r\n    return (react_1.default.createElement(\"li\", { className: card_less_1.default.card, id: post.id },\r\n        react_1.default.createElement(TextContent_1.TextContent, { post: post }),\r\n        (post.url.includes(\".jpg\") || post.url.includes(\".png\")) && (react_1.default.createElement(Preview_1.Preview, { img: post.url })),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, { score: post.score })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/Actions.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/Actions.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Actions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actions_less_1 = __importDefault(__webpack_require__(/*! ./actions.less */ \"./src/shared/CardsList/Card/Controls/Actions/actions.less\"));\r\nfunction Actions() {\r\n    return (react_1.default.createElement(\"div\", { className: actions_less_1.default.actions },\r\n        react_1.default.createElement(\"button\", { className: actions_less_1.default.shareButton },\r\n            react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\r\n        react_1.default.createElement(\"button\", { className: actions_less_1.default.saveButton },\r\n            react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" })))));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/actions.less":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/actions.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"actions__shareButton--3x_2F\",\n\t\"saveButton\": \"actions__saveButton--7zGRV\",\n\t\"actions\": \"actions__actions--36r_l\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/actions.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/Controls/Actions/Actions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CarmaCounter/CarmaCounter.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CarmaCounter/CarmaCounter.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar carmacounter_less_1 = __importDefault(__webpack_require__(/*! ./carmacounter.less */ \"./src/shared/CardsList/Card/Controls/CarmaCounter/carmacounter.less\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../glop/Text */ \"./src/shared/glop/Text/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../glop/Icon */ \"./src/shared/glop/Icon/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../../types.global */ \"./src/shared/types.global.ts\");\r\nfunction CarmaCounter(_a) {\r\n    var score = _a.score, _b = _a.classUser, classUser = _b === void 0 ? \"\" : _b;\r\n    return (react_1.default.createElement(\"div\", { className: [carmacounter_less_1.default.karmaCounter, classUser].join(\" \") },\r\n        react_1.default.createElement(\"button\", { className: carmacounter_less_1.default.up },\r\n            react_1.default.createElement(Icon_1.Icon, { name: \"up\", userClass: carmacounter_less_1.default.iconUp, color: types_global_1.EColors.greyD9 })),\r\n        react_1.default.createElement(Text_1.Text, { size: 12, userClass: carmacounter_less_1.default.karmaValue }, score),\r\n        react_1.default.createElement(\"button\", { className: carmacounter_less_1.default.down },\r\n            react_1.default.createElement(Icon_1.Icon, { name: \"down\", userClass: carmacounter_less_1.default.iconDown, color: types_global_1.EColors.greyD9 }))));\r\n}\r\nexports.CarmaCounter = CarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CarmaCounter/CarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CarmaCounter/carmacounter.less":
/*!***************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CarmaCounter/carmacounter.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaValue\": \"carmacounter__karmaValue--3C5Vm\",\n\t\"iconUp\": \"carmacounter__iconUp--O20o8\",\n\t\"iconDown\": \"carmacounter__iconDown--3qNmG\",\n\t\"down\": \"carmacounter__down--3fI6t\",\n\t\"karmaCounter\": \"carmacounter__karmaCounter--i0FKd\",\n\t\"up\": \"carmacounter__up--33EKN\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CarmaCounter/carmacounter.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CarmaCounter/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CarmaCounter/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CarmaCounter */ \"./src/shared/CardsList/Card/Controls/CarmaCounter/CarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsbutton_less_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.less */ \"./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.less\"));\r\nfunction CommentsButton() {\r\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_less_1.default.commentsButton },\r\n        react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#999999\" })),\r\n        react_1.default.createElement(\"span\", { className: commentsbutton_less_1.default.commentsNumber }, \"23\")));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.less":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--OVr6M\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--34Qr-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Actions_1 = __webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/Controls/Actions/index.ts\");\r\nvar CarmaCounter_1 = __webpack_require__(/*! ./CarmaCounter */ \"./src/shared/CardsList/Card/Controls/CarmaCounter/index.ts\");\r\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Controls/CommentsButton/index.ts\");\r\nvar controls_less_1 = __importDefault(__webpack_require__(/*! ./controls.less */ \"./src/shared/CardsList/Card/Controls/controls.less\"));\r\nfunction Controls(_a) {\r\n    var score = _a.score;\r\n    return (react_1.default.createElement(\"div\", { className: controls_less_1.default.controls },\r\n        react_1.default.createElement(CarmaCounter_1.CarmaCounter, { score: score }),\r\n        react_1.default.createElement(CommentsButton_1.CommentsButton, null),\r\n        react_1.default.createElement(Actions_1.Actions, null)));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.less":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--3otGu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar icons_1 = __webpack_require__(/*! ../../../glop/icons */ \"./src/shared/glop/icons/index.ts\");\r\nvar MenuDropdownList_1 = __webpack_require__(/*! ./MenuDropdownList */ \"./src/shared/CardsList/Card/Menu/MenuDropdownList/index.ts\");\r\nvar menu_less_1 = __importDefault(__webpack_require__(/*! ./menu.less */ \"./src/shared/CardsList/Card/Menu/menu.less\"));\r\nvar items = [\r\n    {\r\n        img: \"comments\",\r\n        text: \"Комментарии\",\r\n        desktop: true,\r\n    },\r\n    {\r\n        img: \"share\",\r\n        text: \"Поделиться\",\r\n        desktop: true,\r\n    },\r\n    {\r\n        img: \"close\",\r\n        text: \"Скрыть\",\r\n        desktop: false,\r\n    },\r\n    {\r\n        img: \"save\",\r\n        text: \"Сохранить\",\r\n        desktop: true,\r\n    },\r\n    {\r\n        img: \"warning\",\r\n        text: \"Пожаловаться\",\r\n        desktop: false,\r\n    },\r\n].map(function (obj) { return (0, generateRandomIndex_1.generateId)(obj); });\r\nfunction Menu() {\r\n    var _a = (0, react_1.useState)({ top: 0, left: 0 }), coordinates = _a[0], setСoordinates = _a[1];\r\n    function getPosition(e) {\r\n        e.stopPropagation();\r\n        var x = 0;\r\n        var y = 0;\r\n        if (e.pageX || e.pageY) {\r\n            x = e.pageX;\r\n            y = e.pageY;\r\n        }\r\n        else if (e.clientX || e.clientY) {\r\n            x =\r\n                e.clientX +\r\n                    document.body.scrollLeft +\r\n                    document.documentElement.scrollLeft;\r\n            y =\r\n                e.clientY +\r\n                    document.body.scrollTop +\r\n                    document.documentElement.scrollTop;\r\n        }\r\n        setСoordinates({ top: y, left: x });\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: menu_less_1.default.menu, onClick: function (e) { return getPosition(e); } },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_less_1.default.menuButton },\r\n                react_1.default.createElement(icons_1.MenuIcon, null)) },\r\n            react_1.default.createElement(MenuDropdownList_1.MenuDropdownList, { items: items, coordinates: coordinates }))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuDropdownList/MenuDropdownList.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuDropdownList/MenuDropdownList.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuDropdownList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar menudropdownlist_less_1 = __importDefault(__webpack_require__(/*! ./menudropdownlist.less */ \"./src/shared/CardsList/Card/Menu/MenuDropdownList/menudropdownlist.less\"));\r\nvar GenericControls_1 = __webpack_require__(/*! ../../../../../utils/react/GenericControls */ \"./src/utils/react/GenericControls/index.ts\");\r\nfunction MenuDropdownList(_a) {\r\n    var items = _a.items, coordinates = _a.coordinates;\r\n    if (typeof window === \"undefined\")\r\n        return null;\r\n    var portalRoot = document.getElementById(\"portal-root\");\r\n    if (!portalRoot)\r\n        return null;\r\n    var positionDropdown = {\r\n        top: coordinates.top,\r\n        left: coordinates.left,\r\n    };\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: menudropdownlist_less_1.default.dropdown, style: positionDropdown },\r\n        react_1.default.createElement(\"ul\", { className: menudropdownlist_less_1.default.menuItemsList },\r\n            react_1.default.createElement(GenericControls_1.GenericControls, { As: \"li\", data: items, userClass: menudropdownlist_less_1.default.menuItem, classDesktop: menudropdownlist_less_1.default.desktop })),\r\n        react_1.default.createElement(\"button\", { className: menudropdownlist_less_1.default.closeButton }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")), portalRoot);\r\n}\r\nexports.MenuDropdownList = MenuDropdownList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuDropdownList/MenuDropdownList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuDropdownList/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuDropdownList/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuDropdownList */ \"./src/shared/CardsList/Card/Menu/MenuDropdownList/MenuDropdownList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuDropdownList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuDropdownList/menudropdownlist.less":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuDropdownList/menudropdownlist.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menudropdownlist__menuItemsList--2QDP-\",\n\t\"dropdown\": \"menudropdownlist__dropdown--1jCYz\",\n\t\"menuItem\": \"menudropdownlist__menuItem--1I05i\",\n\t\"closeButton\": \"menudropdownlist__closeButton--10cif\",\n\t\"desktop\": \"menudropdownlist__desktop--3dOzv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuDropdownList/menudropdownlist.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.less":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3HgxL\",\n\t\"menuButton\": \"menu__menuButton--3BpWR\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_less_1 = __importDefault(__webpack_require__(/*! ./preview.less */ \"./src/shared/CardsList/Card/Preview/preview.less\"));\r\nfunction Preview(_a) {\r\n    var img = _a.img;\r\n    return (react_1.default.createElement(\"div\", { className: preview_less_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_less_1.default.previewImg, src: img, alt: \"preview\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.less":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--3CgtQ\",\n\t\"previewImg\": \"preview__previewImg--3TFva\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar metadata_less_1 = __importDefault(__webpack_require__(/*! ./metadata.less */ \"./src/shared/CardsList/Card/TextContent/MetaData/metadata.less\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../glop/Text */ \"./src/shared/glop/Text/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../glop/Icon */ \"./src/shared/glop/Icon/index.ts\");\r\nfunction MetaData(_a) {\r\n    var subreddit = _a.subreddit, _b = _a.avatar, avatar = _b === void 0 ? \"\" : _b, name = _a.name;\r\n    return (react_1.default.createElement(\"div\", { className: metadata_less_1.default.metaData },\r\n        subreddit && (react_1.default.createElement(react_1.default.Fragment, null,\r\n            react_1.default.createElement(Text_1.Text, { size: 14, userClass: metadata_less_1.default.subreddit }, subreddit),\r\n            react_1.default.createElement(Break_1.Break, { size: 16 }))),\r\n        react_1.default.createElement(\"div\", { className: metadata_less_1.default.userLink },\r\n            avatar.length ? (react_1.default.createElement(\"img\", { src: avatar, alt: \"avatar\", className: metadata_less_1.default.avatar })) : (react_1.default.createElement(Icon_1.Icon, { name: \"anon\", size: 20, userClass: metadata_less_1.default.avatar })),\r\n            react_1.default.createElement(\"a\", { className: metadata_less_1.default.username, href: \"#user-url\" }, name)),\r\n        react_1.default.createElement(\"span\", { className: metadata_less_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: metadata_less_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043D\\u043E \"),\r\n            \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")));\r\n}\r\nexports.MetaData = MetaData;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/MetaData/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/MetaData/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/TextContent/MetaData/MetaData.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/MetaData/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/MetaData/metadata.less":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/MetaData/metadata.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"metaData\": \"metadata__metaData--32Iht\",\n\t\"subreddit\": \"metadata__subreddit--3QXQ-\",\n\t\"publishedLabel\": \"metadata__publishedLabel--1X3sF\",\n\t\"createdAt\": \"metadata__createdAt--2cwQ6\",\n\t\"username\": \"metadata__username--19Kjx\",\n\t\"userLink\": \"metadata__userLink--127My\",\n\t\"avatar\": \"metadata__avatar--2zqS1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/MetaData/metadata.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textcontent_less_1 = __importDefault(__webpack_require__(/*! ./textcontent.less */ \"./src/shared/CardsList/Card/TextContent/textcontent.less\"));\r\nvar MetaData_1 = __webpack_require__(/*! ./MetaData */ \"./src/shared/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar TitleCardContainer_1 = __webpack_require__(/*! ./TitleCardContainer */ \"./src/shared/CardsList/Card/TextContent/TitleCardContainer/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"@redux-devtools/extension\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar store_1 = __webpack_require__(/*! ../../../../store/store */ \"./src/store/store.ts\");\r\nvar store = (0, redux_1.legacy_createStore)(\r\n// @ts-ignore\r\nstore_1.rootReducer, (0, extension_1.composeWithDevTools)());\r\nfunction TextContent(_a) {\r\n    var post = _a.post;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_less_1.default.textContent },\r\n        react_1.default.createElement(MetaData_1.MetaData, { avatar: post.sr_detail.icon_img, name: post.author }),\r\n        react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n            react_1.default.createElement(TitleCardContainer_1.TitleCardContainer, { post: post }))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TitleCard/TitleCard.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TitleCard/TitleCard.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TitleCard = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar titlecard_less_1 = __importDefault(__webpack_require__(/*! ./titlecard.less */ \"./src/shared/CardsList/Card/TextContent/TitleCard/titlecard.less\"));\r\nvar ModalCard_1 = __webpack_require__(/*! ../../../ModalCard */ \"./src/shared/CardsList/ModalCard/index.ts\");\r\nfunction TitleCard(_a) {\r\n    var post = _a.post, onClick = _a.onClick, isModalOpen = _a.isModalOpen, setIsModalOpen = _a.setIsModalOpen;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"h2\", { className: titlecard_less_1.default.title, onClick: onClick },\r\n            react_1.default.createElement(\"a\", { className: titlecard_less_1.default.postLink, href: \"#post-url\" }, post.title)),\r\n        isModalOpen && (react_1.default.createElement(ModalCard_1.ModalCard, { post: post, onClose: function () { return setIsModalOpen(false); } }))));\r\n}\r\nexports.TitleCard = TitleCard;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TitleCard/TitleCard.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TitleCard/titlecard.less":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TitleCard/titlecard.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"titlecard__title--SaVjk\",\n\t\"postLink\": \"titlecard__postLink--mUsJG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TitleCard/titlecard.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TitleCardContainer/TitleCardContainer.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TitleCardContainer/TitleCardContainer.tsx ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TitleCardContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ../../../../../store/store */ \"./src/store/store.ts\");\r\nvar TitleCard_1 = __webpack_require__(/*! ../TitleCard/TitleCard */ \"./src/shared/CardsList/Card/TextContent/TitleCard/TitleCard.tsx\");\r\nfunction TitleCardContainer(_a) {\r\n    var post = _a.post;\r\n    var _b = (0, react_1.useState)(false), isModalOpen = _b[0], setIsModalOpen = _b[1];\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    function onClick() {\r\n        dispatch((0, store_1.updateComment)(\"\".concat(post.author, \", \")));\r\n        setIsModalOpen(true);\r\n    }\r\n    return (react_1.default.createElement(TitleCard_1.TitleCard, { post: post, onClick: onClick, isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen }));\r\n}\r\nexports.TitleCardContainer = TitleCardContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TitleCardContainer/TitleCardContainer.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TitleCardContainer/index.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TitleCardContainer/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TitleCardContainer */ \"./src/shared/CardsList/Card/TextContent/TitleCardContainer/TitleCardContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TitleCardContainer/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.less":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textcontent.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--EDc9_\",\n\t\"preview\": \"textcontent__preview--3wLQ7\",\n\t\"previewImg\": \"textcontent__previewImg--2EM5A\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textcontent.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/Card/card.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--3Kg9c\",\n\t\"textContent\": \"card__textContent--2lcGg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar cardslist_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\"));\r\nvar postsContext_1 = __webpack_require__(/*! ../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar cardContext_1 = __webpack_require__(/*! ../context/cardContext */ \"./src/shared/context/cardContext.tsx\");\r\nfunction CardsList() {\r\n    var data = (0, react_1.useContext)(postsContext_1.postsContext);\r\n    var Provider = cardContext_1.cardContext.Provider;\r\n    var posts = data.posts;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"ul\", { className: cardslist_less_1.default.cardsList }, posts &&\r\n            posts.map(function (p) { return (react_1.default.createElement(Provider, { value: p, key: p.data.id },\r\n                react_1.default.createElement(Card_1.Card, { post: p.data }))); }))));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Comment/Comment.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/Comment/Comment.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar comment_less_1 = __importDefault(__webpack_require__(/*! ./comment.less */ \"./src/shared/CardsList/Comment/comment.less\"));\r\nvar FormComments_1 = __webpack_require__(/*! ../FormComments */ \"./src/shared/CardsList/FormComments/index.ts\");\r\nvar GenericControls_1 = __webpack_require__(/*! ../../../utils/react/GenericControls */ \"./src/utils/react/GenericControls/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../types.global */ \"./src/shared/types.global.ts\");\r\nvar MetaData_1 = __webpack_require__(/*! ../Card/TextContent/MetaData */ \"./src/shared/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../glop/Text */ \"./src/shared/glop/Text/index.ts\");\r\nfunction Comment(_a) {\r\n    var author = _a.author, subreddit = _a.subreddit, body = _a.body, data = _a.data, isForm = _a.isForm;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(MetaData_1.MetaData, { name: author, subreddit: subreddit }),\r\n        react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.black, As: \"p\", userClass: [comment_less_1.default.lineHeight24, comment_less_1.default.textBody].join(\" \") }, body),\r\n        data.length !== 0 && (react_1.default.createElement(\"ul\", { className: comment_less_1.default.list },\r\n            react_1.default.createElement(GenericControls_1.GenericControls, { As: \"li\", data: data, userClass: comment_less_1.default.item }))),\r\n        isForm && react_1.default.createElement(FormComments_1.FormComments, null)));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Comment/comment.less":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Comment/comment.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"user\": \"comment__user--3evQp\",\n\t\"textBody\": \"comment__textBody--vGt4J\",\n\t\"list\": \"comment__list--24Ubg\",\n\t\"item\": \"comment__item--1aPKP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Comment/comment.less?");

/***/ }),

/***/ "./src/shared/CardsList/CommentContainer/CommentContainer.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/CommentContainer/CommentContainer.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ../../../store/store */ \"./src/store/store.ts\");\r\nvar Comment_1 = __webpack_require__(/*! ../Comment/Comment */ \"./src/shared/CardsList/Comment/Comment.tsx\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nfunction CommentContainer(_a) {\r\n    var comment = _a.comment, controls = _a.controls;\r\n    var _b = (0, react_1.useState)(false), isForm = _b[0], setIsForm = _b[1];\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var data = [\r\n        {\r\n            img: \"comments\",\r\n            text: \"Ответить\",\r\n            desktop: true,\r\n            onClick: function (e) {\r\n                e.stopPropagation();\r\n                setIsForm(!isForm);\r\n                dispatch((0, store_1.updateComment)(\"\".concat(comment.data.author, \", \")));\r\n            },\r\n        },\r\n        {\r\n            img: \"share\",\r\n            text: \"Поделиться\",\r\n            desktop: true,\r\n        },\r\n        {\r\n            img: \"warning\",\r\n            text: \"Пожаловаться\",\r\n            desktop: true,\r\n        },\r\n        {\r\n            img: \"close\",\r\n            text: \"Скрыть\",\r\n            desktop: false,\r\n        },\r\n        {\r\n            img: \"save\",\r\n            text: \"Сохранить\",\r\n            desktop: true,\r\n        },\r\n    ].map(function (obj) { return (0, generateRandomIndex_1.generateId)(obj); });\r\n    var filteredData = [];\r\n    if (controls) {\r\n        filteredData = controls\r\n            .map(function (str) {\r\n            return data.find(function (obj) { return obj.text === str; });\r\n        })\r\n            .filter(function (el) { return el !== undefined; });\r\n    }\r\n    return (react_1.default.createElement(Comment_1.Comment, { author: comment.data.author, subreddit: comment.data.subreddit, body: comment.data.body, data: filteredData, isForm: isForm }));\r\n}\r\nexports.CommentContainer = CommentContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CommentContainer/CommentContainer.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CommentContainer/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/CommentContainer/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentContainer */ \"./src/shared/CardsList/CommentContainer/CommentContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CommentContainer/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/FormComments/FormComments.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/FormComments/FormComments.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FormComments = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar formcomments_less_1 = __importDefault(__webpack_require__(/*! ./formcomments.less */ \"./src/shared/CardsList/FormComments/formcomments.less\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ../../../store/store */ \"./src/store/store.ts\");\r\nvar useFocusInput_1 = __webpack_require__(/*! ../../../hooks/useFocusInput */ \"./src/hooks/useFocusInput.tsx\");\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\r\nvar ToolsBar_1 = __webpack_require__(/*! ./ToolsBar */ \"./src/shared/CardsList/FormComments/ToolsBar/index.ts\");\r\nfunction FormComments() {\r\n    var inputValue = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var inputRef = (0, react_1.useRef)(null);\r\n    var inconsArr = [\r\n        \"arrows\",\r\n        \"picture\",\r\n        \"file\",\r\n        \"download\",\r\n        \"avatar\",\r\n        \"reload\",\r\n        \"link\",\r\n        \"pen\",\r\n        \"underline\",\r\n        \"pdf\",\r\n    ];\r\n    (0, useFocusInput_1.useFocusInput)(inputRef);\r\n    var _a = (0, react_hook_form_1.useForm)(), watch = _a.watch, register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;\r\n    var onSubmit = function (data) {\r\n        console.log(\"Ваш комментарий отправлен!\\n\", \"текст: \", data.comment);\r\n    };\r\n    errors.comment && console.log(errors.comment.message);\r\n    (0, react_1.useEffect)(function () {\r\n        var subscription = watch(function (value) {\r\n            return dispatch((0, store_1.updateComment)(value.comment));\r\n        });\r\n        return function () { return subscription.unsubscribe(); };\r\n    }, [watch]);\r\n    return (react_1.default.createElement(\"form\", { className: formcomments_less_1.default.container, action: \"\", onSubmit: handleSubmit(onSubmit), ref: inputRef },\r\n        react_1.default.createElement(\"textarea\", __assign({ className: formcomments_less_1.default.input, value: inputValue }, register(\"comment\", {\r\n            required: \"Ошибка!\",\r\n            maxLength: 1000,\r\n        }), { \"aria-invalid\": errors.comment ? true : undefined })),\r\n        react_1.default.createElement(ToolsBar_1.ToolsBar, { icons: inconsArr })));\r\n}\r\nexports.FormComments = FormComments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/FormComments/FormComments.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/FormComments/ToolsBar/ToolsBar.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/FormComments/ToolsBar/ToolsBar.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ToolsBar = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar toolsbar_less_1 = __importDefault(__webpack_require__(/*! ./toolsbar.less */ \"./src/shared/CardsList/FormComments/ToolsBar/toolsbar.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../glop/Icon */ \"./src/shared/glop/Icon/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../glop/Text */ \"./src/shared/glop/Text/index.ts\");\r\nfunction ToolsBar(_a) {\r\n    var icons = _a.icons;\r\n    return (react_1.default.createElement(\"div\", { className: toolsbar_less_1.default.toolsBox },\r\n        react_1.default.createElement(\"ul\", { className: toolsbar_less_1.default.tools }, icons.map(function (icon) { return (react_1.default.createElement(\"li\", { className: toolsbar_less_1.default.itemTools, key: icon },\r\n            react_1.default.createElement(\"button\", { type: \"button\", className: toolsbar_less_1.default.tool },\r\n                react_1.default.createElement(Icon_1.Icon, { name: icon, color: types_global_1.EColors.grey99 })))); })),\r\n        react_1.default.createElement(\"button\", { className: toolsbar_less_1.default.button, type: \"submit\" },\r\n            react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.white }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n}\r\nexports.ToolsBar = ToolsBar;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/FormComments/ToolsBar/ToolsBar.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/FormComments/ToolsBar/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/FormComments/ToolsBar/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ToolsBar */ \"./src/shared/CardsList/FormComments/ToolsBar/ToolsBar.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/FormComments/ToolsBar/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/FormComments/ToolsBar/toolsbar.less":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/FormComments/ToolsBar/toolsbar.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"toolsBox\": \"toolsbar__toolsBox--3c4YA\",\n\t\"tools\": \"toolsbar__tools--RYAV0\",\n\t\"itemTools\": \"toolsbar__itemTools--HVrpS\",\n\t\"tool\": \"toolsbar__tool--68tbM\",\n\t\"button\": \"toolsbar__button--3e7M6\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/FormComments/ToolsBar/toolsbar.less?");

/***/ }),

/***/ "./src/shared/CardsList/FormComments/formcomments.less":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/FormComments/formcomments.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"formcomments__container--2_UBD\",\n\t\"input\": \"formcomments__input--1Ouzn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/FormComments/formcomments.less?");

/***/ }),

/***/ "./src/shared/CardsList/FormComments/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/FormComments/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./FormComments */ \"./src/shared/CardsList/FormComments/FormComments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/FormComments/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/ModalCard/ModalCard.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/ModalCard/ModalCard.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ModalCard = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar modalcard_less_1 = __importDefault(__webpack_require__(/*! ./modalcard.less */ \"./src/shared/CardsList/ModalCard/modalcard.less\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../glop/Icon */ \"./src/shared/glop/Icon/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../types.global */ \"./src/shared/types.global.ts\");\r\nvar CarmaCounter_1 = __webpack_require__(/*! ../Card/Controls/CarmaCounter */ \"./src/shared/CardsList/Card/Controls/CarmaCounter/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../Break */ \"./src/shared/Break/index.ts\");\r\nvar MetaData_1 = __webpack_require__(/*! ../Card/TextContent/MetaData */ \"./src/shared/CardsList/Card/TextContent/MetaData/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../glop/Text */ \"./src/shared/glop/Text/index.ts\");\r\nvar ModalCommentsList_1 = __webpack_require__(/*! ./ModalCommentsList */ \"./src/shared/CardsList/ModalCard/ModalCommentsList/index.ts\");\r\nvar Separate_1 = __webpack_require__(/*! ../../glop/Separate/Separate */ \"./src/shared/glop/Separate/Separate.tsx\");\r\nvar FormComments_1 = __webpack_require__(/*! ../FormComments */ \"./src/shared/CardsList/FormComments/index.ts\");\r\nfunction ModalCard(_a) {\r\n    var post = _a.post, onClose = _a.onClose;\r\n    if (typeof window === \"undefined\")\r\n        return null;\r\n    var portalRoot = document.getElementById(\"portal-root\");\r\n    if (!portalRoot)\r\n        return null;\r\n    var modalRef = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(e) {\r\n            var _a, _b, _c;\r\n            if (e.target instanceof Node) {\r\n                var clickOut = !((_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target));\r\n                var clickCloseBtn = (_c = (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.querySelector(\"[class^='modalcard__closeBtn--']\")) === null || _c === void 0 ? void 0 : _c.contains(e.target);\r\n                if (clickOut || clickCloseBtn) {\r\n                    onClose();\r\n                }\r\n            }\r\n        }\r\n        document.addEventListener(\"click\", handleClick);\r\n        return function () {\r\n            document.removeEventListener(\"click\", handleClick);\r\n        };\r\n    });\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: modalcard_less_1.default.wrapper },\r\n        react_1.default.createElement(\"div\", { className: modalcard_less_1.default.box, ref: modalRef },\r\n            react_1.default.createElement(\"button\", { className: modalcard_less_1.default.closeBtn },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.closeX, size: 14, color: types_global_1.EColors.greyC4, userClass: \"closeBtn\" })),\r\n            react_1.default.createElement(\"div\", { className: modalcard_less_1.default.title },\r\n                react_1.default.createElement(CarmaCounter_1.CarmaCounter, { score: post.score, classUser: modalcard_less_1.default.karmaCounter }),\r\n                react_1.default.createElement(Break_1.Break, { size: 22 }),\r\n                react_1.default.createElement(\"div\", { className: modalcard_less_1.default.textTitle },\r\n                    react_1.default.createElement(Text_1.Text, { As: \"h1\", size: 20, userClass: modalcard_less_1.default.titleTitle }, post.title),\r\n                    react_1.default.createElement(MetaData_1.MetaData, { name: post.author, avatar: post.sr_detail.icon_img, subreddit: post.subreddit }))),\r\n            react_1.default.createElement(Text_1.Text, { size: 14 }, post.sr_detail.description),\r\n            react_1.default.createElement(Separate_1.Separate, { userClass: modalcard_less_1.default.separate, color: types_global_1.EColors.greyD9 }),\r\n            react_1.default.createElement(FormComments_1.FormComments, null),\r\n            react_1.default.createElement(Separate_1.Separate, { userClass: modalcard_less_1.default.separate, color: types_global_1.EColors.greyD9 }),\r\n            react_1.default.createElement(ModalCommentsList_1.ModalCommentsList, { id: post.id, subreddit: post.subreddit }))), portalRoot);\r\n}\r\nexports.ModalCard = ModalCard;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/ModalCard/ModalCard.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/ModalCard/ModalCommentsList/ModalCommentsList.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/ModalCard/ModalCommentsList/ModalCommentsList.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ModalCommentsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ../../../glop/Text */ \"./src/shared/glop/Text/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar GenericComments_1 = __webpack_require__(/*! ../../../../utils/react/GenericComments */ \"./src/utils/react/GenericComments/index.ts\");\r\nfunction ModalCommentsList(_a) {\r\n    var id = _a.id, subreddit = _a.subreddit;\r\n    var data = (0, useCommentsData_1.useCommentsData)(id, subreddit)[0];\r\n    if (!data.length) {\r\n        return (react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.grey99 }, \"\\u0411\\u0443\\u0434\\u044C\\u0442\\u0435 \\u043F\\u0435\\u0440\\u0432\\u044B\\u043C \\u043A\\u0442\\u043E \\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\"));\r\n    }\r\n    return react_1.default.createElement(GenericComments_1.GenericComments, { data: data });\r\n}\r\nexports.ModalCommentsList = ModalCommentsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/ModalCard/ModalCommentsList/ModalCommentsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/ModalCard/ModalCommentsList/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/ModalCard/ModalCommentsList/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ModalCommentsList */ \"./src/shared/CardsList/ModalCard/ModalCommentsList/ModalCommentsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/ModalCard/ModalCommentsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/ModalCard/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/ModalCard/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ModalCard */ \"./src/shared/CardsList/ModalCard/ModalCard.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/ModalCard/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/ModalCard/modalcard.less":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/ModalCard/modalcard.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"modalcard__wrapper--ktEgc\",\n\t\"box\": \"modalcard__box--mV4SR\",\n\t\"closeBtn\": \"modalcard__closeBtn--1-ahq\",\n\t\"title\": \"modalcard__title--3RdDs\",\n\t\"textTitle\": \"modalcard__textTitle--2R_IM\",\n\t\"separate\": \"modalcard__separate--i2sB3\",\n\t\"titleTitle\": \"modalcard__titleTitle--3v3lI\",\n\t\"karmaCounter\": \"modalcard__karmaCounter--BNmsd\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/ModalCard/modalcard.less?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/cardslist.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1BDcw\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.less?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_less_1 = __importDefault(__webpack_require__(/*! ./content.less */ \"./src/shared/Content/content.less\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_less_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.less":
/*!*****************************************!*\
  !*** ./src/shared/Content/content.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--3fgq5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.less?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_less_1 = __importDefault(__webpack_require__(/*! ./dropdown.less */ \"./src/shared/Dropdown/dropdown.less\"));\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c, children = _a.children;\r\n    var _d = (0, react_1.useState)(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    (0, react_1.useEffect)(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    (0, react_1.useEffect)(function () { return (isDropdownOpen ? onOpen() : onClose()); }, [isDropdownOpen]);\r\n    function handleOpen() {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_less_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.less":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--pnhGR\",\n\t\"listContainer\": \"dropdown__listContainer--2vn0U\",\n\t\"list\": \"dropdown__list--2qzIZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.less?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nvar header_less_1 = __importDefault(__webpack_require__(/*! ./header.less */ \"./src/shared/Header/header.less\"));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_less_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_less_1 = __importDefault(__webpack_require__(/*! ./searchblock.less */ \"./src/shared/Header/SearchBlock/searchblock.less\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nfunction SearchBlock() {\r\n    var _a = (0, react_1.useContext)(userContext_1.userContext), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_less_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_less_1 = __importDefault(__webpack_require__(/*! ./userblock.less */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../glop/Icon */ \"./src/shared/glop/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../glop/Text */ \"./src/shared/glop/Text/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../types.global */ \"./src/shared/types.global.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=1zvLRFTNIfKsrbNLPmr0UA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_less_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_less_1.default.avatarBox }, avatarSrc ? (react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_less_1.default.avatarImage })) : (react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.anon, size: 50, color: types_global_1.EColors.greyD9 }))),\r\n        react_1.default.createElement(\"div\", { className: userblock_less_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            loading ? (react_1.default.createElement(Text_1.Text, { size: 16, color: types_global_1.EColors.greyC4 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? types_global_1.EColors.black : types_global_1.EColors.grey99 }, username || \"Аноним\")))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.less":
/*!****************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--2kCAN\",\n\t\"avatarBox\": \"userblock__avatarBox--1BN88\",\n\t\"avatarImage\": \"userblock__avatarImage--32i51\",\n\t\"username\": \"userblock__username--219Iw\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.less?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.less":
/*!********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--C12wc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.less?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_less_1 = __importDefault(__webpack_require__(/*! ./sortblock.less */ \"./src/shared/Header/SortBlock/sortblock.less\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_less_1.default.sortBlock }, \"sorting dpropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.less":
/*!****************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--1KalP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.less?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_less_1 = __importDefault(__webpack_require__(/*! ./threadtitle.less */ \"./src/shared/Header/ThreadTitle/threadtitle.less\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"div\", { className: threadtitle_less_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.less":
/*!********************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--QB_S1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.less?");

/***/ }),

/***/ "./src/shared/Header/header.less":
/*!***************************************!*\
  !*** ./src/shared/Header/header.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--rZiE5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.less?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_less_1 = __importDefault(__webpack_require__(/*! ./layout.less */ \"./src/shared/Layout/layout.less\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"div\", { className: layout_less_1.default.layout }, children);\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.less":
/*!***************************************!*\
  !*** ./src/shared/Layout/layout.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--1XuYy\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.less?");

/***/ }),

/***/ "./src/shared/context/cardContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/cardContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.cardContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.cardContext = react_1.default.createContext({});\r\n\n\n//# sourceURL=webpack:///./src/shared/context/cardContext.tsx?");

/***/ }),

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.tsx\");\r\nexports.postsContext = react_1.default.createContext({});\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = (0, usePostsData_1.usePostsData)()[0];\r\n    return react_1.default.createElement(exports.postsContext.Provider, { value: data }, children);\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.tsx\");\r\nexports.userContext = react_1.default.createContext({\r\n    data: {},\r\n    loading: false,\r\n});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var _b = (0, useUserData_1.useUserData)(), data = _b.data, loading = _b.loading;\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: { data: data, loading: loading } }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/shared/glop/Icon/Icon.tsx":
/*!***************************************!*\
  !*** ./src/shared/glop/Icon/Icon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icon_less_1 = __importDefault(__webpack_require__(/*! ./icon.less */ \"./src/shared/glop/Icon/icon.less\"));\r\nvar types_global_1 = __webpack_require__(/*! ../../types.global */ \"./src/shared/types.global.ts\");\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/glop/icons/index.ts\");\r\nvar allIcons = {\r\n    comments: react_1.default.createElement(icons_1.CommentsIcon, null),\r\n    save: react_1.default.createElement(icons_1.SaveIcon, null),\r\n    share: react_1.default.createElement(icons_1.ShareIcon, null),\r\n    warning: react_1.default.createElement(icons_1.WarningIcon, null),\r\n    close: react_1.default.createElement(icons_1.CloseIcon, null),\r\n    closeX: react_1.default.createElement(icons_1.CloseIconX, null),\r\n    menu: react_1.default.createElement(icons_1.MenuIcon, null),\r\n    anon: react_1.default.createElement(icons_1.IconAnon, null),\r\n    rainbow: react_1.default.createElement(icons_1.RainbowIcon, null),\r\n    up: react_1.default.createElement(icons_1.UpIcon, null),\r\n    down: react_1.default.createElement(icons_1.DownIcon, null),\r\n    arrows: react_1.default.createElement(icons_1.ArrowsIcon, null),\r\n    picture: react_1.default.createElement(icons_1.PictureIcon, null),\r\n    file: react_1.default.createElement(icons_1.FileIcon, null),\r\n    download: react_1.default.createElement(icons_1.DownloadIcon, null),\r\n    avatar: react_1.default.createElement(icons_1.AvatarIcon, null),\r\n    reload: react_1.default.createElement(icons_1.ReloadIcon, null),\r\n    link: react_1.default.createElement(icons_1.LinkIcon, null),\r\n    pen: react_1.default.createElement(icons_1.PenIcon, null),\r\n    underline: react_1.default.createElement(icons_1.UnderlineIcon, null),\r\n    pdf: react_1.default.createElement(icons_1.PdfIcon, null),\r\n};\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"comments\"] = \"comments\";\r\n    EIcons[\"save\"] = \"save\";\r\n    EIcons[\"share\"] = \"share\";\r\n    EIcons[\"warning\"] = \"warning\";\r\n    EIcons[\"close\"] = \"close\";\r\n    EIcons[\"closeX\"] = \"closeX\";\r\n    EIcons[\"menu\"] = \"menu\";\r\n    EIcons[\"anon\"] = \"anon\";\r\n    EIcons[\"rainbow\"] = \"rainbow\";\r\n    EIcons[\"up\"] = \"up\";\r\n    EIcons[\"down\"] = \"down\";\r\n    EIcons[\"arrows\"] = \"arrows\";\r\n    EIcons[\"picture\"] = \"picture\";\r\n    EIcons[\"file\"] = \"file\";\r\n    EIcons[\"download\"] = \"download\";\r\n    EIcons[\"avatar\"] = \"avatar\";\r\n    EIcons[\"reload\"] = \"reload\";\r\n    EIcons[\"link\"] = \"link\";\r\n    EIcons[\"pen\"] = \"pen\";\r\n    EIcons[\"underline\"] = \"underline\";\r\n    EIcons[\"pdf\"] = \"pdf\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nfunction Icon(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? \"span\" : _d, name = props.name, size = props.size, mobileSize = props.mobileSize, tableSize = props.tableSize, desktopSize = props.desktopSize, _e = props.color, color = _e === void 0 ? types_global_1.EColors.greyEC : _e, userClass = props.userClass, children = props.children;\r\n    var classes = (0, classnames_1.default)(icon_less_1.default[\"s\".concat(size)], icon_less_1.default[color], (_a = {}, _a[icon_less_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[icon_less_1.default[\"t\".concat(tableSize)]] = tableSize, _b), (_c = {}, _c[icon_less_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c));\r\n    return (react_1.default.createElement(As, { className: [classes, userClass, icon_less_1.default.defaultFlex].join(\" \").trim() }, name ? allIcons[name] : children));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/glop/Icon/icon.less":
/*!****************************************!*\
  !*** ./src/shared/glop/Icon/icon.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"defaultFlex\": \"icon__defaultFlex--1uL3t\",\n\t\"s50\": \"icon__s50--2HYjP\",\n\t\"s28\": \"icon__s28--kvE-S\",\n\t\"s20\": \"icon__s20--2Ambp\",\n\t\"s16\": \"icon__s16--3zjSs\",\n\t\"s14\": \"icon__s14--V0SP0\",\n\t\"s12\": \"icon__s12--1GG7d\",\n\t\"s10\": \"icon__s10--mp411\",\n\t\"black\": \"icon__black--OFY9W\",\n\t\"orange\": \"icon__orange--1L8t1\",\n\t\"green\": \"icon__green--3x8zy\",\n\t\"white\": \"icon__white--1q2dJ\",\n\t\"grayF4\": \"icon__grayF4--7TQoI\",\n\t\"greyF3\": \"icon__greyF3--3L95F\",\n\t\"greyEC\": \"icon__greyEC--2hZhf\",\n\t\"greyD9\": \"icon__greyD9--LYgYn\",\n\t\"greyC4\": \"icon__greyC4--17L2s\",\n\t\"grey99\": \"icon__grey99--1p3fX\",\n\t\"grey66\": \"icon__grey66--3rFOE\",\n\t\"m28\": \"icon__m28--ger7o\",\n\t\"m20\": \"icon__m20--1gCjO\",\n\t\"m16\": \"icon__m16--2xfv8\",\n\t\"m14\": \"icon__m14--2Uvv2\",\n\t\"m12\": \"icon__m12--2vIwI\",\n\t\"m10\": \"icon__m10--34lIl\",\n\t\"t28\": \"icon__t28--3JQ0l\",\n\t\"t20\": \"icon__t20--1_q95\",\n\t\"t16\": \"icon__t16--1qaXq\",\n\t\"t14\": \"icon__t14--3f2r_\",\n\t\"t12\": \"icon__t12--1giAc\",\n\t\"t10\": \"icon__t10--HznYk\",\n\t\"d28\": \"icon__d28--1fSR4\",\n\t\"d20\": \"icon__d20--3xh8b\",\n\t\"d16\": \"icon__d16--2LM0s\",\n\t\"d14\": \"icon__d14--3v7SW\",\n\t\"d12\": \"icon__d12--EBtW1\",\n\t\"d10\": \"icon__d10--3e6ro\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/glop/Icon/icon.less?");

/***/ }),

/***/ "./src/shared/glop/Icon/index.ts":
/*!***************************************!*\
  !*** ./src/shared/glop/Icon/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/glop/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/glop/Separate/Separate.tsx":
/*!***********************************************!*\
  !*** ./src/shared/glop/Separate/Separate.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Separate = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar separate_less_1 = __importDefault(__webpack_require__(/*! ./separate.less */ \"./src/shared/glop/Separate/separate.less\"));\r\nvar types_global_1 = __webpack_require__(/*! ../../types.global */ \"./src/shared/types.global.ts\");\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Separate(props) {\r\n    var _a = props.As, As = _a === void 0 ? \"div\" : _a, _b = props.size, size = _b === void 0 ? \"1\" : _b, _c = props.color, color = _c === void 0 ? types_global_1.EColors.greyEC : _c, _d = props.userClass, userClass = _d === void 0 ? \"\" : _d;\r\n    var classes = (0, classnames_1.default)(separate_less_1.default[\"s\".concat(size)], separate_less_1.default[color]);\r\n    return react_1.default.createElement(As, { className: [classes, userClass].join(\" \") });\r\n}\r\nexports.Separate = Separate;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/Separate/Separate.tsx?");

/***/ }),

/***/ "./src/shared/glop/Separate/separate.less":
/*!************************************************!*\
  !*** ./src/shared/glop/Separate/separate.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s1\": \"separate__s1--hFNev\",\n\t\"s2\": \"separate__s2--1cx8r\",\n\t\"s3\": \"separate__s3--1wF-H\",\n\t\"black\": \"separate__black--2w7L3\",\n\t\"orange\": \"separate__orange--3JWny\",\n\t\"green\": \"separate__green--18R_F\",\n\t\"white\": \"separate__white--3vYtA\",\n\t\"grayF4\": \"separate__grayF4--1XmzY\",\n\t\"greyF3\": \"separate__greyF3--njtQP\",\n\t\"greyEC\": \"separate__greyEC--1mJIc\",\n\t\"greyD9\": \"separate__greyD9--2h7dR\",\n\t\"greyC4\": \"separate__greyC4--2OYX7\",\n\t\"grey99\": \"separate__grey99--hlQog\",\n\t\"grey66\": \"separate__grey66--2iyCu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/glop/Separate/separate.less?");

/***/ }),

/***/ "./src/shared/glop/Text/Text.tsx":
/*!***************************************!*\
  !*** ./src/shared/glop/Text/Text.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_less_1 = __importDefault(__webpack_require__(/*! ./text.less */ \"./src/shared/glop/Text/text.less\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar types_global_1 = __webpack_require__(/*! ../../types.global */ \"./src/shared/types.global.ts\");\r\nfunction Text(props) {\r\n    var _a, _b, _c;\r\n    var _d = props.As, As = _d === void 0 ? \"span\" : _d, _e = props.color, color = _e === void 0 ? types_global_1.EColors.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tableSize = props.tableSize, desktopSize = props.desktopSize, _f = props.userClass, userClass = _f === void 0 ? \"\" : _f;\r\n    var classes = (0, classnames_1.default)(text_less_1.default[\"s\".concat(size)], text_less_1.default[color], (_a = {}, _a[text_less_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_less_1.default[\"t\".concat(tableSize)]] = tableSize, _b), (_c = {}, _c[text_less_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c));\r\n    return react_1.default.createElement(As, { className: [classes, userClass].join(\" \").trim() }, children);\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/glop/Text/index.ts":
/*!***************************************!*\
  !*** ./src/shared/glop/Text/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/glop/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/Text/index.ts?");

/***/ }),

/***/ "./src/shared/glop/Text/text.less":
/*!****************************************!*\
  !*** ./src/shared/glop/Text/text.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--3QF1c\",\n\t\"s20\": \"text__s20--20wmj\",\n\t\"s16\": \"text__s16--3pvOc\",\n\t\"s14\": \"text__s14--2-XYo\",\n\t\"s12\": \"text__s12--1ohq8\",\n\t\"s10\": \"text__s10--2Cq5O\",\n\t\"black\": \"text__black--1QwK9\",\n\t\"orange\": \"text__orange--2vROE\",\n\t\"green\": \"text__green--2qDHs\",\n\t\"white\": \"text__white--2Jjuh\",\n\t\"grayF4\": \"text__grayF4--eSKd3\",\n\t\"greyF3\": \"text__greyF3--1hDAu\",\n\t\"greyD9\": \"text__greyD9--rbX3V\",\n\t\"greyC4\": \"text__greyC4--2_JiT\",\n\t\"grey99\": \"text__grey99--3wzSc\",\n\t\"grey66\": \"text__grey66--2lmZ9\",\n\t\"upperCase\": \"text__upperCase--1M18A\",\n\t\"separate\": \"text__separate--WLFuS\",\n\t\"m28\": \"text__m28--3OGVF\",\n\t\"m20\": \"text__m20--3y6jf\",\n\t\"m16\": \"text__m16--12uHX\",\n\t\"m14\": \"text__m14--3Nlzw\",\n\t\"m12\": \"text__m12--1x1rI\",\n\t\"m10\": \"text__m10--163i0\",\n\t\"bold\": \"text__bold--1uZXf\",\n\t\"t28\": \"text__t28--sFFMf\",\n\t\"t20\": \"text__t20--lDZfo\",\n\t\"t16\": \"text__t16--2f3yF\",\n\t\"t14\": \"text__t14--10spO\",\n\t\"t12\": \"text__t12--38Q-B\",\n\t\"t10\": \"text__t10--nanee\",\n\t\"d28\": \"text__d28--3ctzG\",\n\t\"d20\": \"text__d20--3oXtR\",\n\t\"d16\": \"text__d16--fO5B9\",\n\t\"d14\": \"text__d14--20yok\",\n\t\"d12\": \"text__d12--3kWJw\",\n\t\"d10\": \"text__d10--1xncQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/glop/Text/text.less?");

/***/ }),

/***/ "./src/shared/glop/icons/ArrowsIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/glop/icons/ArrowsIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowsIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ArrowsIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"12\", viewBox: \"0 0 20 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z\", fill: \"#999999\" })));\r\n}\r\nexports.ArrowsIcon = ArrowsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/ArrowsIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/AvatarIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/glop/icons/AvatarIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AvatarIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction AvatarIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z\", fill: \"#999999\" })));\r\n}\r\nexports.AvatarIcon = AvatarIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/AvatarIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/CloseIcon.tsx":
/*!*********************************************!*\
  !*** ./src/shared/glop/icons/CloseIcon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CloseIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CloseIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n}\r\nexports.CloseIcon = CloseIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/CloseIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/CloseIconX.tsx":
/*!**********************************************!*\
  !*** ./src/shared/glop/icons/CloseIconX.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CloseIconX = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CloseIconX() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M13.3633 0L13.9996 0.636361L0.636345 14L-7.09307e-07 13.3636L13.3633 0Z\", fill: \"#ADADAD\" }),\r\n        react_1.default.createElement(\"path\", { d: \"M14 13.3635L13.3637 13.9999L0.000372653 0.636288L0.636719 -7.31022e-05L14 13.3635Z\", fill: \"#ADADAD\" })));\r\n}\r\nexports.CloseIconX = CloseIconX;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/CloseIconX.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/CommentsIcon.tsx":
/*!************************************************!*\
  !*** ./src/shared/glop/icons/CommentsIcon.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentsIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentsIcon = CommentsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/CommentsIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/DownIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/glop/icons/DownIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DownIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction DownIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.DownIcon = DownIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/DownIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/DownloadIcon.tsx":
/*!************************************************!*\
  !*** ./src/shared/glop/icons/DownloadIcon.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DownloadIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction DownloadIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"17\", viewBox: \"0 0 14 17\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z\", fill: \"#999999\" })));\r\n}\r\nexports.DownloadIcon = DownloadIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/DownloadIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/FileIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/glop/icons/FileIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FileIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction FileIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"20\", viewBox: \"0 0 16 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z\", fill: \"#999999\" })));\r\n}\r\nexports.FileIcon = FileIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/FileIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/IconAnon.tsx":
/*!********************************************!*\
  !*** ./src/shared/glop/icons/IconAnon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconAnon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconAnon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconAnon = IconAnon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/LinkIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/glop/icons/LinkIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LinkIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction LinkIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"10\", viewBox: \"0 0 20 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z\", fill: \"#999999\" })));\r\n}\r\nexports.LinkIcon = LinkIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/LinkIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/MenuIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/glop/icons/MenuIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/MicrophoneIcon.tsx":
/*!**************************************************!*\
  !*** ./src/shared/glop/icons/MicrophoneIcon.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MicrophoneIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MicrophoneIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"18\", viewBox: \"0 0 20 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z\", fill: \"#999999\" })));\r\n}\r\nexports.MicrophoneIcon = MicrophoneIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/MicrophoneIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/PdfIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/glop/icons/PdfIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PdfIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PdfIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.PdfIcon = PdfIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/PdfIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/PenIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/glop/icons/PenIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PenIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PenIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"19\", height: \"19\", viewBox: \"0 0 19 19\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z\", fill: \"#999999\" })));\r\n}\r\nexports.PenIcon = PenIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/PenIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/PictureIcon.tsx":
/*!***********************************************!*\
  !*** ./src/shared/glop/icons/PictureIcon.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PictureIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PictureIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.PictureIcon = PictureIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/PictureIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/QuoteIcon.tsx":
/*!*********************************************!*\
  !*** ./src/shared/glop/icons/QuoteIcon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.QuoteIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction QuoteIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z\", fill: \"#999999\" })));\r\n}\r\nexports.QuoteIcon = QuoteIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/QuoteIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/RainbowIcon.tsx":
/*!***********************************************!*\
  !*** ./src/shared/glop/icons/RainbowIcon.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RainbowIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction RainbowIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"18\", height: \"35\", viewBox: \"0 0 18 35\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { fillRule: \"evenodd\", clipRule: \"evenodd\", d: \"M17.5004 1.3499C8.58099 1.3499 1.35039 8.5805 1.35039 17.4999C1.35039 26.4193 8.58099 33.6499 17.5004 33.6499V34.3499C8.19439 34.3499 0.650391 26.8059 0.650391 17.4999C0.650391 8.1939 8.19439 0.649902 17.5004 0.649902V1.3499Z\", fill: \"#CC6633\" })));\r\n}\r\nexports.RainbowIcon = RainbowIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/RainbowIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/ReloadIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/glop/icons/ReloadIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReloadIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ReloadIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"22\", height: \"16\", viewBox: \"0 0 22 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z\", fill: \"#999999\" })));\r\n}\r\nexports.ReloadIcon = ReloadIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/ReloadIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/SaveIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/glop/icons/SaveIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/ShareIcon.tsx":
/*!*********************************************!*\
  !*** ./src/shared/glop/icons/ShareIcon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/UnderlineIcon.tsx":
/*!*************************************************!*\
  !*** ./src/shared/glop/icons/UnderlineIcon.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UnderlineIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction UnderlineIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"18\", viewBox: \"0 0 16 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z\", fill: \"#999999\" })));\r\n}\r\nexports.UnderlineIcon = UnderlineIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/UnderlineIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/UpIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/glop/icons/UpIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UpIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction UpIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.UpIcon = UpIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/UpIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/WarningIcon.tsx":
/*!***********************************************!*\
  !*** ./src/shared/glop/icons/WarningIcon.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WarningIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction WarningIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n}\r\nexports.WarningIcon = WarningIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/glop/icons/index.ts":
/*!****************************************!*\
  !*** ./src/shared/glop/icons/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/glop/icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentsIcon */ \"./src/shared/glop/icons/CommentsIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/glop/icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CloseIcon */ \"./src/shared/glop/icons/CloseIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CloseIconX */ \"./src/shared/glop/icons/CloseIconX.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/glop/icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/glop/icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/glop/icons/IconAnon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./RainbowIcon */ \"./src/shared/glop/icons/RainbowIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./UpIcon */ \"./src/shared/glop/icons/UpIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./DownIcon */ \"./src/shared/glop/icons/DownIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ArrowsIcon */ \"./src/shared/glop/icons/ArrowsIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./PictureIcon */ \"./src/shared/glop/icons/PictureIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./FileIcon */ \"./src/shared/glop/icons/FileIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./DownloadIcon */ \"./src/shared/glop/icons/DownloadIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AvatarIcon */ \"./src/shared/glop/icons/AvatarIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ReloadIcon */ \"./src/shared/glop/icons/ReloadIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./LinkIcon */ \"./src/shared/glop/icons/LinkIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./MicrophoneIcon */ \"./src/shared/glop/icons/MicrophoneIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./QuoteIcon */ \"./src/shared/glop/icons/QuoteIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./PenIcon */ \"./src/shared/glop/icons/PenIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./UnderlineIcon */ \"./src/shared/glop/icons/UnderlineIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./PdfIcon */ \"./src/shared/glop/icons/PdfIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/glop/icons/index.ts?");

/***/ }),

/***/ "./src/shared/main.global.less":
/*!*************************************!*\
  !*** ./src/shared/main.global.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/main.global.less?");

/***/ }),

/***/ "./src/shared/types.global.ts":
/*!************************************!*\
  !*** ./src/shared/types.global.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EColors = void 0;\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"black\";\r\n    EColors[\"orange\"] = \"orange\";\r\n    EColors[\"green\"] = \"green\";\r\n    EColors[\"white\"] = \"white\";\r\n    EColors[\"greyF4\"] = \"greyF4\";\r\n    EColors[\"greyF3\"] = \"greyF3\";\r\n    EColors[\"greyEC\"] = \"greyEC\";\r\n    EColors[\"greyD9\"] = \"greyD9\";\r\n    EColors[\"greyC4\"] = \"greyC4\";\r\n    EColors[\"grey99\"] = \"grey99\";\r\n    EColors[\"grey66\"] = \"grey66\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\n\n\n//# sourceURL=webpack:///./src/shared/types.global.ts?");

/***/ }),

/***/ "./src/shared/ui/ControlBtn/ControlBtn.tsx":
/*!*************************************************!*\
  !*** ./src/shared/ui/ControlBtn/ControlBtn.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ControlBtn = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controlbtn_less_1 = __importDefault(__webpack_require__(/*! ./controlbtn.less */ \"./src/shared/ui/ControlBtn/controlbtn.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../glop/Icon */ \"./src/shared/glop/Icon/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../types.global */ \"./src/shared/types.global.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../glop/Text */ \"./src/shared/glop/Text/index.ts\");\r\nfunction ControlBtn(_a) {\r\n    var img = _a.img, text = _a.text, onClick = _a.onClick;\r\n    return (react_1.default.createElement(\"button\", { type: \"button\", className: controlbtn_less_1.default.button, onClick: onClick },\r\n        img !== undefined && (react_1.default.createElement(Icon_1.Icon, { name: img, size: 14, color: types_global_1.EColors.grey99 })),\r\n        react_1.default.createElement(Break_1.Break, { size: 8 }),\r\n        react_1.default.createElement(Text_1.Text, { children: text, size: 14, color: types_global_1.EColors.grey99 })));\r\n}\r\nexports.ControlBtn = ControlBtn;\r\n\n\n//# sourceURL=webpack:///./src/shared/ui/ControlBtn/ControlBtn.tsx?");

/***/ }),

/***/ "./src/shared/ui/ControlBtn/controlbtn.less":
/*!**************************************************!*\
  !*** ./src/shared/ui/ControlBtn/controlbtn.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"controlbtn__button--13_jh\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ui/ControlBtn/controlbtn.less?");

/***/ }),

/***/ "./src/shared/ui/ControlBtn/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/ui/ControlBtn/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ControlBtn */ \"./src/shared/ui/ControlBtn/ControlBtn.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/ui/ControlBtn/index.ts?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/store/store.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch((0, exports.meRequest)());\r\n    axios_1.default\r\n        .get(\"https://oauth.reddit.com/api/v1/me\", {\r\n        headers: { Authorization: \"bearer \".concat(getState().token) },\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch((0, exports.meRequestError)(String(error)));\r\n    });\r\n}; };\r\nexports.meRequestAsync = meRequestAsync;\r\nvar saveToken = function () { return function (dispatch) {\r\n    function getToken() {\r\n        var checkToken = typeof window !== undefined &&\r\n            window.__token__ !== \"undefined\" &&\r\n            window.__token__;\r\n        var resp = checkToken || localStorage.getItem(\"token\");\r\n        return resp;\r\n    }\r\n    var token = getToken();\r\n    if (token) {\r\n        dispatch((0, store_1.setToken)(token));\r\n        localStorage.setItem(\"token\", token);\r\n    }\r\n}; };\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { loading: false, error: action.error });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { loading: false, data: action.data });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.setToken = exports.updateComment = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\r\nvar UPDATE_COMMENT = \"UPDATE_COMMENT\";\r\nvar updateComment = function (text) { return ({\r\n    type: \"UPDATE_COMMENT\",\r\n    text: text,\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar TOKEN = \"TOKEN\";\r\nvar setToken = function (text) { return ({\r\n    type: TOKEN,\r\n    text: text,\r\n}); };\r\nexports.setToken = setToken;\r\nvar initialState = {\r\n    commentText: \"\",\r\n    token: \"\",\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {},\r\n    },\r\n};\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case TOKEN:\r\n            return __assign(__assign({}, state), { token: action.text });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/GenericComments/GenericComments.tsx":
/*!*************************************************************!*\
  !*** ./src/utils/react/GenericComments/GenericComments.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericComments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar genericcomments_less_1 = __importDefault(__webpack_require__(/*! ./genericcomments.less */ \"./src/utils/react/GenericComments/genericcomments.less\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../shared/glop/Icon */ \"./src/shared/glop/Icon/index.ts\");\r\nvar types_global_1 = __webpack_require__(/*! ../../../shared/types.global */ \"./src/shared/types.global.ts\");\r\nvar extension_1 = __webpack_require__(/*! @redux-devtools/extension */ \"@redux-devtools/extension\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar store_1 = __webpack_require__(/*! ../../../store/store */ \"./src/store/store.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar CommentContainer_1 = __webpack_require__(/*! ../../../shared/CardsList/CommentContainer */ \"./src/shared/CardsList/CommentContainer/index.ts\");\r\nvar store = (0, redux_1.legacy_createStore)(\r\n// @ts-ignore\r\nstore_1.rootReducer, (0, extension_1.composeWithDevTools)());\r\nfunction GenericComments(_a) {\r\n    var data = _a.data, classContainer = _a.classContainer;\r\n    return (react_1.default.createElement(\"ul\", { className: classContainer }, data.map(function (comment) { return (react_1.default.createElement(\"li\", { className: genericcomments_less_1.default.comment, key: comment.data.id },\r\n        react_1.default.createElement(\"div\", { className: genericcomments_less_1.default.commentInner },\r\n            react_1.default.createElement(\"div\", { className: genericcomments_less_1.default.hideControls },\r\n                react_1.default.createElement(Icon_1.Icon, { name: \"up\", userClass: genericcomments_less_1.default.iconUp, color: types_global_1.EColors.greyD9 }),\r\n                react_1.default.createElement(Icon_1.Icon, { name: \"down\", userClass: genericcomments_less_1.default.iconDown, color: types_global_1.EColors.greyD9 })),\r\n            react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n                react_1.default.createElement(CommentContainer_1.CommentContainer, { comment: comment, controls: [\"Ответить\", \"Поделиться\", \"Пожаловаться\"] }))),\r\n        comment.data.replies && (react_1.default.createElement(GenericComments, { data: comment.data.replies.data.children })))); })));\r\n}\r\nexports.GenericComments = GenericComments;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/GenericComments/GenericComments.tsx?");

/***/ }),

/***/ "./src/utils/react/GenericComments/genericcomments.less":
/*!**************************************************************!*\
  !*** ./src/utils/react/GenericComments/genericcomments.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"comment\": \"genericcomments__comment--PA8Ug\",\n\t\"commentInner\": \"genericcomments__commentInner--1pDkY\",\n\t\"hideControls\": \"genericcomments__hideControls--2KxtK\",\n\t\"iconUp\": \"genericcomments__iconUp--1-T0H\"\n};\n\n\n//# sourceURL=webpack:///./src/utils/react/GenericComments/genericcomments.less?");

/***/ }),

/***/ "./src/utils/react/GenericComments/index.ts":
/*!**************************************************!*\
  !*** ./src/utils/react/GenericComments/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericComments */ \"./src/utils/react/GenericComments/GenericComments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/utils/react/GenericComments/index.ts?");

/***/ }),

/***/ "./src/utils/react/GenericControls/GenericControls.tsx":
/*!*************************************************************!*\
  !*** ./src/utils/react/GenericControls/GenericControls.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericControls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ControlBtn_1 = __webpack_require__(/*! ../../../shared/ui/ControlBtn */ \"./src/shared/ui/ControlBtn/index.ts\");\r\nfunction GenericControls(_a) {\r\n    var data = _a.data, _b = _a.As, As = _b === void 0 ? \"div\" : _b, userClass = _a.userClass, classDesktop = _a.classDesktop;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, data.map(function (_a) {\r\n        var img = _a.img, text = _a.text, id = _a.id, desktop = _a.desktop, onClick = _a.onClick;\r\n        return (react_1.default.createElement(As, { key: id, className: [userClass, desktop ? classDesktop : \"\"].join(\" \").trim() },\r\n            react_1.default.createElement(ControlBtn_1.ControlBtn, { img: img, text: text, onClick: onClick })));\r\n    })));\r\n}\r\nexports.GenericControls = GenericControls;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/GenericControls/GenericControls.tsx?");

/***/ }),

/***/ "./src/utils/react/GenericControls/index.ts":
/*!**************************************************!*\
  !*** ./src/utils/react/GenericControls/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericControls */ \"./src/utils/react/GenericControls/GenericControls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/utils/react/GenericControls/index.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = (0, assoc_1.assoc)('id', (0, exports.generateRandomString)());\r\nvar generateId = function (obj) { return (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj); };\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "@redux-devtools/extension":
/*!********************************************!*\
  !*** external "@redux-devtools/extension" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@redux-devtools/extension\");\n\n//# sourceURL=webpack:///external_%22@redux-devtools/extension%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });