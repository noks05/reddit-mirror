webpackHotUpdate("main",{

/***/ "./src/hooks/useObserver.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useObserver.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useObserver = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\r\nfunction useObserver(observableEl, nextAfter, load) {\r\n    // const [countLoad, setCountLoad] = useState(0);\r\n    var countLoad = (0, react_redux_1.useSelector)(function (state) { return state.countLoad; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var _a = (0, react_1.useState)(false), loadMore = _a[0], setLoadMore = _a[1];\r\n    console.log(countLoad);\r\n    function createObserver() {\r\n        var observerObj = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting) {\r\n                switch (countLoad) {\r\n                    case 0:\r\n                    case 1:\r\n                        load && load();\r\n                        // setCountLoad(countLoad + 1);\r\n                        dispatch((0, store_1.setCountLoad)(countLoad + 1));\r\n                        break;\r\n                    case 2:\r\n                        setLoadMore(true);\r\n                }\r\n            }\r\n        }, { rootMargin: \"50px\" });\r\n        if (observableEl && observableEl.current) {\r\n            observerObj.observe(observableEl.current);\r\n        }\r\n        return observerObj;\r\n    }\r\n    (0, react_1.useEffect)(function () {\r\n        var observer = createObserver();\r\n        return function () {\r\n            if (observableEl && observableEl.current) {\r\n                observer.unobserve(observableEl.current);\r\n            }\r\n        };\r\n    }, [nextAfter]);\r\n    return { setLoadMore: setLoadMore, loadMore: loadMore };\r\n}\r\nexports.useObserver = useObserver;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useObserver.tsx?");

/***/ })

})