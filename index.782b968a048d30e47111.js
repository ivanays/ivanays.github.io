"use strict";
(self["webpackChunksnv_site_react"] = self["webpackChunksnv_site_react"] || []).push([[624],{

/***/ 3077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Procedures)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/func/func_query_media/funcQueryMedia.js
var funcQueryMedia = __webpack_require__(2622);
// EXTERNAL MODULE: ./src/hooks/index.js + 11 modules
var hooks = __webpack_require__(7597);
// EXTERNAL MODULE: ./node_modules/gsap/index.js
var gsap = __webpack_require__(738);
// EXTERNAL MODULE: ./node_modules/react-use-scroll-direction/dist/react-use-scroll-direction.esm.js
var react_use_scroll_direction_esm = __webpack_require__(3681);
// EXTERNAL MODULE: ./src/contexts/ProcSliderContext/index.js + 11 modules
var ProcSliderContext = __webpack_require__(5654);
// EXTERNAL MODULE: ./src/components/ui/index.js + 16 modules
var ui = __webpack_require__(8690);
;// ./src/images/body1.png
const body1_namespaceObject = __webpack_require__.p + "images/body1.58303fdfe96e87990539.png";
;// ./src/images/body2.png
const body2_namespaceObject = __webpack_require__.p + "images/body2.871e33167feb03d47a8b.png";
;// ./src/images/body3.png
const body3_namespaceObject = __webpack_require__.p + "images/body3.f2381cfbf1b2d03efc47.png";
;// ./src/images/body4.png
const body4_namespaceObject = __webpack_require__.p + "images/body4.2c72394973c668d87c50.png";
;// ./src/images/body5.png
const body5_namespaceObject = __webpack_require__.p + "images/body5.385943032bf887a4f2a4.png";
;// ./src/images/body6.png
const body6_namespaceObject = __webpack_require__.p + "images/body6.0990bb2c9bd5103b719d.png";
;// ./src/images/body7.png
const body7_namespaceObject = __webpack_require__.p + "images/body7.49d7a941d862f01e7ae0.png";
;// ./src/components/sliders/slider_proc/slider_proc_content/slider_proc_content_body/SliderProcContentBody.js







var SliderProcContentBody = [body1_namespaceObject, body2_namespaceObject, body3_namespaceObject, body4_namespaceObject, body5_namespaceObject, body6_namespaceObject, body7_namespaceObject];
;// ./src/components/sliders/slider_proc/slider_proc_content/slider_proc_content_body/index.js

;// ./src/images/face1.png
const face1_namespaceObject = __webpack_require__.p + "images/face1.16d24e57746b15febac4.png";
;// ./src/images/face2.png
const face2_namespaceObject = __webpack_require__.p + "images/face2.e84c24c8c2164c8910b0.png";
;// ./src/images/face3.png
const face3_namespaceObject = __webpack_require__.p + "images/face3.b2d1679e0924744b53f1.png";
;// ./src/images/face4.png
const face4_namespaceObject = __webpack_require__.p + "images/face4.3e893c9db632960cf11a.png";
;// ./src/images/face5.png
const face5_namespaceObject = __webpack_require__.p + "images/face5.2578b9cc59223fc0e081.png";
;// ./src/images/face6.png
const face6_namespaceObject = __webpack_require__.p + "images/face6.d7ef62ad5c6ec65c37a8.png";
;// ./src/images/face7.png
const face7_namespaceObject = __webpack_require__.p + "images/face7.e24e7e253568f54de607.png";
;// ./src/images/face8.png
const face8_namespaceObject = __webpack_require__.p + "images/face8.0d89fc6abd9af67ed46e.png";
;// ./src/images/face9.png
const face9_namespaceObject = __webpack_require__.p + "images/face9.49d7a941d862f01e7ae0.png";
;// ./src/images/face10.png
const face10_namespaceObject = __webpack_require__.p + "images/face10.33342ce91ea36c266be4.png";
;// ./src/images/face11.png
const face11_namespaceObject = __webpack_require__.p + "images/face11.01968a6cd3e6adc29df4.png";
;// ./src/images/face12.png
const face12_namespaceObject = __webpack_require__.p + "images/face12.7321e89c0c77565a3f81.png";
;// ./src/images/face13.png
const face13_namespaceObject = __webpack_require__.p + "images/face13.c858eb411ec2e3f2b818.png";
;// ./src/images/face14.png
const face14_namespaceObject = __webpack_require__.p + "images/face14.8ff5fbaa1b0e366ce4bd.png";
;// ./src/components/sliders/slider_proc/slider_proc_content/slider_proc_content_face/SliderProcContentFace.js














var SliderProcContentFace = [face1_namespaceObject, face2_namespaceObject, face3_namespaceObject, face4_namespaceObject, face5_namespaceObject, face6_namespaceObject, face7_namespaceObject, face8_namespaceObject, face9_namespaceObject, face10_namespaceObject, face11_namespaceObject, face12_namespaceObject, face13_namespaceObject, face14_namespaceObject];
;// ./src/components/sliders/slider_proc/slider_proc_content/slider_proc_content_face/index.js

;// ./src/components/sliders/slider_proc/slider_proc_content/index.js


;// ./src/data/data_procedures/data_procedures_sliders/data_procedures_slider_body/dataProceduresSliderBody.json
const dataProceduresSliderBody_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":"slider-link-body-"},{"id":"slider-img-body-","alt":"","src":""}]');
;// ./src/data/data_procedures/data_procedures_sliders/data_procedures_slider_face/dataProceduresSliderFace.json
const dataProceduresSliderFace_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":"slider-link-face-","className":"slider__link slider__link-procedures popup-link"},{"id":"slider-img-face-","alt":"","className":"slider__card slider__card-procedures","src":""}]');
// EXTERNAL MODULE: ./src/func/func_props/funcProps.js
var funcProps = __webpack_require__(8427);
;// ./src/components/sections/procedures/procedures_tabs/ProceduresTabs.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }













var delay = function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var ProceduresTabs = function ProceduresTabs(props) {
  var queryMedia = (0,funcQueryMedia/* default */.A)();
  var media1728 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query1728);
  var media1133 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query1133);
  var media744 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query744);
  var media744l = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query744l);
  var media375 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query375);
  var media275 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query275);
  var media1300 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query1300);
  var media900 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query900);
  var media600 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query600);
  var media600l = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query600l);
  var proceduresTabsClass = classnames_default()({
    'procedures__tabs': media1728 === true,
    'procedures--1133__tabs': media1133 === true,
    'procedures--744__tabs': media744 === true,
    'procedures--744l__tabs': media744l === true,
    'procedures--375__tabs': media375 === true,
    'procedures--275__tabs': media275 === true,
    'procedures--1300__tabs': media1300 === true,
    'procedures--900__tabs': media900 === true,
    'procedures--600__tabs': media600 === true,
    'procedures--600l__tabs': media600l === true
  });
  var proceduresMenuClass = classnames_default()({
    'procedures__menu': media1728 === true,
    'procedures--1133__menu': media1133 === true,
    'procedures--744__menu': media744 === true,
    'procedures--744l__menu': media744l === true,
    'procedures--375__menu': media375 === true,
    'procedures--275__menu': media275 === true,
    'procedures--1300__menu': media1300 === true,
    'procedures--900__menu': media900 === true,
    'procedures--600__menu': media600 === true,
    'procedures--600l__menu': media600l === true
  });
  var menuClass = classnames_default()({
    'menu': media1728 === true,
    'menu--1133': media1133 === true,
    'menu--744': media744 === true,
    'menu--744l': media744l === true,
    'menu--375': media375 === true,
    'menu--275': media275 === true,
    'menu--1300': media1300 === true,
    'menu--900': media900 === true,
    'menu--600': media600 === true,
    'menu--600l': media600l === true
  });
  var menuProceduresClass = classnames_default()({
    'menu-procedures': media1728 === true,
    'menu-procedures--1133': media1133 === true,
    'menu-procedures--744': media744 === true,
    'menu-procedures--744l': media744l === true,
    'menu-procedures--375': media375 === true,
    'menu-procedures--275': media275 === true,
    'menu-procedures--1300': media1300 === true,
    'menu-procedures--900': media900 === true,
    'menu-procedures--600': media600 === true,
    'menu-procedures--600l': media600l === true
  });
  var menuItemClass = classnames_default()({
    'menu__item': media1728 === true,
    'menu--1133__item': media1133 === true,
    'menu--744__item': media744 === true,
    'menu--744l__item': media744l === true,
    'menu--375__item': media375 === true,
    'menu--275__item': media275 === true,
    'menu--1300__item': media1300 === true,
    'menu--900__item': media900 === true,
    'menu--600__item': media600 === true,
    'menu--600l__item': media600l === true
  });
  var menuItemTabClass = classnames_default()({
    'menu__item-tab': media1728 === true,
    'menu--1133__item-tab': media1133 === true,
    'menu--744__item-tab': media744 === true,
    'menu--744l__item-tab': media744l === true,
    'menu--375__item-tab': media375 === true,
    'menu--275__item-tab': media275 === true,
    'menu--1300__item-tab': media1300 === true,
    'menu--900__item-tab': media900 === true,
    'menu--600__item-tab': media600 === true,
    'menu--600l__item-tab': media600l === true
  });
  var menuLinkClass = classnames_default()(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    'menu__link': media1728 === true,
    'menu--1133__link': media1133 === true,
    'menu--744__link': media744 === true,
    'menu--744l__link': media744l === true,
    'menu--375__link': media375 === true
  }, "menu--375__link", media275 === true), 'menu--1300__link', media1300 === true), 'menu--900__link', media900 === true), 'menu--600__link', media600 === true), 'menu--600l__link', media600l === true));
  var menuLinkTabClass = classnames_default()({
    'menu__link-tab': media1728 === true,
    'menu--1133__link-tab': media1133 === true,
    'menu--744__link-tab': media744 === true,
    'menu--744l__link-tab': media744l === true,
    'menu--375__link-tab': media375 === true,
    'menu--275__link-tab': media275 === true,
    'menu--1300__link-tab': media1300 === true,
    'menu--900__link-tab': media900 === true,
    'menu--600__link-tab': media600 === true,
    'menu--600l__link-tab': media600l === true
  });
  var tabsClass = classnames_default()({
    'tabs': media1728 === true,
    'tabs--1133': media1133 === true,
    'tabs--744': media744 === true,
    'tabs--744l': media744l === true,
    'tabs--375': media375 === true,
    'tabs--275': media275 === true,
    'tabs--1300': media1300 === true,
    'tabs--900': media900 === true,
    'tabs--600': media600 === true,
    'tabs--600l': media600l === true
  });
  var tabsProceduresClass = classnames_default()({
    'tabs-procedures': media1728 === true,
    'tabs-procedures--1133': media1133 === true,
    'tabs-procedures--744': media744 === true,
    'tabs-procedures--744l': media744l === true,
    'tabs-procedures--375': media375 === true,
    'tabs-procedures--275': media275 === true,
    'tabs-procedures--1300': media1300 === true,
    'tabs-procedures--900': media900 === true,
    'tabs-procedures--600': media600 === true,
    'tabs-procedures--600l': media600l === true
  });
  var tabsBodyClass = classnames_default()({
    'tabs__body': media1728 === true,
    'tabs--1133__body': media1133 === true,
    'tabs--744__body': media744 === true,
    'tabs--744l__body': media744l === true,
    'tabs--375__body': media375 === true,
    'tabs--275__body': media275 === true,
    'tabs--1300__body': media1300 === true,
    'tabs--900__body': media900 === true,
    'tabs--600__body': media600 === true,
    'tabs--600l__body': media600l === true
  });
  var tabsFaceClass = classnames_default()({
    'tabs__face': media1728 === true,
    'tabs--1133__face': media1133 === true,
    'tabs--744__face': media744 === true,
    'tabs--744l__face': media744l === true,
    'tabs--375__face': media375 === true,
    'tabs--275__face': media275 === true,
    'tabs--1300__face': media1300 === true,
    'tabs--900__face': media900 === true,
    'tabs--600__face': media600 === true,
    'tabs--600l__face': media600l === true
  });
  var tabsSliderClass = classnames_default()({
    'tabs__slider': media1728 === true,
    'tabs--1133__slider': media1133 === true,
    'tabs--744__slider': media744 === true,
    'tabs--744l__slider': media744l === true,
    'tabs--375__slider': media375 === true,
    'tabs--275__slider': media275 === true,
    'tabs--1300__slider': media1300 === true,
    'tabs--900__slider': media900 === true,
    'tabs--600__slider': media600 === true,
    'tabs--600l__slider': media600l === true
  });
  var menuRef = (0,react.useRef)(null);
  var tabsBodyRef = (0,react.useRef)(null);
  var tabsFaceRef = (0,react.useRef)(null);
  var _useState = (0,react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    height = _useState4[0],
    setHeight = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isHoverBody = _useState6[0],
    setIsHoverBody = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isHoverFace = _useState8[0],
    setIsHoverFace = _useState8[1];
  var _useState9 = (0,react.useState)('body'),
    _useState10 = _slicedToArray(_useState9, 2),
    isClickedButton = _useState10[0],
    setIsClickedButton = _useState10[1];
  var imagesBody = SliderProcContentBody;
  var imagesFace = SliderProcContentFace;
  var _useScrollDirection = (0,react_use_scroll_direction_esm/* useScrollDirection */.Y)(),
    isScrolling = _useScrollDirection.isScrolling;
  var _useState11 = (0,react.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    isMenuBodyFace = _useState12[0],
    setIsMenuBodyFace = _useState12[1];
  var animationScaleY = function animationScaleY(current, scaleY, opacity, height, duration) {
    gsap/* default */.Ay.timeline().to(current, {
      scaleY: scaleY,
      opacity: opacity,
      duration: duration
    }).to(current, {
      height: height,
      duration: duration - 1,
      delay: -1
    });
  };
  (0,react.useLayoutEffect)(function () {
    setWidth(tabsBodyRef.current.clientWidth);
    setHeight(tabsBodyRef.current.clientHeight);
  }, []);
  (0,react.useLayoutEffect)(function () {
    var headerHeight = 120;
    var handleScroll = function handleScroll() {
      if (media1728 || media1300 || media1133 || media900 || media744) {
        if (menuRef.current.getBoundingClientRect().top < headerHeight - 80) {
          setIsMenuBodyFace(false);
          isClickedButton === 'body' ? animationScaleY(tabsBodyRef.current, 0, 0, 0, 2) : isClickedButton === 'face' ? animationScaleY(tabsFaceRef.current, 0, 0, 0, 2) : null;
        } else {
          setIsMenuBodyFace(true);
          isClickedButton === 'body' ? animationScaleY(tabsBodyRef.current, 1, 1, 484, 2) : isClickedButton === 'face' ? animationScaleY(tabsFaceRef.current, 1, 1, 484, 2) : null;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);
  var tabsBodyAllClass = classnames_default()("".concat(tabsClass), "".concat(tabsProceduresClass), {
    'tabs-active': isClickedButton === 'body' && media1728 === true,
    'tabs-disactive': isClickedButton !== 'body' && media1728 === true,
    'tabs-active--1300': isClickedButton === 'body' && media1300 === true,
    'tabs-disactive--1300': isClickedButton !== 'body' && media1300 === true,
    'tabs-active--1133': isClickedButton === 'body' && media1133 === true,
    'tabs-disactive--1133': isClickedButton !== 'body' && media1133 === true,
    'tabs-active--900': isClickedButton === 'body' && media900 === true,
    'tabs-disactive--900': isClickedButton !== 'body' && media900 === true,
    'tabs-active--744': isClickedButton === 'body' && media744 === true,
    'tabs-disactive--744': isClickedButton !== 'body' && media744 === true,
    'tabs-active--744l': isClickedButton === 'body' && media744l === true,
    'tabs-disactive--744l': isClickedButton !== 'body' && media744l === true,
    'tabs-active--600': isClickedButton === 'body' && media600 === true,
    'tabs-disactive--600': isClickedButton !== 'body' && media600 === true,
    'tabs-active--600l': isClickedButton === 'body' && media600l === true,
    'tabs-disactive--600l': isClickedButton !== 'body' && media600l === true,
    'tabs-active--375': isClickedButton === 'body' && media375 === true,
    'tabs-disactive--375': isClickedButton !== 'body' && media375 === true,
    'tabs-active--275': isClickedButton === 'body' && media275 === true,
    'tabs-disactive--275': isClickedButton !== 'body' && media275 === true
  });
  var tabsFaceAllClass = classnames_default()("".concat(tabsClass), "".concat(tabsProceduresClass), {
    'tabs-active': isClickedButton === 'face' && media1728 === true,
    'tabs-disactive': isClickedButton !== 'face' && media1728 === true,
    'tabs-active--1300': isClickedButton === 'face' && media1300 === true,
    'tabs-disactive--1300': isClickedButton !== 'face' && media1300 === true,
    'tabs-active--1133': isClickedButton === 'face' && media1133 === true,
    'tabs-disactive--1133': isClickedButton !== 'face' && media1133 === true,
    'tabs-active--900': isClickedButton === 'face' && media900 === true,
    'tabs-disactive--900': isClickedButton !== 'face' && media900 === true,
    'tabs-active--744': isClickedButton === 'face' && media744 === true,
    'tabs-disactive--744': isClickedButton !== 'face' && media744 === true,
    'tabs-active--744l': isClickedButton === 'face' && media744l === true,
    'tabs-disactive--744l': isClickedButton !== 'face' && media744l === true,
    'tabs-active--600': isClickedButton === 'face' && media600 === true,
    'tabs-disactive--600': isClickedButton !== 'face' && media600 === true,
    'tabs-active--600l': isClickedButton === 'face' && media600l === true,
    'tabs-disactive--600l': isClickedButton !== 'face' && media600l === true,
    'tabs-active--375': isClickedButton === 'face' && media375 === true,
    'tabs-disactive--375': isClickedButton !== 'face' && media375 === true,
    'tabs-active--275': isClickedButton === 'face' && media275 === true,
    'tabs-disactive--275': isClickedButton !== 'face' && media275 === true
  });
  var menuAllClass = classnames_default()("".concat(menuClass), "".concat(menuProceduresClass), {
    'menu-body': isClickedButton === 'body' && media1728 === true,
    'menu-face': isClickedButton === 'face' && media1728 === true,
    'menu-body--1300': isClickedButton === 'body' && media1300 === true,
    'menu-face--1300': isClickedButton === 'face' && media1300 === true,
    'menu-body--1133': isClickedButton === 'body' && media1133 === true,
    'menu-face--1133': isClickedButton === 'face' && media1133 === true,
    'menu-body--900': isClickedButton === 'body' && media900 === true,
    'menu-face--900': isClickedButton === 'face' && media900 === true,
    'menu-body--744': isClickedButton === 'body' && media744 === true,
    'menu-face--744': isClickedButton === 'face' && media744 === true,
    'menu-body--744l': isClickedButton === 'body' && media744l === true,
    'menu-face--744l': isClickedButton === 'face' && media744l === true,
    'menu-body--600': isClickedButton === 'body' && media600 === true,
    'menu-face--600': isClickedButton === 'face' && media600 === true,
    'menu-body--600l': isClickedButton === 'body' && media600l === true,
    'menu-face--600l': isClickedButton === 'face' && media600l === true,
    'menu-body--375': isClickedButton === 'body' && media375 === true,
    'menu-face--375': isClickedButton === 'face' && media375 === true,
    'menu-body--275': isClickedButton === 'body' && media275 === true,
    'menu-face--275': isClickedButton === 'face' && media275 === true
  });
  var bodyClass = classnames_default()("".concat(menuLinkClass), "".concat(menuLinkTabClass), {
    'menu__tab-active': isClickedButton === 'body' && media1728 === true,
    'menu__tab-disactive': isClickedButton !== 'body' && media1728 === true,
    'menu__link-hover': isHoverBody && media1728 === true,
    'menu--1300__tab-active': isClickedButton === 'body' && media1300 === true,
    'menu--1300__tab-disactive': isClickedButton !== 'body' && media1300 === true,
    'menu--1300__link-hover': isHoverBody && media1300 === true,
    'menu--1133__tab-active': isClickedButton === 'body' && media1133 === true,
    'menu--1133__tab-disactive': isClickedButton !== 'body' && media1133 === true,
    'menu--1133__link-hover': isHoverBody && media1133 === true,
    'menu--900__tab-active': isClickedButton === 'body' && media900 === true,
    'menu--900__tab-disactive': isClickedButton !== 'body' && media900 === true,
    'menu--900__link-hover': isHoverBody && media900 === true,
    'menu--744__tab-active': isClickedButton === 'body' && media744 === true,
    'menu--744__tab-disactive': isClickedButton !== 'body' && media744 === true,
    'menu--744__link-hover': isHoverBody && media744 === true,
    'menu--744l__tab-active': isClickedButton === 'body' && media744l === true,
    'menu--744l__tab-disactive': isClickedButton !== 'body' && media744l === true,
    'menu--744l__link-hover': isHoverBody && media744l === true,
    'menu--600__tab-active': isClickedButton === 'body' && media600 === true,
    'menu--600__tab-disactive': isClickedButton !== 'body' && media600 === true,
    'menu--600__link-hover': isHoverBody && media600 === true,
    'menu--600l__tab-active': isClickedButton === 'body' && media600l === true,
    'menu--600l__tab-disactive': isClickedButton !== 'body' && media600l === true,
    'menu--600l__link-hover': isHoverBody && media600l === true,
    'menu--375__tab-active': isClickedButton === 'body' && media375 === true,
    'menu--375__tab-disactive': isClickedButton !== 'body' && media375 === true,
    'menu--375__link-hover': isHoverBody && media375 === true,
    'menu--275__tab-active': isClickedButton === 'body' && media275 === true,
    'menu--275__tab-disactive': isClickedButton !== 'body' && media275 === true,
    'menu--275__link-hover': isHoverBody && media275 === true
  });
  var faceClass = classnames_default()("".concat(menuLinkClass), "".concat(menuLinkTabClass), {
    'menu__tab-active': isClickedButton === 'face' && media1728 === true,
    'menu__tab-disactive': isClickedButton !== 'face' && media1728 === true,
    'menu__link-hover': isHoverFace && media1728 === true,
    'menu--1300__tab-active': isClickedButton === 'face' && media1300 === true,
    'menu--1300__tab-disactive': isClickedButton !== 'face' && media1300 === true,
    'menu--1300__link-hover': isHoverFace && media1300 === true,
    'menu--1133__tab-active': isClickedButton === 'face' && media1133 === true,
    'menu--1133__tab-disactive': isClickedButton !== 'face' && media1133 === true,
    'menu--1133__link-hover': isHoverFace && media1133 === true,
    'menu--900__tab-active': isClickedButton === 'face' && media900 === true,
    'menu--900__tab-disactive': isClickedButton !== 'face' && media900 === true,
    'menu--900__link-hover': isHoverFace && media900 === true,
    'menu--744__tab-active': isClickedButton === 'face' && media744 === true,
    'menu--744__tab-disactive': isClickedButton !== 'face' && media744 === true,
    'menu--744__link-hover': isHoverFace && media744 === true,
    'menu--744l__tab-active': isClickedButton === 'face' && media744l === true,
    'menu--744l__tab-disactive': isClickedButton !== 'face' && media744l === true,
    'menu--744l__link-hover': isHoverFace && media744l === true,
    'menu--600__tab-active': isClickedButton === 'face' && media600 === true,
    'menu--600__tab-disactive': isClickedButton !== 'face' && media600 === true,
    'menu--600__link-hover': isHoverFace && media600 === true,
    'menu--600l__tab-active': isClickedButton === 'face' && media600l === true,
    'menu--600l__tab-disactive': isClickedButton !== 'face' && media600l === true,
    'menu--600l__link-hover': isHoverFace && media600l === true,
    'menu--375__tab-active': isClickedButton === 'face' && media375 === true,
    'menu--375__tab-disactive': isClickedButton !== 'face' && media375 === true,
    'menu--375__link-hover': isHoverFace && media375 === true,
    'menu--275__tab-active': isClickedButton === 'face' && media275 === true,
    'menu--275__tab-disactive': isClickedButton !== 'face' && media275 === true,
    'menu--275__link-hover': isHoverFace && media275 === true
  });
  var animationIn = function animationIn(current, opacity, scale, duration) {
    gsap/* default */.Ay.fromTo(current, {
      opacity: 1,
      scale: 1
    }, {
      opacity: opacity,
      scale: scale,
      duration: duration
    });
  };
  var animationOut = function animationOut(current, opacity, scale, duration) {
    gsap/* default */.Ay.fromTo(current, {
      opacity: opacity,
      scale: scale
    }, {
      opacity: 1,
      scale: 1,
      duration: duration
    });
  };
  var handleClickTab0 = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return delay(200);
          case 2:
            animationIn(menuRef.current, 0.7, 0.99, 0.2);
            animationIn(tabsBodyRef.current, 0.7, 0.99, 0.4);
            _context.next = 6;
            return delay(400);
          case 6:
            setIsClickedButton('body');
            animationOut(menuRef.current, 0.7, 0.99, 0.2);
            animationIn(props.bodyRef.current, 0.7, 0.99, 0.2);
            animationOut(props.bodyRef.current, 0.7, 0.99, 0.2);
            animationIn(props.faceRef.current, 0.7, 1, 0.2);
            _context.next = 13;
            return delay(200);
          case 13:
            animationOut(tabsBodyRef.current, 0.7, 0.99, 0.4);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleClickTab0() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleClickTab1 = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return delay(200);
          case 2:
            animationIn(menuRef.current, 0.7, 0.99, 0.2);
            animationIn(tabsFaceRef.current, 0.7, 0.99, 0.4);
            _context2.next = 6;
            return delay(400);
          case 6:
            setIsClickedButton('face');
            animationOut(menuRef.current, 0.7, 0.99, 0.2);
            animationIn(props.faceRef.current, 0.7, 0.99, 0.2);
            animationOut(props.faceRef.current, 0.7, 0.99, 0.2);
            animationIn(props.bodyRef.current, 0.7, 1, 0.2);
            _context2.next = 13;
            return delay(200);
          case 13:
            animationOut(tabsFaceRef.current, 0.7, 0.99, 0.4);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleClickTab1() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleBodyMouseEnter = function handleBodyMouseEnter() {
    setIsHoverBody(true);
  };
  var handleBodyMouseLeave = function handleBodyMouseLeave() {
    setIsHoverBody(false);
  };
  var handleFaceMouseEnter = function handleFaceMouseEnter() {
    setIsHoverFace(true);
  };
  var handleFaceMouseLeave = function handleFaceMouseLeave() {
    setIsHoverFace(false);
  };
  if (props.bodyRef === null || props.faceRef === null) throw new Error('ERROR_PROC_TABS_PROPS_REFS');
  if (menuRef === null || tabsBodyRef === null || tabsFaceRef === null) throw new Error('ERROR_PROC_TABS_REFS');
  if (imagesBody.length < 4 || imagesFace.length < 4) throw new Error('ERROR_PROC_TABS_IMAGES');
  var sliderTypeB = 'b';
  var sliderTypeF = 'f';
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: proceduresTabsClass
  }, /*#__PURE__*/react.createElement("div", {
    className: proceduresMenuClass
  }, /*#__PURE__*/react.createElement("menu", {
    className: menuAllClass,
    ref: menuRef,
    style: isMenuBodyFace === true ? {
      opacity: 1,
      cursor: 'pointer',
      animationPlayState: 'running'
    } : isMenuBodyFace === false ? {
      opacity: 0.1,
      cursor: 'default',
      animationPlayState: 'paused'
    } : null
  }, (0,funcProps/* default */.A)(props).map(function (prop, i) {
    return /*#__PURE__*/react.createElement("li", {
      className: "".concat(menuItemClass, " ").concat(menuItemTabClass),
      key: "liMenuItemTab".concat(i)
    }, /*#__PURE__*/react.createElement(ui/* UiButton */.Bv, {
      key: "UiButtonProceduresTab".concat(i),
      id: prop.id,
      className: i === 0 ? bodyClass : faceClass,
      ref: i === 0 ? props.bodyRef : i === 1 ? props.faceRef : null,
      onClick: i === 0 ? handleClickTab0 : i === 1 ? handleClickTab1 : null,
      onMouseEnter: i === 0 ? handleBodyMouseEnter : i === 1 ? handleFaceMouseEnter : null,
      onMouseLeave: i === 0 ? handleBodyMouseLeave : i === 1 ? handleFaceMouseLeave : null,
      disabled: isMenuBodyFace ? false : true,
      style: isMenuBodyFace ? {
        cursor: 'pointer'
      } : {
        cursor: 'default'
      }
    }, prop.children));
  }))), /*#__PURE__*/react.createElement("div", {
    id: "tab-b",
    ref: tabsBodyRef,
    className: tabsBodyAllClass
  }, /*#__PURE__*/react.createElement("div", {
    className: tabsBodyClass
  }, /*#__PURE__*/react.createElement("div", {
    className: tabsSliderClass
  }, /*#__PURE__*/react.createElement(ProcSliderContext/* ProcSliderProvider */.R, {
    data: dataProceduresSliderBody_namespaceObject,
    viewportWidth: width,
    viewportHeight: height,
    images: imagesBody,
    containerWidth: props.containerWidth,
    sliderType: sliderTypeB
  })))), /*#__PURE__*/react.createElement("div", {
    id: "tab-f",
    ref: tabsFaceRef,
    className: tabsFaceAllClass
  }, /*#__PURE__*/react.createElement("div", {
    className: tabsFaceClass
  }, /*#__PURE__*/react.createElement("div", {
    className: tabsSliderClass
  }, /*#__PURE__*/react.createElement(ProcSliderContext/* ProcSliderProvider */.R, {
    data: dataProceduresSliderFace_namespaceObject,
    viewportWidth: width,
    viewportHeight: height,
    images: imagesFace,
    containerWidth: props.containerWidth,
    sliderType: sliderTypeF
  }))))));
};
;// ./src/components/sections/procedures/procedures_tabs/index.js

;// ./src/data/data_procedures/data_procedures_tabs/dataProceduresTabs.json
const dataProceduresTabs_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":"procedures-link-tab-0","children":"Тело"},{"id":"procedures-link-tab-1","children":"Лицо"}]');
;// ./src/components/sections/procedures/Procedures.jsx
function Procedures_slicedToArray(r, e) { return Procedures_arrayWithHoles(r) || Procedures_iterableToArrayLimit(r, e) || Procedures_unsupportedIterableToArray(r, e) || Procedures_nonIterableRest(); }
function Procedures_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Procedures_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return Procedures_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Procedures_arrayLikeToArray(r, a) : void 0; } }
function Procedures_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Procedures_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Procedures_arrayWithHoles(r) { if (Array.isArray(r)) return r; }







