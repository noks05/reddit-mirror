webpackHotUpdate("main",{

/***/ "./src/hooks/useCommentsData.tsx":
/*!***************************************!*\
  !*** ./src/hooks/useCommentsData.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction useCommentsData(postId, subreddit) {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        var result1 = postId !== undefined;\r\n        var result2 = subreddit !== undefined;\r\n        if (result1 && result2) {\r\n            axios_1.default\r\n                .get(\"http://api.reddit.com/r/\".concat(subreddit, \"/comments/\").concat(postId))\r\n                .then(function (resp) {\r\n                console.log(resp);\r\n                var commentsData = resp.data[0].data.children;\r\n                setData(commentsData);\r\n            })\r\n                .catch(function (e) {\r\n                setData([]);\r\n                console.log(e);\r\n            });\r\n        }\r\n        return function () {\r\n            setData([]);\r\n        };\r\n    }, [postId]);\r\n    return [data];\r\n}\r\nexports.useCommentsData = useCommentsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.tsx?");

/***/ })

})