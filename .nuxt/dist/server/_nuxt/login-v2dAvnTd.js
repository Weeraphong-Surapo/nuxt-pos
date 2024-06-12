import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "vue3-easy-data-table";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div id="wrapper"><div id="left"><div id="signin"><div class="logo"><img src="https://logowik.com/content/uploads/images/shopee1950.jpg" alt="Sluralpright"></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="links"><a href="#">Forgot Password</a></div></div></div><div id="right"><div id="showcase"><div class="showcase-content"><h1 class="showcase-text">Let&#39;s Have fun <strong>shopping</strong></h1><a href="/" class="secondary-btn">เลือกซื้อสินค้า</a></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  login as default
};
//# sourceMappingURL=login-v2dAvnTd.js.map
