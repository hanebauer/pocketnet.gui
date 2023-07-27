(window["matrixElement_jsonp"] = window["matrixElement_jsonp"] || []).push([[1],{

/***/ "087d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ddffd69-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/preview/index.vue?vue&type=template&id=ea499340&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "chatsPreview",
    class: {
      minimized: _vm.minimized,
      active: _vm.active
    }
  }, [_c('div', {
    staticClass: "work"
  }, [_c('div', {
    staticClass: "previewWrapper"
  }, [_c('div', {
    staticClass: "iconWrapper"
  }, [!_vm.dummy ? _c('chatIcon', {
    attrs: {
      "m_chat": _vm.m_chat,
      "chat": _vm.chat,
      "dontuseslides": true
    }
  }) : _c('div', {
    staticClass: "dummyicon loadinggradient"
  })], 1), _c('div', {
    staticClass: "infoWrapper"
  }, [!_vm.dummy && _vm.ready ? _c('div', {
    staticClass: "summaryLine"
  }, [_c('div', {
    staticClass: "caption flexBlock"
  }, [_c('chatName', {
    attrs: {
      "preview": true,
      "chat": _vm.chat,
      "m_chat": _vm.m_chat
    }
  }), _vm.roomMuted ? _c('div', {
    staticClass: "roomMuted"
  }, [_c('i', {
    staticClass: "fas fa-bell-slash"
  })]) : _vm._e()], 1), _c('div', {
    staticClass: "time"
  }, [_c('chatTime', {
    attrs: {
      "chat": _vm.chat,
      "m_chat": _vm.m_chat
    }
  })], 1)]) : _vm._e(), !_vm.dummy && _vm.ready ? _c('div', {
    staticClass: "eventsLine maxwidth"
  }, [_vm.event ? _c('eventsEvent', {
    attrs: {
      "event": _vm.matrixevent,
      "chat": _vm.m_chat,
      "preview": true
    }
  }) : _vm._e()], 1) : _vm._e(), _vm.dummy ? _c('div', {
    staticClass: "eventsLine"
  }, [_c('div', {
    staticClass: "dummyline loadinggradient"
  })]) : _vm._e()])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/chats/preview/index.vue?vue&type=template&id=ea499340&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/components/chats/assets/name.vue + 4 modules
var assets_name = __webpack_require__("aa20");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ddffd69-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/assets/time.vue?vue&type=template&id=3edef72c&scoped=true&
var timevue_type_template_id_3edef72c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatTime"
  }, [_vm.time ? _c('date', {
    attrs: {
      "date": _vm.time
    }
  }) : _c('span', {
    staticClass: "new"
  }, [_vm._v(_vm._s(_vm.$t("caption.new")))])], 1);
};
var timevue_type_template_id_3edef72c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/chats/assets/time.vue?vue&type=template&id=3edef72c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/assets/time.vue?vue&type=script&lang=js&
/* harmony default export */ var timevue_type_script_lang_js_ = ({
  name: "chatTime",
  props: {
    chat: Object,
    m_chat: {}
  },
  computed: {
    time: function () {
      var d = this.chat.lastModified;
      if (this.m_chat.selfMembership === "invite") {
        var timeFromNow = moment(moment.utc(d).toDate()).local().fromNow();
        if (timeFromNow === "in a few seconds" || timeFromNow === "a few seconds ago") {
          d = -1;
        } else {
          return d;
        }
        if (d < 0) return null;
        return d;
      } else {
        return d;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/chats/assets/time.vue?vue&type=script&lang=js&
 /* harmony default export */ var assets_timevue_type_script_lang_js_ = (timevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/chats/assets/time.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("81e5")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  assets_timevue_type_script_lang_js_,
  timevue_type_template_id_3edef72c_scoped_true_render,
  timevue_type_template_id_3edef72c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "3edef72c",
  null
  ,true
)

/* harmony default export */ var time = (component.exports);
// EXTERNAL MODULE: ./src/components/chats/assets/icon.vue + 4 modules
var icon = __webpack_require__("3094");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./src/components/chats/preview?vue&type=script&lang=js&




/* harmony default export */ var preview_vue_type_script_lang_js_ = ({
  name: "preview",
  props: {
    chat: Object,
    dummy: Boolean,
    search: String,
    messages: Array
  },
  inject: ["matches"],
  components: {
    chatName: assets_name["a" /* default */],
    chatTime: time,
    chatIcon: icon["a" /* default */]
  },
  data: function () {
    return {
      loading: false,
      ready: false,
      lastEvent: {},
      userStatusRoom: String
    };
  },
  watch: {
    m_chat: {
      immediate: true,
      handler: function () {
        this.ready = false;
        if (this.m_chat && !_.isEmpty(this.m_chat)) {
          this.core.mtrx.kit.prepareChat(this.m_chat).then(r => {
            this.ready = true;
          });
        }
      }
    }
  },
  mounted: function () {},
  computed: Object(vuex_esm["c" /* mapState */])({
    auth: state => state.auth,
    blockedCheck: function () {
      var users = this.core.mtrx.anotherChatUsers(this.m_chat.roomId);
      if (users.length == 1) {
        return this.core.mtrx.blockeduser(users[0].userId);
      }
    },
    roomMuted: function () {
      if (this.chat) {
        let pushRules = this.core.mtrx.client.pushProcessor.getPushRuleById(this.chat.roomId);
        if (pushRules !== null) {
          return true;
        }
      }
      return false;
    },
    m_chat: function (state) {
      if (!this.core.mtrx.client || !this.chat) return null;
      if (this.chat.roomId) {
        return this.core.mtrx.store.rooms[this.chat.roomId] || null;
      }
    },
    chatevents: function () {
      return (this.events[this.chat.roomId] || {}).timeline || [];
    },
    key: function () {
      if (this.event) return this.event.event_id;
      return "key";
    },
    unknowngroupusers: function () {
      return this.core.mtrx.kit.unknowngroupusers(this.chat);
    },
    matrixevent: function () {
      var e = this.event;
      if (e) {
        return e.get ? e.get() : e;
      }
    },
    event: function () {
      if (this.chat && this.chat.roomId) {
        if (this.messages) {
          return this.messages[0];
        }
        return this.chatevents[0];
      }
    },
    ...Object(vuex_esm["c" /* mapState */])(["minimized", "active", "events"])
  }),
  methods: {}
});
// CONCATENATED MODULE: ./src/components/chats/preview?vue&type=script&lang=js&
 /* harmony default export */ var chats_preview_vue_type_script_lang_js_ = (preview_vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/chats/preview/index.vue



function preview_injectStyles (context) {
  
  var style0 = __webpack_require__("42ee")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var preview_component = Object(componentNormalizer["a" /* default */])(
  chats_preview_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  preview_injectStyles,
  "ea499340",
  null
  ,true
)

/* harmony default export */ var preview = __webpack_exports__["a"] = (preview_component.exports);

/***/ }),

/***/ "0bce":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nameofchat[data-v-69b19ff9]{white-space:nowrap}.nameline[data-v-69b19ff9]{display:flex;align-items:flex-end}.iconGroup[data-v-69b19ff9]{font-size:.4em;width:16px;min-width:16px;text-align:center;height:16px;line-height:16px;border-radius:8px;background:rgb(var(--neutral-grad-2));margin-right:.5em;margin-block:.25em}.iconGroup i[data-v-69b19ff9]{color:rgb(var(--neutral-grad-1))}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0c5b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("315d");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("2bc04e7e", content, shadowRoot)
};

/***/ }),

/***/ "15f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_23ef1b9b_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("97f0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_23ef1b9b_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_23ef1b9b_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_23ef1b9b_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_icon_vue_vue_type_style_index_0_id_23ef1b9b_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "2515":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0bce");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("41bfa5fd", content, shadowRoot)
};

/***/ }),

/***/ "3094":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ddffd69-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/assets/icon.vue?vue&type=template&id=23ef1b9b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chatIcon",
    class: {
      unknowngroupusers: _vm.unknowngroupusers
    }
  }, [_vm.groupAvatar ? _c('div', {
    staticClass: "chatGroupIcon"
  }, [_c('userpic', {
    attrs: {
      "image": _vm.groupAvatar
    }
  })], 1) : _c('userspic', {
    key: _vm.allnotifications,
    class: {
      opacity: _vm.groupAvatar
    },
    attrs: {
      "slidesPerView": _vm.slidesPerView,
      "users": _vm.usersinfo,
      "status": _vm.status,
      "unseen": _vm.unseen,
      "single": _vm.singleAvatar
    }
  }), _vm.unknowngroupusers ? _c('div', {
    staticClass: "unknowngroupusersicon"
  }, [_c('i', {
    staticClass: "fas fa-question"
  })]) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/chats/assets/icon.vue?vue&type=template&id=23ef1b9b&scoped=true&

// EXTERNAL MODULE: ./src/application/functions.js
var functions = __webpack_require__("3139");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/assets/icon.vue?vue&type=script&lang=js&

/* harmony default export */ var iconvue_type_script_lang_js_ = ({
  name: "chatIcon",
  data: function () {
    return {
      single: []
    };
  },
  props: {
    chat: {},
    m_chat: {},
    slidesPerView: Number,
    hideunseen: Boolean,
    dontuseslides: Boolean
  },
  computed: {
    allnotifications: function () {
      return this.$store.state.allnotifications || "0";
    },
    unseen: function () {
      if (this.hideunseen) return 0;
      if (this.blockedCheck) return 0;
      if (this.m_chat.selfMembership === "invite") {
        if (functions["a" /* default */].date.addseconds(moment.utc(this.m_chat.summary.lastModified).toDate(), 86400) > new Date()) return 1;
      }
      this.allnotifications;
      return this.m_chat.getUnreadNotificationCount();
    },
    users: function () {
      if (!this.chat) return [];
      var u = this.core.mtrx.anotherChatUsers(this.chat.roomId);
      if (this.dontuseslides) {
        u = _.first(u, 4);
      }
      return _.first(_.shuffle(u), 49);
    },
    singleAvatar: function () {
      if (!this.chat && !this.m_chat) return {};
      if (this.m_chat.getJoinRule() === "public" && this.m_chat.currentState.getMembers().length === 1) {
        var member = this.m_chat.currentState.getMembers()[0];
        var data = this.$store.state.users[functions["a" /* default */].getmatrixid(member.userId)];
        if (data) {
          data.status = member.membership;
          data.image = data.source.i;
          return data;
        }
      }
      return {};
    },
    blockedCheck: function () {
      var users = this.core.mtrx.anotherChatUsers(this.m_chat.roomId);
      if (users.length == 1) {
        return this.core.mtrx.blockeduser(users[0].userId);
      }
    },
    usersinfo: function () {
      var u = this.core.mtrx.chatUsersInfo(this.chat.roomId, "anotherChatUsers");
      if (this.dontuseslides) {
        u = _.first(u, 4);
      }
      return _.first(_.shuffle(u), 49);
    },
    status: function () {
      var us = {};
      _.each(this.users, u => {
        us[u.userId] = this.core.mtrx.blockeduser(u.userId) ? "blocked" : u.membership;
      });
      return us;
    },
    unknowngroupusers: function () {
      return this.core.mtrx.kit.unknowngroupusers(this.m_chat);
    },
    groupAvatar: function () {
      var _this$m_chat$currentS;
      const avatar = (_this$m_chat$currentS = this.m_chat.currentState.getStateEvents("m.room.avatar")[0]) === null || _this$m_chat$currentS === void 0 ? void 0 : _this$m_chat$currentS.event.content.avatarUrl;
      return avatar !== "" ? avatar : "";
    }
  }
});
// CONCATENATED MODULE: ./src/components/chats/assets/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var assets_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/chats/assets/icon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("15f8")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  assets_iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23ef1b9b",
  null
  ,true
)

/* harmony default export */ var icon = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "315d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".new[data-v-3edef72c]{color:rgb(var(--color-good))}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "383f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".opacity[data-v-23ef1b9b]{opacity:0}.chatIcon[data-v-23ef1b9b]{width:100%;position:relative}.unknowngroupusersicon[data-v-23ef1b9b]{position:absolute;left:0;top:0;bottom:0;right:0;font-size:.7em;display:flex;justify-content:center;align-items:center;color:#fff;text-shadow:0 0 2px rgba(0,11,58,.714),0 0 3px rgba(0,8,43,.519)}.unknowngroupusers .bgimage[data-v-23ef1b9b]{transform:scale(.7)}.chatGroupIcon[data-v-23ef1b9b],.chatGroupIcon img[data-v-23ef1b9b]{width:100%;height:100%}.chatGroupIcon img[data-v-23ef1b9b]{border-radius:50%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;position:absolute;top:0;z-index:100}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "42ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_index_sass_vue_type_style_index_0_id_ea499340_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6605");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_index_sass_vue_type_style_index_0_id_ea499340_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_index_sass_vue_type_style_index_0_id_ea499340_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_index_sass_vue_type_style_index_0_id_ea499340_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_index_sass_vue_type_style_index_0_id_ea499340_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "598a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".minimized.active .dummyline[data-v-ea499340]{height:44px;opacity:.3}.minimized.active .dummyicon[data-v-ea499340]{width:44px;height:44px;opacity:.3}.previewWrapper[data-v-ea499340]{cursor:pointer;display:flex;align-items:center;padding:10px 0}.previewWrapper .dummyline[data-v-ea499340]{height:22px;border-radius:5px;transition:.3s}.previewWrapper .dummyicon[data-v-ea499340]{width:22px;height:22px;border-radius:50%;margin:0 auto;transition:.3s}.previewWrapper .iconWrapper[data-v-ea499340]{width:44px;display:flex;align-items:center;min-width:44px}.previewWrapper .iconWrapper .oneuser i[data-v-ea499340]{font-size:.7em}.previewWrapper .infoWrapper[data-v-ea499340]{padding-left:.5em;flex-grow:1;overflow:hidden;text-overflow:ellipsis;min-height:50px}.emptyEvent span[data-v-ea499340]{color:rgb(var(--color-good));font-size:.8em}.eventsLine[data-v-ea499340]{position:relative;height:25px;contain:strict}.eventsLine .roomMuted[data-v-ea499340]{position:absolute;right:8px;top:0}.eventsLine .roomMuted i[data-v-ea499340]{color:rgb(var(--neutral-grad-3))}.eventsLine[data-v-ea499340] .previewMessage{max-width:90%;overflow:hidden;text-overflow:ellipsis}.eventsLine[data-v-ea499340] .messagePreview{max-width:100%;overflow:hidden;text-overflow:ellipsis}.eventsLine[data-v-ea499340] .msgtext{display:inline;font-size:.9em;white-space:nowrap}.eventsLine[data-v-ea499340] .deletedMessage{text-align:left;font-size:.9em;padding:0}.eventsLine[data-v-ea499340] span{color:rgb(var(--text-color));opacity:.8;font-size:.9em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.roomMuted[data-v-ea499340]{position:relative;top:-3px;left:6px}.roomMuted i[data-v-ea499340]{font-size:.7em}.summaryLine[data-v-ea499340]{display:flex;min-height:25px}.summaryLine .time[data-v-ea499340]{padding-top:.25em;opacity:.3;font-weight:500;text-align:right;max-width:110px;maring-right:.5em}.summaryLine .time .chatTime[data-v-ea499340]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.summaryLine .time[data-v-ea499340] span{font-size:.8em;display:block}.summaryLine .caption[data-v-ea499340]{flex-grow:1;display:flex;align-items:center}.summaryLine .caption[data-v-ea499340] .nameofchat{overflow:hidden;text-overflow:ellipsis;max-width:150px}.summaryLine .caption[data-v-ea499340] span{font-size:1em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:500;display:inline-block;max-width:190px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "600f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("947c");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("2572efd1", content, shadowRoot)
};

/***/ }),

