/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/default_mojisyu.ts":
/*!********************************!*\
  !*** ./src/default_mojisyu.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.defaultMojisyu = void 0;\r\nconst mojisyu_patterns_1 = __webpack_require__(/*! ./mojisyu_patterns */ \"./src/mojisyu_patterns.ts\");\r\nconst mojisyu_ragexplist_1 = __webpack_require__(/*! ./mojisyu_ragexplist */ \"./src/mojisyu_ragexplist.ts\");\r\nconst mojisyu_range_1 = __webpack_require__(/*! ./mojisyu_range */ \"./src/mojisyu_range.ts\");\r\nexports.defaultMojisyu = {\r\n    ZE: new mojisyu_range_1.TypeMojisyuRange(0xff01, 0xff5e),\r\n    HE: new mojisyu_range_1.TypeMojisyuRange(0x0021, 0x007e),\r\n    HG: new mojisyu_range_1.TypeMojisyuRange(0x3041, 0x3096),\r\n    KK: new mojisyu_range_1.TypeMojisyuRange(0x30a1, 0x30f6),\r\n    HS: new mojisyu_patterns_1.TypeMojisyuPatterns([[/(\\s|\\u00A0)/g, { ZS: \"　\" }]]),\r\n    ZS: new mojisyu_patterns_1.TypeMojisyuPatterns([[/(\\u3000)/g, { HS: \" \" }]]),\r\n    HK: new mojisyu_ragexplist_1.TypeMojisyuRegexpList(/([\\uff66-\\uff9c]\\uff9e)|([\\uff8a-\\uff8e]\\uff9f)|([\\uff61-\\uff9f])/g, // 半角カナ\r\n    [\r\n        \"｡\",\r\n        \"｢\",\r\n        \"｣\",\r\n        \"､\",\r\n        \"･\",\r\n        \"ｦ\",\r\n        \"ｧ\",\r\n        \"ｨ\",\r\n        \"ｩ\",\r\n        \"ｪ\",\r\n        \"ｫ\",\r\n        \"ｬ\",\r\n        \"ｭ\",\r\n        \"ｮ\",\r\n        \"ｯ\",\r\n        \"ｰ\",\r\n        \"ｱ\",\r\n        \"ｲ\",\r\n        \"ｳ\",\r\n        \"ｴ\",\r\n        \"ｵ\",\r\n        \"ｶ\",\r\n        \"ｷ\",\r\n        \"ｸ\",\r\n        \"ｹ\",\r\n        \"ｺ\",\r\n        \"ｻ\",\r\n        \"ｼ\",\r\n        \"ｽ\",\r\n        \"ｾ\",\r\n        \"ｿ\",\r\n        \"ﾀ\",\r\n        \"ﾁ\",\r\n        \"ﾂ\",\r\n        \"ﾃ\",\r\n        \"ﾄ\",\r\n        \"ﾅ\",\r\n        \"ﾆ\",\r\n        \"ﾇ\",\r\n        \"ﾈ\",\r\n        \"ﾉ\",\r\n        \"ﾊ\",\r\n        \"ﾋ\",\r\n        \"ﾌ\",\r\n        \"ﾍ\",\r\n        \"ﾎ\",\r\n        \"ﾏ\",\r\n        \"ﾐ\",\r\n        \"ﾑ\",\r\n        \"ﾒ\",\r\n        \"ﾓ\",\r\n        \"ﾔ\",\r\n        \"ﾕ\",\r\n        \"ﾖ\",\r\n        \"ﾗ\",\r\n        \"ﾘ\",\r\n        \"ﾙ\",\r\n        \"ﾚ\",\r\n        \"ﾛ\",\r\n        \"ﾜ\",\r\n        \"ﾝ\",\r\n        \"ﾞ\",\r\n        \"ﾟ\",\r\n        \"ｦﾞ\",\r\n        \"ｳﾞ\",\r\n        \"ｶﾞ\",\r\n        \"ｷﾞ\",\r\n        \"ｸﾞ\",\r\n        \"ｹﾞ\",\r\n        \"ｺﾞ\",\r\n        \"ｻﾞ\",\r\n        \"ｼﾞ\",\r\n        \"ｽﾞ\",\r\n        \"ｾﾞ\",\r\n        \"ｿﾞ\",\r\n        \"ﾀﾞ\",\r\n        \"ﾁﾞ\",\r\n        \"ﾂﾞ\",\r\n        \"ﾃﾞ\",\r\n        \"ﾄﾞ\",\r\n        \"ﾊﾞ\",\r\n        \"ﾊﾟ\",\r\n        \"ﾋﾞ\",\r\n        \"ﾋﾟ\",\r\n        \"ﾌﾞ\",\r\n        \"ﾌﾟ\",\r\n        \"ﾍﾞ\",\r\n        \"ﾍﾟ\",\r\n        \"ﾎﾞ\",\r\n        \"ﾎﾟ\",\r\n        \"ﾜﾞ\",\r\n    ]),\r\n    ZK: new mojisyu_ragexplist_1.TypeMojisyuRegexpList(/([\\u30a1-\\u30f6])/g, //全角カナ (半角カナ変換用)\r\n    [\r\n        \"。\",\r\n        \"「\",\r\n        \"」\",\r\n        \"、\",\r\n        \"・\",\r\n        \"ヲ\",\r\n        \"ァ\",\r\n        \"ィ\",\r\n        \"ゥ\",\r\n        \"ェ\",\r\n        \"ォ\",\r\n        \"ャ\",\r\n        \"ュ\",\r\n        \"ョ\",\r\n        \"ッ\",\r\n        \"ー\",\r\n        \"ア\",\r\n        \"イ\",\r\n        \"ウ\",\r\n        \"エ\",\r\n        \"オ\",\r\n        \"カ\",\r\n        \"キ\",\r\n        \"ク\",\r\n        \"ケ\",\r\n        \"コ\",\r\n        \"サ\",\r\n        \"シ\",\r\n        \"ス\",\r\n        \"セ\",\r\n        \"ソ\",\r\n        \"タ\",\r\n        \"チ\",\r\n        \"ツ\",\r\n        \"テ\",\r\n        \"ト\",\r\n        \"ナ\",\r\n        \"ニ\",\r\n        \"ヌ\",\r\n        \"ネ\",\r\n        \"ノ\",\r\n        \"ハ\",\r\n        \"ヒ\",\r\n        \"フ\",\r\n        \"ヘ\",\r\n        \"ホ\",\r\n        \"マ\",\r\n        \"ミ\",\r\n        \"ム\",\r\n        \"メ\",\r\n        \"モ\",\r\n        \"ヤ\",\r\n        \"ユ\",\r\n        \"ヨ\",\r\n        \"ラ\",\r\n        \"リ\",\r\n        \"ル\",\r\n        \"レ\",\r\n        \"ロ\",\r\n        \"ワ\",\r\n        \"ン\",\r\n        \"゛\",\r\n        \"゜\",\r\n        \"ヺ\",\r\n        \"ヴ\",\r\n        \"ガ\",\r\n        \"ギ\",\r\n        \"グ\",\r\n        \"ゲ\",\r\n        \"ゴ\",\r\n        \"ザ\",\r\n        \"ジ\",\r\n        \"ズ\",\r\n        \"ゼ\",\r\n        \"ゾ\",\r\n        \"ダ\",\r\n        \"ヂ\",\r\n        \"ヅ\",\r\n        \"デ\",\r\n        \"ド\",\r\n        \"バ\",\r\n        \"パ\",\r\n        \"ビ\",\r\n        \"ピ\",\r\n        \"ブ\",\r\n        \"プ\",\r\n        \"ベ\",\r\n        \"ペ\",\r\n        \"ボ\",\r\n        \"ポ\",\r\n        \"ヷ\",\r\n    ]),\r\n};\r\n\n\n//# sourceURL=webpack://moji/./src/default_mojisyu.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.moji = void 0;\r\nconst moji_1 = __webpack_require__(/*! ./moji */ \"./src/moji.ts\");\r\nconst default_mojisyu_1 = __webpack_require__(/*! ./default_mojisyu */ \"./src/default_mojisyu.ts\");\r\nconst mojisyu_range_1 = __webpack_require__(/*! ./mojisyu_range */ \"./src/mojisyu_range.ts\");\r\nconst mojisyu_ragexplist_1 = __webpack_require__(/*! ./mojisyu_ragexplist */ \"./src/mojisyu_ragexplist.ts\");\r\nconst mojisyu_patterns_1 = __webpack_require__(/*! ./mojisyu_patterns */ \"./src/mojisyu_patterns.ts\");\r\nlet mojisyu = {};\r\n/**\r\n * @param {string} str\r\n * @return {Moji}\r\n */\r\nfunction moji(str) {\r\n    return new moji_1.Moji(str, mojisyu);\r\n}\r\nexports.moji = moji;\r\nmoji.addMojisyu = (obj) => {\r\n    for (const m of Object.keys(obj)) {\r\n        const vm = obj[m];\r\n        switch (vm.kind) {\r\n            case \"range\":\r\n                mojisyu[m] = new mojisyu_range_1.MojisyuRange(m, vm);\r\n                break;\r\n            case \"regexpList\":\r\n                mojisyu[m] = new mojisyu_ragexplist_1.MojisyuRegexpList(m, vm);\r\n                break;\r\n            case \"patterns\":\r\n                mojisyu[m] = new mojisyu_patterns_1.MojisyuPatterns(m, vm);\r\n                break;\r\n        }\r\n    }\r\n};\r\nmoji.addMojisyu(default_mojisyu_1.defaultMojisyu);\r\n\n\n//# sourceURL=webpack://moji/./src/index.ts?");

