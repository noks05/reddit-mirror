webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/comment.less":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Comments/BoxComments/ListComments/FormComments/formcomments.less":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/ModalCard/modalcard.less":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/glop/Separate/separate.less":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/utils/react/GenericComments/genericcomments.less":
false,

/***/ "./src/hooks/useCommentsData.tsx":
false,

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/Comment.tsx":
false,

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/comment.less":
false,

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/Comment/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/FormComments/FormComments.tsx":
false,

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/FormComments/formcomments.less":
false,

/***/ "./src/shared/CardsList/Card/Comments/BoxComments/ListComments/FormComments/index.ts":
false,

/***/ "./src/shared/CardsList/ModalCard/ModalCard.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/ModalCard/ModalCard.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ModalCard = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction ModalCard(_a) {\r\n    var post = _a.post, onClose = _a.onClose;\r\n    if (typeof window === \"undefined\")\r\n        return null;\r\n    var portalRoot = document.getElementById(\"portal-root\");\r\n    if (!portalRoot)\r\n        return null;\r\n    var modalRef = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(e) {\r\n            var _a, _b, _c, _d;\r\n            if (e.target instanceof Node) {\r\n                var clickOut = !((_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target));\r\n                var clickCloseBtn = (_c = (_b = modalRef.current) === null || _b === void 0 ? void 0 : _b.querySelector(\"[class^='modalcard__closeBtn--']\")) === null || _c === void 0 ? void 0 : _c.contains(e.target);\r\n                console.log(clickCloseBtn);\r\n                console.log(e.target);\r\n                (_d = modalRef.current) === null || _d === void 0 ? void 0 : _d.contains(e.target);\r\n            }\r\n        }\r\n    });\r\n    if (clickOut || clickCloseBtn) {\r\n        console.log(\"onClose\");\r\n        onClose();\r\n    }\r\n}\r\nexports.ModalCard = ModalCard;\r\ndocument.addEventListener(\"click\", handleClick);\r\nreturn function () {\r\n    document.removeEventListener(\"click\", handleClick);\r\n};\r\n;\r\nreturn react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: modalcard_less_1.default.wrapper },\r\n    react_1.default.createElement(\"div\", { className: modalcard_less_1.default.box, ref: modalRef },\r\n        react_1.default.createElement(\"button\", { className: modalcard_less_1.default.closeBtn },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.closeX, size: 14, color: types_global_1.EColors.greyC4, userClass: \"closeBtn\" })),\r\n        react_1.default.createElement(\"div\", { className: modalcard_less_1.default.title },\r\n            react_1.default.createElement(CarmaCounter_1.CarmaCounter, { score: post.score, classUser: modalcard_less_1.default.karmaCounter }),\r\n            react_1.default.createElement(Break_1.Break, { size: 22 }),\r\n            react_1.default.createElement(\"div\", { className: modalcard_less_1.default.textTitle },\r\n                react_1.default.createElement(Text_1.Text, { As: \"h1\", size: 20, userClass: modalcard_less_1.default.titleTitle }, post.title),\r\n                react_1.default.createElement(MetaData_1.MetaData, { name: post.author, avatar: post.sr_detail.icon_img, subreddit: post.subreddit }))),\r\n        react_1.default.createElement(Text_1.Text, { size: 14 }, post.sr_detail.description),\r\n        react_1.default.createElement(Separate_1.Separate, { userClass: modalcard_less_1.default.separate, color: types_global_1.EColors.greyD9 }),\r\n        react_1.default.createElement(FormComments_1.FormComments, { nameAutor: post.author }),\r\n        react_1.default.createElement(Separate_1.Separate, { userClass: modalcard_less_1.default.separate, color: types_global_1.EColors.greyD9 }),\r\n        react_1.default.createElement(ModalCommentsList_1.ModalCommentsList, { id: post.id, subreddit: post.subreddit }))), portalRoot);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/ModalCard/ModalCard.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/ModalCard/ModalCommentsList/ModalCommentsList.tsx":
false,

/***/ "./src/shared/CardsList/ModalCard/ModalCommentsList/index.ts":
false,

/***/ "./src/shared/CardsList/ModalCard/modalcard.less":
false,

/***/ "./src/shared/glop/Separate/Separate.tsx":
false,

/***/ "./src/shared/glop/Separate/separate.less":
false,

/***/ "./src/utils/react/GenericComments/GenericComments.tsx":
false,

/***/ "./src/utils/react/GenericComments/genericcomments.less":
false,

/***/ "./src/utils/react/GenericComments/index.ts":
false

})