/***/ "6014":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_69b19ff9_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2515");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_69b19ff9_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_69b19ff9_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_69b19ff9_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_69b19ff9_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "6605":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("598a");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("49ec5c24", content, shadowRoot)
};

/***/ }),

/***/ "81e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_vue_vue_type_style_index_0_id_3edef72c_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0c5b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_vue_vue_type_style_index_0_id_3edef72c_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_vue_vue_type_style_index_0_id_3edef72c_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_vue_vue_type_style_index_0_id_3edef72c_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_time_vue_vue_type_style_index_0_id_3edef72c_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "947c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-7720ef78] .infoWrapper{display:flex;align-items:center}[data-v-7720ef78] .infoWrapper .eventsLine{width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "97f0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("383f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("c1b31c62", content, shadowRoot)
};

/***/ }),

/***/ "a0b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7720ef78_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("600f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7720ef78_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7720ef78_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7720ef78_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7720ef78_prod_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "a54c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ddffd69-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/dummypreviews/index.vue?vue&type=template&id=7720ef78&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "dummypreviews"
    }
  }, _vm._l(_vm.a, function (va) {
    return _c('preview', {
      key: va.id,
      attrs: {
        "dummy": true
      }
    });
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/chats/dummypreviews/index.vue?vue&type=template&id=7720ef78&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/components/chats/preview/index.vue + 9 modules
var preview = __webpack_require__("087d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/dummypreviews/index.vue?vue&type=script&lang=js&


/* harmony default export */ var dummypreviewsvue_type_script_lang_js_ = ({
  name: "dummypreviews",
  data: () => {
    return {
      messagesPreview: false
    };
  },
  props: {
    data: Object
  },
  components: {
    preview: preview["a" /* default */]
  },
  computed: Object(vuex_esm["c" /* mapState */])({
    auth: state => state.auth,
    a: function () {
      if (this.messagesPreview) {
        return [1];
      } else {
        return [1, 2, 3, 4, 5, 6];
      }
    }
  }),
  methods: {}
});
// CONCATENATED MODULE: ./src/components/chats/dummypreviews/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var chats_dummypreviewsvue_type_script_lang_js_ = (dummypreviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/chats/dummypreviews/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("a0b1")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chats_dummypreviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7720ef78",
  null
  ,true
)

/* harmony default export */ var dummypreviews = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "aa20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ddffd69-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/assets/name.vue?vue&type=template&id=69b19ff9&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "nameline"
  }, [_vm.isShowGroupIcon ? _c('div', {
    staticClass: "iconGroup"
  }, [_c('i', {
    staticClass: "fas fa-user-friends"
  })]) : _vm._e(), _c('div', {
    staticClass: "nameofchat"
  }, [_vm._v(_vm._s(_vm.convertedName))])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/chats/assets/name.vue?vue&type=template&id=69b19ff9&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/chats/assets/name.vue?vue&type=script&lang=js&
/* harmony default export */ var namevue_type_script_lang_js_ = ({
  name: "chatName",
  props: {
    chat: Object,
    preview: Boolean,
    m_chat: {}
  },
  inject: ["matches", "markText"],
  data: function () {
    return {
      //convertedName: ''
    };
  },
  computed: {
    users: function () {
      if (!this.chat) return [];
      return this.core.mtrx.anotherChatUsers(this.chat.roomId);
    },
    convertedName: function () {
      if (this.m_chat && this.m_chat.getJoinRule() === "public" && this.m_chat.currentState.getStateEvents("m.room.name").length > 0) {
        return this.m_chat.currentState.getStateEvents("m.room.name")[0].getContent().name;
      }
      var users = _.filter(this.users, user => {
        return user.userId != this.core.user.userinfo.id;
      });
      var names = _.filter(_.map(users, user => {
        if (this.$store.state.users[user.userId]) return this.$store.state.users[user.userId].name;
      }), function (name) {
        return name;
      });
      if (!names.length) {
        if (this.core.mtrx.chatUsers(this.chat.roomId).length) {
          return "Empty chat: " + this.chat.roomId;
        }
        return "-";
      }
      if (this.m_chat.name.indexOf("@") == 0) return this.m_chat.name.replace("@", "");
      return names.join(", ");
    },
    markMatches: function () {
      return this.markText ? this.markText(this.convertedName, true) : this.convertedName;
    },
    isShowGroupIcon() {
      return this.m_chat.name.slice(0, 1) === "@";
    }
  },
  mounted: function () {}
});
// CONCATENATED MODULE: ./src/components/chats/assets/name.vue?vue&type=script&lang=js&
 /* harmony default export */ var assets_namevue_type_script_lang_js_ = (namevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/chats/assets/name.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("6014")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  assets_namevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69b19ff9",
  null
  ,true
)

/* harmony default export */ var assets_name = __webpack_exports__["a"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=matrix-element.1.js.map