/***/ }),

/***/ "./src/moji.ts":
/*!*********************!*\
  !*** ./src/moji.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\r\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\r\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\r\n};\r\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\r\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\r\n};\r\nvar _Moji_str;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Moji = void 0;\r\n/**\r\n * @type {Moji}\r\n */\r\nclass Moji {\r\n    /**\r\n     * @param {String} str\r\n     * @param {Object} mojisyu\r\n     */\r\n    constructor(str, mojisyu) {\r\n        _Moji_str.set(this, void 0);\r\n        __classPrivateFieldSet(this, _Moji_str, str, \"f\");\r\n        this._mojisyu = { ...mojisyu };\r\n    }\r\n    /**\r\n     * 変換\r\n     * @param {String} fromName 変換前の文字種名\r\n     * @param {String} toName 変換後の文字種名\r\n     * @return {Moji}\r\n     */\r\n    convert(fromName, toName) {\r\n        if (!toName) {\r\n            const m = fromName.split(\"to\");\r\n            return this.convert(m[0], m[1]);\r\n        }\r\n        const from = this._mojisyu[fromName];\r\n        const to = this._mojisyu[toName];\r\n        __classPrivateFieldSet(this, _Moji_str, from.convert(__classPrivateFieldGet(this, _Moji_str, \"f\"), to), \"f\");\r\n        return this;\r\n    }\r\n    /**\r\n     * @param {string} mojisyuName フィルタする文字種名\r\n     * @return {Moji}\r\n     */\r\n    filter(mojisyuName) {\r\n        __classPrivateFieldSet(this, _Moji_str, this._mojisyu[mojisyuName].filter(__classPrivateFieldGet(this, _Moji_str, \"f\")), \"f\");\r\n        return this;\r\n    }\r\n    /**\r\n     * @param {string} mojisyuName\r\n     * @return {Moji}\r\n     */\r\n    reject(mojisyuName) {\r\n        __classPrivateFieldSet(this, _Moji_str, this._mojisyu[mojisyuName].reject(__classPrivateFieldGet(this, _Moji_str, \"f\")), \"f\");\r\n        return this;\r\n    }\r\n    /**\r\n     * @return {string}\r\n     */\r\n    toString() {\r\n        return __classPrivateFieldGet(this, _Moji_str, \"f\");\r\n    }\r\n    /**\r\n     * @param {string} separateString\r\n     * @return {string}\r\n     */\r\n    toCharCode(separateString) {\r\n        const ss = separateString ?? \"|\";\r\n        return __classPrivateFieldGet(this, _Moji_str, \"f\")\r\n            .split(\"\")\r\n            .map((s) => {\r\n            return s.charCodeAt(0);\r\n        })\r\n            .join(ss);\r\n    }\r\n    /**\r\n     * 渡されたmethodをそのままStringに渡す\r\n     * @param {string} method\r\n     * @param {args} args\r\n     * @return {Moji}\r\n     */\r\n    string(method, ...args) {\r\n        __classPrivateFieldSet(this, _Moji_str, String.prototype[method].call(__classPrivateFieldGet(this, _Moji_str, \"f\"), ...args), \"f\");\r\n        return this;\r\n    }\r\n}\r\nexports.Moji = Moji;\r\n_Moji_str = new WeakMap();\r\n\n\n//# sourceURL=webpack://moji/./src/moji.ts?");

/***/ }),

