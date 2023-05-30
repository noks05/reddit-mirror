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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EColors = void 0;
var EColors;
(function (EColors) {
    EColors["black"] = "black";
    EColors["orange"] = "orange";
    EColors["green"] = "green";
    EColors["white"] = "white";
    EColors["greyF4"] = "greyF4";
    EColors["greyF3"] = "greyF3";
    EColors["greyEC"] = "greyEC";
    EColors["greyD9"] = "greyD9";
    EColors["greyC4"] = "greyC4";
    EColors["grey99"] = "grey99";
    EColors["grey66"] = "grey66";
})(EColors = exports.EColors || (exports.EColors = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.setCountLoad = exports.setToken = exports.updateComment = void 0;
var actions_1 = __webpack_require__(8);
var reducer_1 = __webpack_require__(68);
var UPDATE_COMMENT = "UPDATE_COMMENT";
var updateComment = function (text) { return ({
    type: "UPDATE_COMMENT",
    text: text,
}); };
exports.updateComment = updateComment;
var TOKEN = "TOKEN";
var setToken = function (text) { return ({
    type: TOKEN,
    text: text,
}); };
exports.setToken = setToken;
var COUNT_LOAD = "COUNT_LOAD";
var setCountLoad = function (number) { return ({
    type: COUNT_LOAD,
    number: number,
}); };
exports.setCountLoad = setCountLoad;
var initialState = {
    commentText: "",
    token: "",
    countLoad: 0,
    me: {
        loading: false,
        error: '',
        data: {},
    },
};
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_COMMENT:
            return __assign(__assign({}, state), { commentText: action.text });
        case TOKEN:
            return __assign(__assign({}, state), { token: action.text });
        case COUNT_LOAD:
            return __assign(__assign({}, state), { countLoad: action.number });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { me: (0, reducer_1.meReducer)(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;
var store_1 = __webpack_require__(3);
var axios_1 = __importDefault(__webpack_require__(9));
exports.ME_REQUEST = 'ME_REQUEST';
var meRequest = function () { return ({
    type: exports.ME_REQUEST
}); };
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data,
}); };
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error,
}); };
exports.meRequestError = meRequestError;
var meRequestAsync = function () { return function (dispatch, getState) {
    dispatch((0, exports.meRequest)());
    axios_1.default
        .get("https://oauth.reddit.com/api/v1/me", {
        headers: { Authorization: "bearer ".concat(getState().token) },
    })
        .then(function (resp) {
        var userData = resp.data;
        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));
    })
        .catch(function (error) {
        console.log(error);
        dispatch((0, exports.meRequestError)(String(error)));
    });
}; };
exports.meRequestAsync = meRequestAsync;
var saveToken = function () { return function (dispatch) {
    function getToken() {
        var checkToken = typeof window !== undefined &&
            window.__token__ !== "undefined" &&
            window.__token__;
        var resp = checkToken || localStorage.getItem("token");
        return resp;
    }
    var token = getToken();
    if (token) {
        dispatch((0, store_1.setToken)(token));
        localStorage.setItem("token", token);
    }
}; };
exports.saveToken = saveToken;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsContextProvider = exports.postsContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usePostsData_1 = __webpack_require__(79);
exports.postsContext = react_1.default.createContext({});
function PostsContextProvider(_a) {
    var children = _a.children;
    var data = (0, usePostsData_1.usePostsData)();
    return react_1.default.createElement(exports.postsContext.Provider, { value: data }, children);
}
exports.PostsContextProvider = PostsContextProvider;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@redux-devtools/extension");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(90), exports);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.assignId = exports.generateRandomString = void 0;
var assoc_1 = __webpack_require__(112);
var generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };
exports.generateRandomString = generateRandomString;
exports.assignId = (0, assoc_1.assoc)('id', (0, exports.generateRandomString)());
var generateId = function (obj) { return (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj); };
exports.generateId = generateId;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(51), exports);
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(53), exports);
__exportStar(__webpack_require__(54), exports);
__exportStar(__webpack_require__(55), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(57), exports);
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(60), exports);
__exportStar(__webpack_require__(61), exports);
__exportStar(__webpack_require__(62), exports);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.userContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(67);
exports.userContext = react_1.default.createContext({
    data: {},
    loading: false,
});
function UserContextProvider(_a) {
    var children = _a.children;
    var _b = (0, useUserData_1.useUserData)(), data = _b.data, loading = _b.loading;
    return (react_1.default.createElement(exports.userContext.Provider, { value: { data: data, loading: loading } }, children));
}
exports.UserContextProvider = UserContextProvider;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(88), exports);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(101), exports);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(108), exports);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(23));
var server_1 = __importDefault(__webpack_require__(24));
var App_tsx_1 = __webpack_require__(25);
var indexTemplate_1 = __webpack_require__(158);
var axios_1 = __importDefault(__webpack_require__(9));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use("/static", express_1.default.static("./dist/client"));
app.get("/auth", function (req, res) {
    axios_1.default
        .post("https://www.reddit.com/api/v1/access_token", "grant_type=authorization_code&code=".concat(req.query.code, "&redirect_uri=http://localhost:3000/auth"), {
        auth: {
            username: 'undefined',
            password: "_WPwoO-K2KglGiaESEFzyiz_-K1Dog",
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
        .then(function (_a) {
        var data = _a.data;
        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), data["access_token"]));
    })
        .catch(console.log);
});
app.get("*", function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)())));
});
app.listen(PORT, function () {
    console.log("Server started on http://localhost:".concat(PORT));
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
var root_1 = __webpack_require__(26);
var Content_1 = __webpack_require__(27);
var Header_1 = __webpack_require__(30);
var Layout_1 = __webpack_require__(76);
var userContext_1 = __webpack_require__(17);
var postsContext_1 = __webpack_require__(11);
var react_redux_1 = __webpack_require__(4);
var extension_1 = __webpack_require__(12);
var redux_1 = __webpack_require__(13);
var redux_thunk_1 = __importDefault(__webpack_require__(80));
var store_1 = __webpack_require__(3);
var useToken_1 = __webpack_require__(81);
var react_router_dom_1 = __webpack_require__(10);
var RoutesPosts_1 = __webpack_require__(82);
var CardsList_1 = __webpack_require__(119);
__webpack_require__(157);
var store = (0, redux_1.legacy_createStore)(store_1.rootReducer, (0, extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    (0, useToken_1.useToken)(store);
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(userContext_1.UserContextProvider, null,
            react_1.default.createElement(postsContext_1.PostsContextProvider, null,
                react_1.default.createElement(RoutesPosts_1.RoutesPosts, { Layout: react_1.default.createElement(Layout_1.Layout, null,
                        react_1.default.createElement(Header_1.Header, null),
                        react_1.default.createElement(Content_1.Content, null,
                            react_1.default.createElement(CardsList_1.CardsList, null))) })))))));
}
exports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_less_1 = __importDefault(__webpack_require__(29));
function Content(_a) {
    var children = _a.children;
    return react_1.default.createElement("main", { className: content_less_1.default.content }, children);
}
exports.Content = Content;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--3fgq5"
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var SearchBlock_1 = __webpack_require__(32);
var ThreadTitle_1 = __webpack_require__(69);
var SortBlock_1 = __webpack_require__(72);
var header_less_1 = __importDefault(__webpack_require__(75));
function Header() {
    return (react_1.default.createElement("header", { className: header_less_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importStar(__webpack_require__(0));
var searchblock_less_1 = __importDefault(__webpack_require__(34));
var UserBlock_1 = __webpack_require__(35);
var userContext_1 = __webpack_require__(17);
function SearchBlock() {
    var _a = (0, react_1.useContext)(userContext_1.userContext), data = _a.data, loading = _a.loading;
    return (react_1.default.createElement("div", { className: searchblock_less_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--C12wc"
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userblock_less_1 = __importDefault(__webpack_require__(37));
var Icon_1 = __webpack_require__(5);
var Text_1 = __webpack_require__(2);
var types_global_1 = __webpack_require__(1);
var Break_1 = __webpack_require__(7);
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=1zvLRFTNIfKsrbNLPmr0UA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity", className: userblock_less_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_less_1.default.avatarBox }, avatarSrc ? (react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_less_1.default.avatarImage })) : (react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.anon, size: 50, color: types_global_1.EColors.greyD9 }))),
        react_1.default.createElement("div", { className: userblock_less_1.default.username },
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            loading ? (react_1.default.createElement(Text_1.Text, { size: 16, color: types_global_1.EColors.greyC4 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? types_global_1.EColors.black : types_global_1.EColors.grey99 }, username || "Аноним")))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--2kCAN",
	"avatarBox": "userblock__avatarBox--1BN88",
	"avatarImage": "userblock__avatarImage--32i51",
	"username": "userblock__username--219Iw"
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.EIcons = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icon_less_1 = __importDefault(__webpack_require__(39));
var types_global_1 = __webpack_require__(1);
var classnames_1 = __importDefault(__webpack_require__(6));
var icons_1 = __webpack_require__(16);
var allIcons = {
    comments: react_1.default.createElement(icons_1.CommentsIcon, null),
    save: react_1.default.createElement(icons_1.SaveIcon, null),
    share: react_1.default.createElement(icons_1.ShareIcon, null),
    warning: react_1.default.createElement(icons_1.WarningIcon, null),
    close: react_1.default.createElement(icons_1.CloseIcon, null),
    closeX: react_1.default.createElement(icons_1.CloseIconX, null),
    menu: react_1.default.createElement(icons_1.MenuIcon, null),
    anon: react_1.default.createElement(icons_1.IconAnon, null),
    rainbow: react_1.default.createElement(icons_1.RainbowIcon, null),
    up: react_1.default.createElement(icons_1.UpIcon, null),
    down: react_1.default.createElement(icons_1.DownIcon, null),
    arrows: react_1.default.createElement(icons_1.ArrowsIcon, null),
    picture: react_1.default.createElement(icons_1.PictureIcon, null),
    file: react_1.default.createElement(icons_1.FileIcon, null),
    download: react_1.default.createElement(icons_1.DownloadIcon, null),
    avatar: react_1.default.createElement(icons_1.AvatarIcon, null),
    reload: react_1.default.createElement(icons_1.ReloadIcon, null),
    link: react_1.default.createElement(icons_1.LinkIcon, null),
    pen: react_1.default.createElement(icons_1.PenIcon, null),
    underline: react_1.default.createElement(icons_1.UnderlineIcon, null),
    pdf: react_1.default.createElement(icons_1.PdfIcon, null),
};
var EIcons;
(function (EIcons) {
    EIcons["comments"] = "comments";
    EIcons["save"] = "save";
    EIcons["share"] = "share";
    EIcons["warning"] = "warning";
    EIcons["close"] = "close";
    EIcons["closeX"] = "closeX";
    EIcons["menu"] = "menu";
    EIcons["anon"] = "anon";
    EIcons["rainbow"] = "rainbow";
    EIcons["up"] = "up";
    EIcons["down"] = "down";
    EIcons["arrows"] = "arrows";
    EIcons["picture"] = "picture";
    EIcons["file"] = "file";
    EIcons["download"] = "download";
    EIcons["avatar"] = "avatar";
    EIcons["reload"] = "reload";
    EIcons["link"] = "link";
    EIcons["pen"] = "pen";
    EIcons["underline"] = "underline";
    EIcons["pdf"] = "pdf";
    EIcons["smile"] = "smile";
})(EIcons = exports.EIcons || (exports.EIcons = {}));
function Icon(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? "span" : _d, name = props.name, size = props.size, mobileSize = props.mobileSize, tableSize = props.tableSize, desktopSize = props.desktopSize, _e = props.color, color = _e === void 0 ? types_global_1.EColors.greyEC : _e, userClass = props.userClass, children = props.children;
    var classes = (0, classnames_1.default)(icon_less_1.default["s".concat(size)], icon_less_1.default[color], (_a = {}, _a[icon_less_1.default["m".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[icon_less_1.default["t".concat(tableSize)]] = tableSize, _b), (_c = {}, _c[icon_less_1.default["d".concat(desktopSize)]] = desktopSize, _c));
    return (react_1.default.createElement(As, { className: [classes, userClass, icon_less_1.default.defaultFlex].join(" ").trim() }, name ? allIcons[name] : children));
}
exports.Icon = Icon;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"defaultFlex": "icon__defaultFlex--1uL3t",
	"s40": "icon__s40--3fS4a",
	"s30": "icon__s30--1Iwuh",
	"s50": "icon__s50--2HYjP",
	"s28": "icon__s28--kvE-S",
	"s20": "icon__s20--2Ambp",
	"s16": "icon__s16--3zjSs",
	"s14": "icon__s14--V0SP0",
	"s12": "icon__s12--1GG7d",
	"s10": "icon__s10--mp411",
	"black": "icon__black--OFY9W",
	"orange": "icon__orange--1L8t1",
	"green": "icon__green--3x8zy",
	"white": "icon__white--1q2dJ",
	"grayF4": "icon__grayF4--7TQoI",
	"greyF3": "icon__greyF3--3L95F",
	"greyEC": "icon__greyEC--2hZhf",
	"greyD9": "icon__greyD9--LYgYn",
	"greyC4": "icon__greyC4--17L2s",
	"grey99": "icon__grey99--1p3fX",
	"grey66": "icon__grey66--3rFOE",
	"m28": "icon__m28--ger7o",
	"m20": "icon__m20--1gCjO",
	"m16": "icon__m16--2xfv8",
	"m14": "icon__m14--2Uvv2",
	"m12": "icon__m12--2vIwI",
	"m10": "icon__m10--34lIl",
	"t28": "icon__t28--3JQ0l",
	"t20": "icon__t20--1_q95",
	"t16": "icon__t16--1qaXq",
	"t14": "icon__t14--3f2r_",
	"t12": "icon__t12--1giAc",
	"t10": "icon__t10--HznYk",
	"d28": "icon__d28--1fSR4",
	"d20": "icon__d20--3xh8b",
	"d16": "icon__d16--2LM0s",
	"d14": "icon__d14--3v7SW",
	"d12": "icon__d12--EBtW1",
	"d10": "icon__d10--3e6ro"
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MenuIcon() {
    return (react_1.default.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function CommentsIcon() {
    return (react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.CommentsIcon = CommentsIcon;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ShareIcon() {
    return (react_1.default.createElement("svg", { width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.ShareIcon = ShareIcon;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function CloseIcon() {
    return (react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z", fill: "#999999" })));
}
exports.CloseIcon = CloseIcon;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseIconX = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function CloseIconX() {
    return (react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M13.3633 0L13.9996 0.636361L0.636345 14L-7.09307e-07 13.3636L13.3633 0Z", fill: "#ADADAD" }),
        react_1.default.createElement("path", { d: "M14 13.3635L13.3637 13.9999L0.000372653 0.636288L0.636719 -7.31022e-05L14 13.3635Z", fill: "#ADADAD" })));
}
exports.CloseIconX = CloseIconX;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function SaveIcon() {
    return (react_1.default.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SaveIcon = SaveIcon;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function WarningIcon() {
    return (react_1.default.createElement("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z", fill: "#999999" })));
}
exports.WarningIcon = WarningIcon;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function IconAnon() {
    return (react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.IconAnon = IconAnon;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RainbowIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function RainbowIcon() {
    return (react_1.default.createElement("svg", { width: "18", height: "35", viewBox: "0 0 18 35", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.5004 1.3499C8.58099 1.3499 1.35039 8.5805 1.35039 17.4999C1.35039 26.4193 8.58099 33.6499 17.5004 33.6499V34.3499C8.19439 34.3499 0.650391 26.8059 0.650391 17.4999C0.650391 8.1939 8.19439 0.649902 17.5004 0.649902V1.3499Z", fill: "#CC6633" })));
}
exports.RainbowIcon = RainbowIcon;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function UpIcon() {
    return (react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" })));
}
exports.UpIcon = UpIcon;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function DownIcon() {
    return (react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#D9D9D9" })));
}
exports.DownIcon = DownIcon;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowsIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ArrowsIcon() {
    return (react_1.default.createElement("svg", { width: "20", height: "12", viewBox: "0 0 20 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z", fill: "#999999" })));
}
exports.ArrowsIcon = ArrowsIcon;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function PictureIcon() {
    return (react_1.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z", fill: "#999999" })));
}
exports.PictureIcon = PictureIcon;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function FileIcon() {
    return (react_1.default.createElement("svg", { width: "16", height: "20", viewBox: "0 0 16 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z", fill: "#999999" })));
}
exports.FileIcon = FileIcon;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function DownloadIcon() {
    return (react_1.default.createElement("svg", { width: "14", height: "17", viewBox: "0 0 14 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z", fill: "#999999" })));
}
exports.DownloadIcon = DownloadIcon;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function AvatarIcon() {
    return (react_1.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z", fill: "#999999" })));
}
exports.AvatarIcon = AvatarIcon;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReloadIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ReloadIcon() {
    return (react_1.default.createElement("svg", { width: "22", height: "16", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z", fill: "#999999" })));
}
exports.ReloadIcon = ReloadIcon;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function LinkIcon() {
    return (react_1.default.createElement("svg", { width: "20", height: "10", viewBox: "0 0 20 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z", fill: "#999999" })));
}
exports.LinkIcon = LinkIcon;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrophoneIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MicrophoneIcon() {
    return (react_1.default.createElement("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z", fill: "#999999" })));
}
exports.MicrophoneIcon = MicrophoneIcon;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function QuoteIcon() {
    return (react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z", fill: "#999999" })));
}
exports.QuoteIcon = QuoteIcon;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function PenIcon() {
    return (react_1.default.createElement("svg", { width: "19", height: "19", viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z", fill: "#999999" })));
}
exports.PenIcon = PenIcon;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnderlineIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function UnderlineIcon() {
    return (react_1.default.createElement("svg", { width: "16", height: "18", viewBox: "0 0 16 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z", fill: "#999999" })));
}
exports.UnderlineIcon = UnderlineIcon;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function PdfIcon() {
    return (react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z", fill: "#999999" })));
}
exports.PdfIcon = PdfIcon;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_less_1 = __importDefault(__webpack_require__(64));
var classnames_1 = __importDefault(__webpack_require__(6));
var types_global_1 = __webpack_require__(1);
function Text(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? "span" : _d, _e = props.color, color = _e === void 0 ? types_global_1.EColors.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tableSize = props.tableSize, desktopSize = props.desktopSize, _f = props.userClass, userClass = _f === void 0 ? "" : _f;
    var classes = (0, classnames_1.default)(text_less_1.default["s".concat(size)], text_less_1.default[color], (_a = {}, _a[text_less_1.default["m".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_less_1.default["t".concat(tableSize)]] = tableSize, _b), (_c = {}, _c[text_less_1.default["d".concat(desktopSize)]] = desktopSize, _c));
    return react_1.default.createElement(As, { className: [classes, userClass].join(" ").trim() }, children);
}
exports.Text = Text;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s50": "text__s50--2cNr8",
	"s28": "text__s28--3QF1c",
	"s20": "text__s20--20wmj",
	"s16": "text__s16--3pvOc",
	"s14": "text__s14--2-XYo",
	"s12": "text__s12--1ohq8",
	"s10": "text__s10--2Cq5O",
	"black": "text__black--1QwK9",
	"orange": "text__orange--2vROE",
	"green": "text__green--2qDHs",
	"white": "text__white--2Jjuh",
	"grayF4": "text__grayF4--eSKd3",
	"greyF3": "text__greyF3--1hDAu",
	"greyD9": "text__greyD9--rbX3V",
	"greyC4": "text__greyC4--2_JiT",
	"grey99": "text__grey99--3wzSc",
	"grey66": "text__grey66--2lmZ9",
	"upperCase": "text__upperCase--1M18A",
	"separate": "text__separate--WLFuS",
	"m28": "text__m28--3OGVF",
	"m20": "text__m20--3y6jf",
	"m16": "text__m16--12uHX",
	"m14": "text__m14--3Nlzw",
	"m12": "text__m12--1x1rI",
	"m10": "text__m10--163i0",
	"bold": "text__bold--1uZXf",
	"t28": "text__t28--sFFMf",
	"t20": "text__t20--lDZfo",
	"t16": "text__t16--2f3yF",
	"t14": "text__t14--10spO",
	"t12": "text__t12--38Q-B",
	"t10": "text__t10--nanee",
	"d28": "text__d28--3ctzG",
	"d20": "text__d20--3oXtR",
	"d16": "text__d16--fO5B9",
	"d14": "text__d14--20yok",
	"d12": "text__d12--3kWJw",
	"d10": "text__d10--1xncQ"
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var break_less_1 = __importDefault(__webpack_require__(66));
var types_global_1 = __webpack_require__(1);
var classnames_1 = __importDefault(__webpack_require__(6));
function Break(props) {
    var _a, _b, _c;
    var _d = props.As, As = _d === void 0 ? "span" : _d, size = props.size, mobileSize = props.mobileSize, tableSize = props.tableSize, desktopSize = props.desktopSize, _e = props.color, color = _e === void 0 ? types_global_1.EColors.white : _e;
    var classes = (0, classnames_1.default)(break_less_1.default["s".concat(size)], break_less_1.default[color], (_a = {}, _a[break_less_1.default["m".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[break_less_1.default["t".concat(tableSize)]] = tableSize, _b), (_c = {}, _c[break_less_1.default["d".concat(desktopSize)]] = desktopSize, _c));
    return react_1.default.createElement(As, { className: classes });
}
exports.Break = Break;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--mdIAL",
	"s8": "break__s8--uKILp",
	"s12": "break__s12--2nnLj",
	"s16": "break__s16--2aAdU",
	"s20": "break__s20--1TD5c",
	"s22": "break__s22--28yAL",
	"inline": "break__inline--10BUW",
	"mobile_s4": "break__mobile_s4--1VaPy",
	"mobile_s8": "break__mobile_s8--1BQTI",
	"mobile_s12": "break__mobile_s12--MAF66",
	"mobile_s16": "break__mobile_s16--1qdeZ",
	"mobile_s20": "break__mobile_s20--3NArg",
	"tablet_s4": "break__tablet_s4--30cm0",
	"tablet_s8": "break__tablet_s8--1ufPQ",
	"tablet_s12": "break__tablet_s12--kaf3T",
	"tablet_s16": "break__tablet_s16--3Jm3t",
	"tablet_s20": "break__tablet_s20--2KICY",
	"desktop_s4": "break__desktop_s4--17AIS",
	"desktop_s8": "break__desktop_s8--3fjuG",
	"desktop_s12": "break__desktop_s12--2OECw",
	"desktop_s16": "break__desktop_s16--2CR2t",
	"desktop_s20": "break__desktop_s20--1WoKN"
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(4);
var actions_1 = __webpack_require__(8);
function useUserData() {
    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        if (!token || token === "undefined")
            return;
        dispatch((0, actions_1.meRequestAsync)());
    }, [token]);
    return { data: data, loading: loading };
}
exports.useUserData = useUserData;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(8);
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { loading: false, error: action.error });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { loading: false, data: action.data });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(70), exports);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_less_1 = __importDefault(__webpack_require__(71));
function ThreadTitle() {
    return (react_1.default.createElement("div", { className: threadtitle_less_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--QB_S1"
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_less_1 = __importDefault(__webpack_require__(74));
function SortBlock() {
    return (react_1.default.createElement("div", { className: sortblock_less_1.default.sortBlock }, "sorting dpropdown"));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--1KalP"
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--rZiE5"
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(77), exports);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_less_1 = __importDefault(__webpack_require__(78));
function Layout(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: layout_less_1.default.layout }, children);
}
exports.Layout = Layout;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--1XuYy"
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
var axios_1 = __importDefault(__webpack_require__(9));
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(4);
function usePostsData() {
    var _a = (0, react_1.useState)(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = (0, react_1.useState)(""), errorLoading = _b[0], setErrorLoading = _b[1];
    var _c = (0, react_1.useState)([]), posts = _c[0], setPosts = _c[1];
    var _d = (0, react_1.useState)(""), nextAfter = _d[0], setNextAfter = _d[1];
    var token = (0, react_redux_1.useSelector)(function (state) {
        return state.token;
    });
    // const token = "";
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, after, children_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!token || token === "undefined")
                            return [2 /*return*/];
                        setIsLoading(true);
                        setErrorLoading("");
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.get("https://oauth.reddit.com/rising?sr_detail=true", {
                                headers: { Authorization: "bearer ".concat(token) },
                                params: {
                                    limit: 7,
                                    after: nextAfter,
                                },
                            })];
                    case 2:
                        _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;
                        setNextAfter(after);
                        setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        setErrorLoading(String(error_1));
                        return [3 /*break*/, 4];
                    case 4:
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    return {
        posts: posts,
        isLoading: isLoading,
        errorLoading: errorLoading,
        load: load,
        nextAfter: nextAfter,
    };
}
exports.usePostsData = usePostsData;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
var react_1 = __webpack_require__(0);
var actions_1 = __webpack_require__(8);
function useToken(store) {
    (0, react_1.useEffect)(function () {
        store.dispatch((0, actions_1.saveToken)());
    }, []);
}
exports.useToken = useToken;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(83), exports);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesPosts = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_router_dom_1 = __webpack_require__(10);
var ModalCardContainer_1 = __webpack_require__(84);
var NotFound_1 = __webpack_require__(116);
function RoutesPosts(_a) {
    var Layout = _a.Layout;
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/posts", element: Layout }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/posts/:id", element: react_1.default.createElement(ModalCardContainer_1.ModalCardContainer, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/auth", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/posts", replace: true }) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/posts", replace: true }) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFound_1.NotFound, null) })));
}
exports.RoutesPosts = RoutesPosts;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(85), exports);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalCardContainer = void 0;
var react_1 = __importStar(__webpack_require__(0));
var ModalCard_1 = __webpack_require__(86);
var react_dom_1 = __importDefault(__webpack_require__(21));
var postsContext_1 = __webpack_require__(11);
var react_router_dom_1 = __webpack_require__(10);
function ModalCardContainer() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var modalRef = (0, react_1.useRef)(null);
    var posts = (0, react_1.useContext)(postsContext_1.postsContext).posts;
    var id = (0, react_router_dom_1.useParams)().id;
    var post = posts === null || posts === void 0 ? void 0 : posts.find(function (post) {
        return post.data.id === id;
    });
    if (typeof window === "undefined")
        return null;
    var portalRoot = document.getElementById("portal-root");
    if (!portalRoot)
        return null;
    if (!post)
        return null;
    (0, react_1.useEffect)(function () {
        function handleClick(e) {
            var _a, _b, _c;
            if (e.target instanceof Node) {
                var clickOut = !((_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target));
                var clickCloseBtn = (_c = (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.querySelector("[class^='modalcard__closeBtn--']")) === null || _c === void 0 ? void 0 : _c.contains(e.target);
                if (clickOut || clickCloseBtn) {
                    navigate("/posts", { replace: true });
                }
            }
        }
        document.addEventListener("click", handleClick);
        return function () {
            document.removeEventListener("click", handleClick);
        };
    });
    return react_dom_1.default.createPortal(react_1.default.createElement(ModalCard_1.ModalCard, { post: post.data, ref: modalRef }), portalRoot);
}
exports.ModalCardContainer = ModalCardContainer;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalCard = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var modalcard_less_1 = __importDefault(__webpack_require__(87));
var Icon_1 = __webpack_require__(5);
var types_global_1 = __webpack_require__(1);
var CarmaCounter_1 = __webpack_require__(18);
var Break_1 = __webpack_require__(7);
var MetaData_1 = __webpack_require__(14);
var Text_1 = __webpack_require__(2);
var ModalCommentsList_1 = __webpack_require__(92);
var Separate_1 = __webpack_require__(114);
var FormComments_1 = __webpack_require__(19);
exports.ModalCard = react_1.default.forwardRef(function (_a, ref) {
    var post = _a.post;
    return (react_1.default.createElement("div", { className: modalcard_less_1.default.wrapper },
        react_1.default.createElement("div", { className: modalcard_less_1.default.box, ref: ref },
            react_1.default.createElement("button", { className: modalcard_less_1.default.closeBtn },
                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.closeX, size: 14, color: types_global_1.EColors.greyC4, userClass: "closeBtn" })),
            react_1.default.createElement("div", { className: modalcard_less_1.default.title },
                react_1.default.createElement(CarmaCounter_1.CarmaCounter, { score: post.score, classUser: modalcard_less_1.default.karmaCounter }),
                react_1.default.createElement(Break_1.Break, { size: 22 }),
                react_1.default.createElement("div", { className: modalcard_less_1.default.textTitle },
                    react_1.default.createElement(Text_1.Text, { As: "h1", size: 20, userClass: modalcard_less_1.default.titleTitle }, post.title),
                    react_1.default.createElement(MetaData_1.MetaData, { name: post.author, avatar: post.sr_detail.icon_img, subreddit: post.subreddit }))),
            react_1.default.createElement(Text_1.Text, { size: 14 }, post.sr_detail.description),
            react_1.default.createElement(Separate_1.Separate, { userClass: modalcard_less_1.default.separate, color: types_global_1.EColors.greyD9 }),
            react_1.default.createElement(FormComments_1.FormComments, null),
            react_1.default.createElement(Separate_1.Separate, { userClass: modalcard_less_1.default.separate, color: types_global_1.EColors.greyD9 }),
            react_1.default.createElement(ModalCommentsList_1.ModalCommentsList, { id: post.id, subreddit: post.subreddit }))));
});


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "modalcard__wrapper--ktEgc",
	"box": "modalcard__box--mV4SR",
	"closeBtn": "modalcard__closeBtn--1-ahq",
	"title": "modalcard__title--3RdDs",
	"textTitle": "modalcard__textTitle--2R_IM",
	"separate": "modalcard__separate--i2sB3",
	"titleTitle": "modalcard__titleTitle--3v3lI",
	"karmaCounter": "modalcard__karmaCounter--BNmsd"
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var carmacounter_less_1 = __importDefault(__webpack_require__(89));
var Text_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(5);
var types_global_1 = __webpack_require__(1);
function CarmaCounter(_a) {
    var score = _a.score, _b = _a.classUser, classUser = _b === void 0 ? "" : _b;
    return (react_1.default.createElement("div", { className: [carmacounter_less_1.default.karmaCounter, classUser].join(" ") },
        react_1.default.createElement("button", { className: carmacounter_less_1.default.up },
            react_1.default.createElement(Icon_1.Icon, { name: "up", userClass: carmacounter_less_1.default.iconUp, color: types_global_1.EColors.greyD9 })),
        react_1.default.createElement(Text_1.Text, { size: 12, userClass: carmacounter_less_1.default.karmaValue }, score),
        react_1.default.createElement("button", { className: carmacounter_less_1.default.down },
            react_1.default.createElement(Icon_1.Icon, { name: "down", userClass: carmacounter_less_1.default.iconDown, color: types_global_1.EColors.greyD9 }))));
}
exports.CarmaCounter = CarmaCounter;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaValue": "carmacounter__karmaValue--3C5Vm",
	"iconUp": "carmacounter__iconUp--O20o8",
	"iconDown": "carmacounter__iconDown--3qNmG",
	"down": "carmacounter__down--3fI6t",
	"karmaCounter": "carmacounter__karmaCounter--i0FKd",
	"up": "carmacounter__up--33EKN"
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaData = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var metadata_less_1 = __importDefault(__webpack_require__(91));
var Break_1 = __webpack_require__(7);
var Text_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(5);
function MetaData(_a) {
    var subreddit = _a.subreddit, _b = _a.avatar, avatar = _b === void 0 ? "" : _b, name = _a.name;
    return (react_1.default.createElement("div", { className: metadata_less_1.default.metaData },
        subreddit && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Text_1.Text, { size: 14, userClass: metadata_less_1.default.subreddit }, subreddit),
            react_1.default.createElement(Break_1.Break, { size: 16 }))),
        react_1.default.createElement("div", { className: metadata_less_1.default.userLink },
            avatar.length ? (react_1.default.createElement("img", { src: avatar, alt: "avatar", className: metadata_less_1.default.avatar })) : (react_1.default.createElement(Icon_1.Icon, { name: "anon", size: 20, userClass: metadata_less_1.default.avatar })),
            react_1.default.createElement("a", { className: metadata_less_1.default.username, href: "#user-url" }, name)),
        react_1.default.createElement("span", { className: metadata_less_1.default.createdAt },
            react_1.default.createElement("span", { className: metadata_less_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u043E "),
            "4 \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434")));
}
exports.MetaData = MetaData;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"metaData": "metadata__metaData--32Iht",
	"subreddit": "metadata__subreddit--3QXQ-",
	"publishedLabel": "metadata__publishedLabel--1X3sF",
	"createdAt": "metadata__createdAt--2cwQ6",
	"username": "metadata__username--19Kjx",
	"userLink": "metadata__userLink--127My",
	"avatar": "metadata__avatar--2zqS1"
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(93), exports);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalCommentsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useCommentsData_1 = __webpack_require__(94);
var Text_1 = __webpack_require__(2);
var types_global_1 = __webpack_require__(1);
var GenericComments_1 = __webpack_require__(95);
function ModalCommentsList(_a) {
    var id = _a.id, subreddit = _a.subreddit;
    var data = (0, useCommentsData_1.useCommentsData)(id, subreddit)[0];
    if (!data.length) {
        return (react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.grey99 }, "\u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C \u043A\u0442\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"));
    }
    return react_1.default.createElement(GenericComments_1.GenericComments, { data: data });
}
exports.ModalCommentsList = ModalCommentsList;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommentsData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(9));
function useCommentsData(postId, subreddit) {
    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];
    (0, react_1.useEffect)(function () {
        axios_1.default
            .get("http://api.reddit.com/r/".concat(subreddit, "/comments/").concat(postId))
            .then(function (resp) {
            var commentsData = resp.data[1].data.children;
            setData(commentsData);
        })
            .catch(function (e) {
            setData([]);
            console.log(e);
        });
        return function () {
            setData([]);
        };
    }, [postId]);
    return [data];
}
exports.useCommentsData = useCommentsData;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericComments = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Icon_1 = __webpack_require__(5);
var types_global_1 = __webpack_require__(1);
var extension_1 = __webpack_require__(12);
var redux_1 = __webpack_require__(13);
var store_1 = __webpack_require__(3);
var CommentContainer_1 = __webpack_require__(97);
var genericcomments_less_1 = __importDefault(__webpack_require__(113));
var store = (0, redux_1.legacy_createStore)(store_1.rootReducer, (0, extension_1.composeWithDevTools)());
function GenericComments(_a) {
    var data = _a.data, classContainer = _a.classContainer;
    return (react_1.default.createElement("ul", { className: classContainer }, data.map(function (comment) { return (react_1.default.createElement("li", { className: genericcomments_less_1.default.comment, key: comment.data.id },
        react_1.default.createElement("div", { className: genericcomments_less_1.default.commentInner },
            react_1.default.createElement("div", { className: genericcomments_less_1.default.hideControls },
                react_1.default.createElement(Icon_1.Icon, { name: "up", userClass: genericcomments_less_1.default.iconUp, color: types_global_1.EColors.greyD9 }),
                react_1.default.createElement(Icon_1.Icon, { name: "down", userClass: genericcomments_less_1.default.iconDown, color: types_global_1.EColors.greyD9 })),
            react_1.default.createElement(CommentContainer_1.CommentContainer, { comment: comment, controls: ["Ответить", "Поделиться", "Пожаловаться"] })),
        comment.data.replies && (react_1.default.createElement(GenericComments, { data: comment.data.replies.data.children })))); })));
}
exports.GenericComments = GenericComments;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(98), exports);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentContainer = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(4);
var store_1 = __webpack_require__(3);
var Comment_1 = __webpack_require__(99);
var generateRandomIndex_1 = __webpack_require__(15);
function CommentContainer(_a) {
    var comment = _a.comment, controls = _a.controls;
    var _b = (0, react_1.useState)(false), isForm = _b[0], setIsForm = _b[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var data = [
        {
            img: "comments",
            text: "Ответить",
            desktop: true,
            onClick: function (e) {
                e.stopPropagation();
                setIsForm(!isForm);
                dispatch((0, store_1.updateComment)("".concat(comment.data.author, ", ")));
            },
        },
        {
            img: "share",
            text: "Поделиться",
            desktop: true,
        },
        {
            img: "warning",
            text: "Пожаловаться",
            desktop: true,
        },
        {
            img: "close",
            text: "Скрыть",
            desktop: false,
        },
        {
            img: "save",
            text: "Сохранить",
            desktop: true,
        },
    ].map(function (obj) { return (0, generateRandomIndex_1.generateId)(obj); });
    var filteredData = [];
    if (controls) {
        filteredData = controls
            .map(function (str) {
            return data.find(function (obj) { return obj.text === str; });
        })
            .filter(function (el) { return el !== undefined; });
    }
    return (react_1.default.createElement(Comment_1.Comment, { author: comment.data.author, subreddit: comment.data.subreddit, body: comment.data.body, data: filteredData, isForm: isForm }));
}
exports.CommentContainer = CommentContainer;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var comment_less_1 = __importDefault(__webpack_require__(100));
var FormComments_1 = __webpack_require__(19);
var GenericControls_1 = __webpack_require__(20);
var types_global_1 = __webpack_require__(1);
var MetaData_1 = __webpack_require__(14);
var Text_1 = __webpack_require__(2);
function Comment(_a) {
    var author = _a.author, subreddit = _a.subreddit, body = _a.body, data = _a.data, isForm = _a.isForm;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(MetaData_1.MetaData, { name: author, subreddit: subreddit }),
        react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.black, As: "p", userClass: [comment_less_1.default.lineHeight24, comment_less_1.default.textBody].join(" ") }, body),
        data.length !== 0 && (react_1.default.createElement("ul", { className: comment_less_1.default.list },
            react_1.default.createElement(GenericControls_1.GenericControls, { As: "li", data: data, userClass: comment_less_1.default.item }))),
        isForm && react_1.default.createElement(FormComments_1.FormComments, null)));
}
exports.Comment = Comment;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"user": "comment__user--3evQp",
	"textBody": "comment__textBody--vGt4J",
	"list": "comment__list--24Ubg",
	"item": "comment__item--1aPKP"
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormComments = void 0;
var react_1 = __importStar(__webpack_require__(0));
var formcomments_less_1 = __importDefault(__webpack_require__(102));
var react_redux_1 = __webpack_require__(4);
var store_1 = __webpack_require__(3);
var useFocusInput_1 = __webpack_require__(103);
var react_hook_form_1 = __webpack_require__(104);
var ToolsBar_1 = __webpack_require__(105);
function FormComments() {
    var inputValue = (0, react_redux_1.useSelector)(function (state) {
        return state.commentText;
    });
    var dispatch = (0, react_redux_1.useDispatch)();
    var inputRef = (0, react_1.useRef)(null);
    var inconsArr = [
        "arrows",
        "picture",
        "file",
        "download",
        "avatar",
        "reload",
        "link",
        "pen",
        "underline",
        "pdf",
    ];
    (0, useFocusInput_1.useFocusInput)(inputRef);
    var _a = (0, react_hook_form_1.useForm)(), watch = _a.watch, register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
    var onSubmit = function (data) {
        console.log("Ваш комментарий отправлен!\n", "текст: ", data.comment);
    };
    errors.comment && console.log(errors.comment.message);
    (0, react_1.useEffect)(function () {
        var subscription = watch(function (value) {
            return dispatch((0, store_1.updateComment)(value.comment));
        });
        return function () { return subscription.unsubscribe(); };
    }, [watch]);
    return (react_1.default.createElement("form", { className: formcomments_less_1.default.container, action: "", onSubmit: handleSubmit(onSubmit), ref: inputRef },
        react_1.default.createElement("textarea", __assign({ className: formcomments_less_1.default.input, value: inputValue }, register("comment", {
            required: "Ошибка!",
            maxLength: 1000,
        }), { "aria-invalid": errors.comment ? true : undefined })),
        react_1.default.createElement(ToolsBar_1.ToolsBar, { icons: inconsArr })));
}
exports.FormComments = FormComments;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "formcomments__container--2_UBD",
	"input": "formcomments__input--1Ouzn"
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocusInput = void 0;
var react_1 = __webpack_require__(0);
function useFocusInput(inputRef) {
    (0, react_1.useEffect)(function () {
        var _a;
        if (inputRef) {
            var inputHtmlElem = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.querySelector("textarea");
            if (!inputHtmlElem)
                return;
            inputHtmlElem.focus();
            inputHtmlElem.selectionStart = inputHtmlElem.value.length;
        }
    }, []);
}
exports.useFocusInput = useFocusInput;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolsBar = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var toolsbar_less_1 = __importDefault(__webpack_require__(107));
var Icon_1 = __webpack_require__(5);
var types_global_1 = __webpack_require__(1);
var Text_1 = __webpack_require__(2);
function ToolsBar(_a) {
    var icons = _a.icons;
    return (react_1.default.createElement("div", { className: toolsbar_less_1.default.toolsBox },
        react_1.default.createElement("ul", { className: toolsbar_less_1.default.tools }, icons.map(function (icon) { return (react_1.default.createElement("li", { className: toolsbar_less_1.default.itemTools, key: icon },
            react_1.default.createElement("button", { type: "button", className: toolsbar_less_1.default.tool },
                react_1.default.createElement(Icon_1.Icon, { name: icon, color: types_global_1.EColors.grey99 })))); })),
        react_1.default.createElement("button", { className: toolsbar_less_1.default.button, type: "submit" },
            react_1.default.createElement(Text_1.Text, { size: 14, color: types_global_1.EColors.white }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
}
exports.ToolsBar = ToolsBar;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"toolsBox": "toolsbar__toolsBox--3c4YA",
	"tools": "toolsbar__tools--RYAV0",
	"itemTools": "toolsbar__itemTools--HVrpS",
	"tool": "toolsbar__tool--68tbM",
	"button": "toolsbar__button--3e7M6"
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericControls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ControlBtn_1 = __webpack_require__(109);
function GenericControls(_a) {
    var data = _a.data, _b = _a.As, As = _b === void 0 ? "div" : _b, userClass = _a.userClass, classDesktop = _a.classDesktop;
    return (react_1.default.createElement(react_1.default.Fragment, null, data.map(function (_a) {
        var img = _a.img, text = _a.text, id = _a.id, desktop = _a.desktop, onClick = _a.onClick;
        return (react_1.default.createElement(As, { key: id, className: [userClass, desktop ? classDesktop : ""].join(" ").trim() },
            react_1.default.createElement(ControlBtn_1.ControlBtn, { img: img, text: text, onClick: onClick })));
    })));
}
exports.GenericControls = GenericControls;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(110), exports);


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlBtn = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controlbtn_less_1 = __importDefault(__webpack_require__(111));
var Icon_1 = __webpack_require__(5);
var types_global_1 = __webpack_require__(1);
var Break_1 = __webpack_require__(7);
var Text_1 = __webpack_require__(2);
function ControlBtn(_a) {
    var img = _a.img, text = _a.text, onClick = _a.onClick;
    return (react_1.default.createElement("button", { type: "button", className: controlbtn_less_1.default.button, onClick: onClick },
        img !== undefined && (react_1.default.createElement(Icon_1.Icon, { name: img, size: 14, color: types_global_1.EColors.grey99 })),
        react_1.default.createElement(Break_1.Break, { size: 8 }),
        react_1.default.createElement(Text_1.Text, { children: text, size: 14, color: types_global_1.EColors.grey99 })));
}
exports.ControlBtn = ControlBtn;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "controlbtn__button--13_jh"
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return function (obj) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));
    };
}
exports.assoc = assoc;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"comment": "genericcomments__comment--PA8Ug",
	"commentInner": "genericcomments__commentInner--1pDkY",
	"hideControls": "genericcomments__hideControls--2KxtK",
	"iconUp": "genericcomments__iconUp--1-T0H"
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separate = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var separate_less_1 = __importDefault(__webpack_require__(115));
var types_global_1 = __webpack_require__(1);
var classnames_1 = __importDefault(__webpack_require__(6));
function Separate(props) {
    var _a = props.As, As = _a === void 0 ? "div" : _a, _b = props.size, size = _b === void 0 ? "1" : _b, _c = props.color, color = _c === void 0 ? types_global_1.EColors.greyEC : _c, _d = props.userClass, userClass = _d === void 0 ? "" : _d;
    var classes = (0, classnames_1.default)(separate_less_1.default["s".concat(size)], separate_less_1.default[color]);
    return react_1.default.createElement(As, { className: [classes, userClass].join(" ") });
}
exports.Separate = Separate;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s1": "separate__s1--hFNev",
	"s2": "separate__s2--1cx8r",
	"s3": "separate__s3--1wF-H",
	"black": "separate__black--2w7L3",
	"orange": "separate__orange--3JWny",
	"green": "separate__green--18R_F",
	"white": "separate__white--3vYtA",
	"grayF4": "separate__grayF4--1XmzY",
	"greyF3": "separate__greyF3--njtQP",
	"greyEC": "separate__greyEC--1mJIc",
	"greyD9": "separate__greyD9--2h7dR",
	"greyC4": "separate__greyC4--2OYX7",
	"grey99": "separate__grey99--hlQog",
	"grey66": "separate__grey66--2iyCu"
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(117), exports);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var notfound_less_1 = __importDefault(__webpack_require__(118));
var Text_1 = __webpack_require__(2);
var types_global_1 = __webpack_require__(1);
function NotFound() {
    return (react_1.default.createElement("div", { className: notfound_less_1.default.container },
        react_1.default.createElement(Text_1.Text, { size: 50, color: types_global_1.EColors.orange }, "\u041E\u0448\u0438\u0431\u043A\u0430 404"),
        react_1.default.createElement(Text_1.Text, { size: 28 }, "\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"),
        react_1.default.createElement("a", { className: notfound_less_1.default.linkMeanPage, href: "http://localhost:3000/posts" }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")));
}
exports.NotFound = NotFound;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "notfound__container--P7kOM",
	"linkMeanPage": "notfound__linkMeanPage--3_dxf"
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(120), exports);


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var Card_1 = __webpack_require__(121);
var cardContext_1 = __webpack_require__(152);
var generateRandomIndex_1 = __webpack_require__(15);
var useObserver_1 = __webpack_require__(153);
var postsContext_1 = __webpack_require__(11);
var Text_1 = __webpack_require__(2);
var Smile_1 = __webpack_require__(154);
var cardslist_less_1 = __importDefault(__webpack_require__(156));
var react_redux_1 = __webpack_require__(4);
var store_1 = __webpack_require__(3);
function CardsList() {
    var Provider = cardContext_1.cardContext.Provider;
    var bottomOfList = (0, react_1.useRef)(null);
    var _a = (0, react_1.useContext)(postsContext_1.postsContext), load = _a.load, nextAfter = _a.nextAfter, posts = _a.posts, isLoading = _a.isLoading, errorLoading = _a.errorLoading;
    var _b = (0, useObserver_1.useObserver)(bottomOfList, nextAfter, load), setLoadMore = _b.setLoadMore, loadMore = _b.loadMore;
    var dispatch = (0, react_redux_1.useDispatch)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: cardslist_less_1.default.cardsList },
            posts &&
                posts.map(function (p) { return (react_1.default.createElement(Provider, { value: p, key: p.data.id + (0, generateRandomIndex_1.generateRandomString)() },
                    react_1.default.createElement(Card_1.Card, { post: p.data }))); }),
            (posts === null || posts === void 0 ? void 0 : posts.length) === 0 && !isLoading && !errorLoading && (react_1.default.createElement("div", { className: cardslist_less_1.default.textCenter, role: "alert" },
                react_1.default.createElement(Smile_1.Smile, null),
                react_1.default.createElement(Text_1.Text, { size: 28, mobileSize: 16 },
                    "\u0425\u043C\u043C... \u0437\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E",
                    " "))),
            !loadMore && (react_1.default.createElement("div", { className: cardslist_less_1.default.observerElem, ref: bottomOfList })),
            !loadMore && isLoading && (react_1.default.createElement("div", { className: cardslist_less_1.default.contr },
                react_1.default.createElement("div", { className: cardslist_less_1.default.loader, role: "alert" }))),
            errorLoading && (react_1.default.createElement("div", { role: "alert", className: cardslist_less_1.default.textAlign }, errorLoading)),
            (posts === null || posts === void 0 ? void 0 : posts.length) !== 0 && loadMore && (react_1.default.createElement("div", { className: cardslist_less_1.default.contr },
                react_1.default.createElement("button", { className: cardslist_less_1.default.btnLoadMore, type: "button", role: "alert", style: { textAlign: "center" }, onClick: function () {
                        load && load();
                        setLoadMore(false);
                        dispatch((0, store_1.setCountLoad)(1));
                    } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451"))))));
}
exports.CardsList = CardsList;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(122), exports);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_less_1 = __importDefault(__webpack_require__(123));
var Controls_1 = __webpack_require__(124);
var Menu_1 = __webpack_require__(133);
var Preview_1 = __webpack_require__(142);
var TextContent_1 = __webpack_require__(145);
function Card(_a) {
    var post = _a.post;
    return (react_1.default.createElement("li", { className: card_less_1.default.card, id: post.id },
        react_1.default.createElement(TextContent_1.TextContent, { post: post }),
        (post.url.includes(".jpg") || post.url.includes(".png")) && (react_1.default.createElement(Preview_1.Preview, { img: post.url })),
        react_1.default.createElement(Menu_1.Menu, null),
        react_1.default.createElement(Controls_1.Controls, { score: post.score })));
}
exports.Card = Card;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--3Kg9c",
	"textContent": "card__textContent--2lcGg"
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(125), exports);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Actions_1 = __webpack_require__(126);
var CarmaCounter_1 = __webpack_require__(18);
var CommentsButton_1 = __webpack_require__(129);
var controls_less_1 = __importDefault(__webpack_require__(132));
function Controls(_a) {
    var score = _a.score;
    return (react_1.default.createElement("div", { className: controls_less_1.default.controls },
        react_1.default.createElement(CarmaCounter_1.CarmaCounter, { score: score }),
        react_1.default.createElement(CommentsButton_1.CommentsButton, null),
        react_1.default.createElement(Actions_1.Actions, null)));
}
exports.Controls = Controls;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(127), exports);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var actions_less_1 = __importDefault(__webpack_require__(128));
function Actions() {
    return (react_1.default.createElement("div", { className: actions_less_1.default.actions },
        react_1.default.createElement("button", { className: actions_less_1.default.shareButton },
            react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))),
        react_1.default.createElement("button", { className: actions_less_1.default.saveButton },
            react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" })))));
}
exports.Actions = Actions;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"shareButton": "actions__shareButton--3x_2F",
	"saveButton": "actions__saveButton--7zGRV",
	"actions": "actions__actions--36r_l"
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(130), exports);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsbutton_less_1 = __importDefault(__webpack_require__(131));
function CommentsButton() {
    return (react_1.default.createElement("button", { className: commentsbutton_less_1.default.commentsButton },
        react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#999999" })),
        react_1.default.createElement("span", { className: commentsbutton_less_1.default.commentsNumber }, "23")));
}
exports.CommentsButton = CommentsButton;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsbutton__commentsButton--OVr6M",
	"commentsNumber": "commentsbutton__commentsNumber--34Qr-"
};


/***/ }),
/* 132 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--3otGu"
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(134), exports);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importStar(__webpack_require__(0));
var Dropdown_1 = __webpack_require__(135);
var generateRandomIndex_1 = __webpack_require__(15);
var icons_1 = __webpack_require__(16);
var MenuDropdownList_1 = __webpack_require__(138);
var menu_less_1 = __importDefault(__webpack_require__(141));
var items = [
    {
        img: "comments",
        text: "Комментарии",
        desktop: true,
    },
    {
        img: "share",
        text: "Поделиться",
        desktop: true,
    },
    {
        img: "close",
        text: "Скрыть",
        desktop: false,
    },
    {
        img: "save",
        text: "Сохранить",
        desktop: true,
    },
    {
        img: "warning",
        text: "Пожаловаться",
        desktop: false,
    },
].map(function (obj) { return (0, generateRandomIndex_1.generateId)(obj); });
function Menu() {
    var _a = (0, react_1.useState)({ top: 0, left: 0 }), coordinates = _a[0], setСoordinates = _a[1];
    function getPosition(e) {
        e.stopPropagation();
        var x = 0;
        var y = 0;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            x =
                e.clientX +
                    document.body.scrollLeft +
                    document.documentElement.scrollLeft;
            y =
                e.clientY +
                    document.body.scrollTop +
                    document.documentElement.scrollTop;
        }
        setСoordinates({ top: y, left: x });
    }
    return (react_1.default.createElement("div", { className: menu_less_1.default.menu, onClick: function (e) { return getPosition(e); } },
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: menu_less_1.default.menuButton },
                react_1.default.createElement(icons_1.MenuIcon, null)) },
            react_1.default.createElement(MenuDropdownList_1.MenuDropdownList, { items: items, coordinates: coordinates }))));
}
exports.Menu = Menu;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(136), exports);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var dropdown_less_1 = __importDefault(__webpack_require__(137));
var NOOP = function () { };
function Dropdown(_a) {
    var button = _a.button, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c, children = _a.children;
    var _d = (0, react_1.useState)(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    (0, react_1.useEffect)(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    (0, react_1.useEffect)(function () { return (isDropdownOpen ? onOpen() : onClose()); }, [isDropdownOpen]);
    function handleOpen() {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    }
    return (react_1.default.createElement("div", { className: dropdown_less_1.default.container },
        react_1.default.createElement("div", { onClick: handleOpen }, button),
        isDropdownOpen && (react_1.default.createElement("div", { className: dropdown_less_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_less_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--pnhGR",
	"listContainer": "dropdown__listContainer--2vn0U",
	"list": "dropdown__list--2qzIZ"
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(139), exports);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDropdownList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(21));
var menudropdownlist_less_1 = __importDefault(__webpack_require__(140));
var GenericControls_1 = __webpack_require__(20);
function MenuDropdownList(_a) {
    var items = _a.items, coordinates = _a.coordinates;
    if (typeof window === "undefined")
        return null;
    var portalRoot = document.getElementById("portal-root");
    if (!portalRoot)
        return null;
    var positionDropdown = {
        top: coordinates.top,
        left: coordinates.left,
    };
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: menudropdownlist_less_1.default.dropdown, style: positionDropdown },
        react_1.default.createElement("ul", { className: menudropdownlist_less_1.default.menuItemsList },
            react_1.default.createElement(GenericControls_1.GenericControls, { As: "li", data: items, userClass: menudropdownlist_less_1.default.menuItem, classDesktop: menudropdownlist_less_1.default.desktop })),
        react_1.default.createElement("button", { className: menudropdownlist_less_1.default.closeButton }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")), portalRoot);
}
exports.MenuDropdownList = MenuDropdownList;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menudropdownlist__menuItemsList--2QDP-",
	"dropdown": "menudropdownlist__dropdown--1jCYz",
	"menuItem": "menudropdownlist__menuItem--1I05i",
	"closeButton": "menudropdownlist__closeButton--10cif",
	"desktop": "menudropdownlist__desktop--3dOzv"
};


/***/ }),
/* 141 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--3HgxL",
	"menuButton": "menu__menuButton--3BpWR"
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(143), exports);


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_less_1 = __importDefault(__webpack_require__(144));
function Preview(_a) {
    var img = _a.img;
    return (react_1.default.createElement("div", { className: preview_less_1.default.preview },
        react_1.default.createElement("img", { className: preview_less_1.default.previewImg, src: img, alt: "preview" })));
}
exports.Preview = Preview;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--3CgtQ",
	"previewImg": "preview__previewImg--3TFva"
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(146), exports);


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_less_1 = __importDefault(__webpack_require__(147));
var MetaData_1 = __webpack_require__(14);
var TitleCardContainer_1 = __webpack_require__(148);
var extension_1 = __webpack_require__(12);
var redux_1 = __webpack_require__(13);
var store_1 = __webpack_require__(3);
var store = (0, redux_1.legacy_createStore)(store_1.rootReducer, (0, extension_1.composeWithDevTools)());
function TextContent(_a) {
    var post = _a.post;
    return (react_1.default.createElement("div", { className: textcontent_less_1.default.textContent },
        react_1.default.createElement(MetaData_1.MetaData, { avatar: post.sr_detail.icon_img, name: post.author }),
        react_1.default.createElement(TitleCardContainer_1.TitleCardContainer, { post: post })));
}
exports.TextContent = TextContent;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--EDc9_",
	"preview": "textcontent__preview--3wLQ7",
	"previewImg": "textcontent__previewImg--2EM5A"
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(149), exports);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleCardContainer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(4);
var store_1 = __webpack_require__(3);
var TitleCard_1 = __webpack_require__(150);
function TitleCardContainer(_a) {
    var post = _a.post;
    var dispatch = (0, react_redux_1.useDispatch)();
    function onClick() {
        dispatch((0, store_1.updateComment)("".concat(post.author, ", ")));
    }
    return react_1.default.createElement(TitleCard_1.TitleCard, { post: post, onClick: onClick });
}
exports.TitleCardContainer = TitleCardContainer;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleCard = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var titlecard_less_1 = __importDefault(__webpack_require__(151));
var react_router_dom_1 = __webpack_require__(10);
function TitleCard(_a) {
    var post = _a.post, onClick = _a.onClick;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", { className: titlecard_less_1.default.title, onClick: onClick },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/".concat(post.id), className: titlecard_less_1.default.postLink }, post.title))));
}
exports.TitleCard = TitleCard;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "titlecard__title--SaVjk",
	"postLink": "titlecard__postLink--mUsJG"
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.cardContext = react_1.default.createContext({});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useObserver = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(4);
var store_1 = __webpack_require__(3);
function useObserver(observableEl, nextAfter, load) {
    var countLoad = (0, react_redux_1.useSelector)(function (state) { return state.countLoad; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_1.useState)(false), loadMore = _a[0], setLoadMore = _a[1];
    function createObserver() {
        var observerObj = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                switch (countLoad) {
                    case 0:
                    case 1:
                        load && load();
                        dispatch((0, store_1.setCountLoad)(countLoad + 1));
                        break;
                    case 2:
                        setLoadMore(true);
                }
            }
        }, { rootMargin: "50px" });
        if (observableEl && observableEl.current) {
            observerObj.observe(observableEl.current);
        }
        return observerObj;
    }
    (0, react_1.useEffect)(function () {
        var observer = createObserver();
        return function () {
            if (observableEl && observableEl.current) {
                observer.unobserve(observableEl.current);
            }
        };
    }, [nextAfter]);
    return { setLoadMore: setLoadMore, loadMore: loadMore };
}
exports.useObserver = useObserver;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(155), exports);


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Smile = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function Smile() {
    return (react_1.default.createElement("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        react_1.default.createElement("rect", { width: "40", height: "40", fill: "url(#pattern0)" }),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                react_1.default.createElement("use", { xlinkHref: "#image0_16_2280", transform: "scale(0.00833333)" })),
            react_1.default.createElement("image", { id: "image0_16_2280", width: "120", height: "120", xlinkHref: "data:image/png;base64,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" }))));
}
exports.Smile = Smile;


/***/ }),
/* 156 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslist__cardsList--1BDcw",
	"contr": "cardslist__contr--261eg",
	"textCenter": "cardslist__textCenter--DA733",
	"btnLoadMore": "cardslist__btnLoadMore--17FsV",
	"loader": "cardslist__loader--3ax9l",
	"rotate": "cardslist__rotate--3gQfu"
};


/***/ }),
/* 157 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Reddit</title>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script>\n      window.__token__ = '".concat(token, "';\n    </script>\n    <style>\n      // #portal-root{\n      //   position: absolute;\n      // }\n    </style>\n</head>\n<body>\n    <div id=\"react-root\">").concat(content, "</div>\n    <div id=\"portal-root\"></div>\n</body>\n</html>\n"); };
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);