function Procedures(props) {
  var queryMedia = (0,funcQueryMedia/* default */.A)();
  var media1728 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query1728);
  var media1133 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query1133);
  var media744 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query744);
  var media744l = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query744l);
  var media375 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query375);
  var media275 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query275);
  var media1300 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query1300);
  var media900 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query900);
  var media600 = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query600);
  var media600l = (0,hooks/* useMediaQuery */.Ub)(queryMedia.query600l);
  var proceduresClass = classnames_default()({
    'procedures': media1728 === true,
    'procedures--1133': media1133 === true,
    'procedures--744': media744 === true,
    'procedures--744l': media744l === true,
    'procedures--375': media375 === true,
    'procedures--275': media275 === true,
    'procedures--1300': media1300 === true,
    'procedures--900': media900 === true,
    'procedures--600': media600 === true,
    'procedures--600l': media600l === true
  });
  var containerClass = classnames_default()({
    'container': media1728 === true,
    'container--1133': media1133 === true,
    'container--744': media744 === true,
    'container--744l': media744l === true,
    'container--375': media375 === true,
    'container--275': media275 === true,
    'container--1300': media1300 === true,
    'container--900': media900 === true,
    'container--600': media600 === true,
    'container--600l': media600l === true
  });
  var containerProceduresClass = classnames_default()({
    'container-procedures': media1728 === true,
    'container-procedures--1133': media1133 === true,
    'container-procedures--744': media744 === true,
    'container-procedures--744l': media744l === true,
    'container-procedures--375': media375 === true,
    'container-procedures--275': media275 === true,
    'container-procedures--1300': media1300 === true,
    'container-procedures--900': media900 === true,
    'container-procedures--600': media600 === true,
    'container-procedures--600l': media600l === true
  });
  var containerRef = (0,react.useRef)(null);
  var _useState = (0,react.useState)(0),
    _useState2 = Procedures_slicedToArray(_useState, 2),
    containerWidth = _useState2[0],
    setContainerWidth = _useState2[1];
  (0,react.useLayoutEffect)(function () {
    var width = containerRef.current.offsetWidth;
    setContainerWidth(width);
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("section", {
    id: "procedures",
    className: proceduresClass
  }, /*#__PURE__*/react.createElement("div", {
    ref: containerRef,
    className: "".concat(containerClass, " ").concat(containerProceduresClass)
  }, /*#__PURE__*/react.createElement(ProceduresTabs, {
    bodyRef: props.bodyRef,
    faceRef: props.faceRef,
    data: dataProceduresTabs_namespaceObject,
    containerWidth: containerWidth
  }))));
}

/***/ })

}]);