/***/ "./src/mojisyu_patterns.ts":
/*!*********************************!*\
  !*** ./src/mojisyu_patterns.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MojisyuPatterns = exports.TypeMojisyuPatterns = void 0;\r\nclass TypeMojisyuPatterns {\r\n    constructor(patterns) {\r\n        this.kind = \"patterns\";\r\n        this.patterns = patterns;\r\n    }\r\n}\r\nexports.TypeMojisyuPatterns = TypeMojisyuPatterns;\r\nfunction regexpMap(str, regexp, cb) {\r\n    return str.replace(regexp, (s) => {\r\n        return cb(s);\r\n    });\r\n}\r\nclass MojisyuPatterns {\r\n    /**\r\n     * @param {String} name\r\n     * @param {TypeMojisyuPatterns} mObj\r\n     */\r\n    constructor(name, mObj) {\r\n        this.name = name;\r\n        this.props = { ...mObj };\r\n    }\r\n    /**\r\n     * @param {string} str\r\n     * @param {Mojisyu} to\r\n     * @return {string}\r\n     * @private\r\n     */\r\n    convert(str, to) {\r\n        return this.props.patterns\r\n            .map((pattern) => {\r\n            return regexpMap(str, pattern[0], (s) => {\r\n                return pattern[1][to.name];\r\n            });\r\n        })\r\n            .join(\"\");\r\n    }\r\n    /**\r\n     * @param {string} str\r\n     * @return {string}\r\n     * @private\r\n     */\r\n    filter(str) {\r\n        const r = [];\r\n        this.props.patterns.forEach((pattern) => {\r\n            regexpMap(str, pattern[0], (s) => {\r\n                r.push(s);\r\n                return s;\r\n            });\r\n        });\r\n        return r.join(\"\");\r\n    }\r\n    /**\r\n     * @param {string} str\r\n     * @return {string}\r\n     * @private\r\n     */\r\n    reject(str) {\r\n        this.props.patterns.forEach((pattern) => {\r\n            regexpMap(str, pattern[0], (s) => {\r\n                str = str.replace(s, \"\");\r\n                return str;\r\n            });\r\n        });\r\n        return str;\r\n    }\r\n}\r\nexports.MojisyuPatterns = MojisyuPatterns;\r\n\n\n//# sourceURL=webpack://moji/./src/mojisyu_patterns.ts?");

/***/ }),

