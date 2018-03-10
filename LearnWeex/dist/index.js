// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(6)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\LearnWeex\\LearnWeex\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ff74991c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#F0FFFF"
  },
  "title": {
    "fontSize": "32",
    "paddingTop": "20",
    "paddingBottom": "10",
    "paddingLeft": "30",
    "paddingRight": "30"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavBar = __webpack_require__(7);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _EventItem = __webpack_require__(11);

var _EventItem2 = _interopRequireDefault(_EventItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'App',
  components: {
    navbar: _NavBar2.default,
    eventItem: _EventItem2.default
  },
  data: function data() {
    return {
      todoEventArr: [{
        name: '待办事项',
        desc: '待办事项详情'
      }],
      finishEventArr: [{
        name: '已办事项',
        desc: '已办事项详情'
      }]
    };
  },

  methods: {
    onFinish: function onFinish(event, index) {
      this.todoEventArr.splice(index, 1);
      this.finishEventArr.push(event);
    }
  }
};

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('navbar', {
    attrs: {
      "titleStr": "事件清单",
      "showBack": false
    }
  }), (_vm.todoEventArr.length > 0) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v("待办事件")]) : _vm._e(), _c('div', {
    staticClass: ["event-wrp"]
  }, _vm._l((_vm.todoEventArr), function(event, index) {
    return _c('event-item', {
      key: event.name,
      attrs: {
        "event": event,
        "index": index
      },
      on: {
        "onClickFinishBtn": _vm.onFinish
      }
    })
  })), (_vm.finishEventArr.length > 0) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v("已办事件")]) : _vm._e(), _c('div', {
    staticClass: ["event-wrp"]
  }, _vm._l((_vm.finishEventArr), function(event, index) {
    return _c('event-item', {
      key: event.name,
      attrs: {
        "event": event,
        "index": index,
        "showFinishBtn": false
      }
    })
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(10)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\LearnWeex\\LearnWeex\\src\\components\\NavBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f451df94"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "navbar": {
    "backgroundColor": "#7FFFD4",
    "height": "128",
    "marginTop": "20",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "nav_title": {
    "color": "#FFFFFF",
    "fontSize": "32"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "nav_back": {
    "fontSize": "36"
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    name: 'navbar',
    props: {
        showBack: {
            type: Boolean,
            default: true
        },
        titleStr: {
            type: String,
            required: true
        }
    },
    beforeCreate: function beforeCreate() {
        var domMoule = weex.requireModule('dom');
        domMoule.addRule('fontFace', {
            'fontFamely': 'iconfont',
            'src': "url('//at.alicdn.com/t/font_586388_hvnzbdcg5hh69a4i.ttf')"
        });
    },

    methods: {
        onBack: function onBack() {
            navigator.pop({
                animated: 'true'
            });
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["navbar"]
  }, [(_vm.showBack) ? _c('text', {
    staticClass: ["iconfont", "nac_back"],
    on: {
      "click": _vm.onBack
    }
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["nav_title"]
  }), _c('text', {
    staticClass: ["nav_title"]
  }, [_vm._v(_vm._s(_vm.titleStr))]), _c('text')])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\LearnWeex\\LearnWeex\\src\\components\\EventItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2dfc5077"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "eventItem": {
    "backgroundColor": "#FFFFFF",
    "justifyContent": "space-between",
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "eventBtn": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "eventBtnName": {
    "backgroundColor": "#7FFFD4",
    "color": "#FFFFFF",
    "borderWidth": "2",
    "borderRadius": "10",
    "borderColor": "#FFFFFF",
    "fontSize": "28",
    "paddingLeft": "18",
    "paddingRight": "18",
    "paddingTop": "2",
    "paddingBottom": "2"
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "nav_next": {
    "fontSize": "36"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'eventItem',
    props: {
        showFinishBtn: {
            type: Boolean,
            default: true
        },
        index: {
            type: Number,
            required: true
        },
        event: {
            type: Object,
            required: true
        }
    },
    beforeCreate: function beforeCreate() {
        var domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': 'iconfont',
            'src': "url('http://at.alicdn.com/t/font_586388_hvnzbdcg5hh69a4i.ttf')"
        });
    },

    methods: {
        onFinish: function onFinish(event, index) {
            this.$emit('onClickFinishBtn', event, index);
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["eventItem"]
  }, [_c('text', {
    staticClass: ["eventName"]
  }, [_vm._v(_vm._s(_vm.event.name))]), _c('div', {
    staticClass: ["eventBtn"]
  }, [(_vm.showFinishBtn) ? _c('text', {
    staticClass: ["eventBtnName"],
    on: {
      "click": function($event) {
        _vm.onFinish(_vm.event, _vm.index)
      }
    }
  }, [_vm._v("完成")]) : _c('text'), _c('text', {
    staticClass: ["iconfont", "nac_next"]
  }, [_vm._v("")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);