/***/ "./src/mojisyu_ragexplist.ts":
/*!***********************************!*\
  !*** ./src/mojisyu_ragexplist.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MojisyuRegexpList = exports.TypeMojisyuRegexpList = void 0;\r\nclass TypeMojisyuRegexpList {\r\n    constructor(regexp, list) {\r\n        this.kind = \"regexpList\";\r\n        this.regexp = regexp;\r\n        this.list = list;\r\n    }\r\n}\r\nexports.TypeMojisyuRegexpList = TypeMojisyuRegexpList;\r\nfunction regexpMap(str, regexp, cb) {\r\n    return str.replace(regexp, (s) => {\r\n        return cb(s);\r\n    });\r\n}\r\nclass MojisyuRegexpList {\r\n    /**\r\n     * @param {String} name\r\n     * @param {TypeMojisyuRegexpList} mObj\r\n     */\r\n    constructor(name, mObj) {\r\n        this.name = name;\r\n        this.props = { ...mObj };\r\n    }\r\n    /**\r\n     * @param {string} str\r\n     * @param {Mojisyu} to\r\n     * @return {string}\r\n     */\r\n    convert(str, to) {\r\n        return regexpMap(str, this.props.regexp, (s) => {\r\n            const i = this.props.list.indexOf(s);\r\n            if (i === -1)\r\n                return s;\r\n            return to.props.list[i];\r\n        });\r\n    }\r\n    /**\r\n     * @param {string} str\r\n     * @return {string}\r\n     */\r\n    filter(str) {\r\n        const r = [];\r\n        regexpMap(str, this.props.regexp, (s) => {\r\n            const i = this.props.list.indexOf(s);\r\n            if (i !== -1) {\r\n                r.push(s);\r\n            }\r\n            return s;\r\n        });\r\n        return r.join(\"\");\r\n    }\r\n    /**\r\n     * @param {string} str\r\n     * @return {string}\r\n     */\r\n    reject(str) {\r\n        regexpMap(str, this.props.regexp, (s) => {\r\n            const i = this.props.list.indexOf(s);\r\n            if (i !== -1) {\r\n                str = str.replace(s, \"\");\r\n            }\r\n            return s;\r\n        });\r\n        return str;\r\n    }\r\n}\r\nexports.MojisyuRegexpList = MojisyuRegexpList;\r\n\n\n//# sourceURL=webpack://moji/./src/mojisyu_ragexplist.ts?");

/***/ }),

/***/ "./src/mojisyu_range.ts":
/*!******************************!*\
  !*** ./src/mojisyu_range.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MojisyuRange = exports.TypeMojisyuRange = void 0;\r\nclass TypeMojisyuRange {\r\n    constructor(start, end) {\r\n        this.kind = \"range\";\r\n        this.start = start;\r\n        this.end = end;\r\n    }\r\n}\r\nexports.TypeMojisyuRange = TypeMojisyuRange;\r\nfunction rangeMap(str, startCode, endCode, cb) {\r\n    return str.split(\"\").map((s) => {\r\n        const c = s.charCodeAt(0);\r\n        return cb(c > startCode && c < endCode, s, c);\r\n    });\r\n}\r\nclass MojisyuRange {\r\n    /**\r\n     * @param {String} name\r\n     * @param {TypeMojisyuRange} mObj\r\n     */\r\n    constructor(name, mObj) {\r\n        this.name = name;\r\n        this.props = { ...mObj };\r\n    }\r\n    /**\r\n     * @param {string} str\r\n     * @param {Mojisyu} to\r\n     * @return {string}\r\n     */\r\n    convert(str, to) {\r\n        const d = to.props.start - this.props.start;\r\n        return rangeMap(str, this.props.start, this.props.end, (match, s, c) => {\r\n            if (!match) {\r\n                return s;\r\n            }\r\n            return String.fromCharCode(c + d);\r\n        }).join(\"\");\r\n    }\r\n    /**\r\n     * @param {string} str\r\n     * @return {string}\r\n     */\r\n    filter(str) {\r\n        return rangeMap(str, this.props.start, this.props.end, (match, str, code) => {\r\n            if (!match) {\r\n                return \"\";\r\n            }\r\n            return str;\r\n        }).join(\"\");\r\n    }\r\n    /**\r\n     * @param {string} str\r\n     * @return {string}\r\n     */\r\n    reject(str) {\r\n        return rangeMap(str, this.props.start, this.props.end, (match, str, code) => {\r\n            if (!match) {\r\n                return str;\r\n            }\r\n            return \"\";\r\n        }).join(\"\");\r\n    }\r\n}\r\nexports.MojisyuRange = MojisyuRange;\r\n\n\n//# sourceURL=webpack://moji/./src/mojisyu_range.ts?");

/***/ }),

/***/ "./test/moji.core.spec.ts":
/*!********************************!*\
  !*** ./test/moji.core.spec.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst assert_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'assert'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nconst src_1 = __webpack_require__(/*! ../src */ \"./src/index.ts\");\r\nconst mojisyu_range_1 = __webpack_require__(/*! ../src/mojisyu_range */ \"./src/mojisyu_range.ts\");\r\ndescribe(\"moji.cores\", () => {\r\n    it(\"toCharCode\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ABC\").toCharCode(), \"65|66|67\");\r\n    });\r\n    it(\"全角英数から半角英数 arg2\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"ZE\", \"HE\")\r\n            .toString(), \"ABCD　01234あいうアイウABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"全角英数から半角英数 arg1\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"ZEtoHE\")\r\n            .toString(), \"ABCD　01234あいうアイウABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"全角スペースを半角スペースに arg2\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"ZS\", \"HS\")\r\n            .toString(), \"ＡＢＣＤ ０１２３４あいうアイウABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"全角スペースを半角スペースに arg1\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"ZStoHS\")\r\n            .toString(), \"ＡＢＣＤ ０１２３４あいうアイウABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"半角スペースを全角スペースに arm2\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HS\", \"ZS\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうアイウABCD　01234ｱｲｳ\");\r\n    });\r\n    it(\"半角スペースを全角スペースに arm1\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HStoZS\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうアイウABCD　01234ｱｲｳ\");\r\n    });\r\n    it(\"半角英数から全角英数 arg2\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HE\", \"ZE\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうアイウＡＢＣＤ ０１２３４ｱｲｳ\");\r\n    });\r\n    it(\"半角英数から全角英数 arg1\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HEtoZE\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうアイウＡＢＣＤ ０１２３４ｱｲｳ\");\r\n    });\r\n    it(\"ひらがなからカタカナ arg2\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HG\", \"KK\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４アイウアイウABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"ひらがなからカタカナ arg1\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HGtoKK\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４アイウアイウABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"カタカナからひらがな arg2\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"KK\", \"HG\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうあいうABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"カタカナからひらがな arg1\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"KKtoHG\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうあいうABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"全角カナから半角カナ arg2\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"ZK\", \"HK\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうｱｲｳABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"全角カナから半角カナ arg1\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"ZKtoHK\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうｱｲｳABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"半角カナから全角カナ arg2\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HK\", \"ZK\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうアイウABCD 01234アイウ\");\r\n    });\r\n    it(\"半角カナから全角カナ arg1\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HKtoZK\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうアイウABCD 01234アイウ\");\r\n    });\r\n    it(\"複数の文字種を置換 arg2\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HK\", \"ZK\")\r\n            .convert(\"KK\", \"HG\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうあいうABCD 01234あいう\");\r\n    });\r\n    it(\"複数の文字種を置換 arg1\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .convert(\"HKtoZK\")\r\n            .convert(\"KKtoHG\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうあいうABCD 01234あいう\");\r\n    });\r\n    it(\"filter range\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .filter(\"HG\")\r\n            .toString(), \"あいう\");\r\n    });\r\n    it(\"filter regexp\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .filter(\"ZK\")\r\n            .toString(), \"アイウ\");\r\n    });\r\n    it(\"filter pattern\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .filter(\"ZS\")\r\n            .toString(), \"　\");\r\n    });\r\n    it(\"reject range\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .reject(\"HG\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４アイウABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"reject regexp\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .reject(\"ZK\")\r\n            .toString(), \"ＡＢＣＤ　０１２３４あいうABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"filter pattern\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ\")\r\n            .reject(\"ZS\")\r\n            .toString(), \"ＡＢＣＤ０１２３４あいうアイウABCD 01234ｱｲｳ\");\r\n    });\r\n    it(\"addMojisyu\", () => {\r\n        const o = {\r\n            ADD: new mojisyu_range_1.TypeMojisyuRange(0xff01, 0xff5e),\r\n        };\r\n        src_1.moji.addMojisyu(o);\r\n        assert_1.default.deepEqual((0, src_1.moji)(\"\")._mojisyu.ADD.name, \"ADD\");\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://moji/./test/moji.core.spec.ts?");

/***/ }),

/***/ "./test/moji.str.spec.ts":
/*!*******************************!*\
  !*** ./test/moji.str.spec.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst assert_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'assert'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nconst src_1 = __webpack_require__(/*! ../src */ \"./src/index.ts\");\r\ndescribe(\"moji.str\", () => {\r\n    it(\"trim\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"　あ　あ　あ　\")\r\n            .string(\"trim\")\r\n            .convert(\"HG\", \"KK\")\r\n            .toString(), \"ア　ア　ア\");\r\n    });\r\n    it(\"replace\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"あああ\")\r\n            .string(\"replace\", \"あああ\", \"いいい\")\r\n            .convert(\"HG\", \"KK\")\r\n            .toString(), \"イイイ\");\r\n    });\r\n    it(\"substr\", () => {\r\n        assert_1.default.strictEqual((0, src_1.moji)(\"abcdefghij\").string(\"substr\", 1, 2).toString(), \"bc\");\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://moji/./test/moji.str.spec.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./test/moji.core.spec.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./test/moji.str.spec.ts");
/******/ 	
/******/ })()
;