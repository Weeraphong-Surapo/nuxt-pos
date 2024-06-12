import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const form = ref({
      username: "weeraphong",
      password: "Bigcza123456"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container h-100" }, _attrs))} data-v-54eb383a><div class="row align-items-center justify-content-center h-100" data-v-54eb383a><div class="login-container p-0" data-v-54eb383a><div class="card" data-v-54eb383a><div class="card-header" data-v-54eb383a><h3 class="mb-0" data-v-54eb383a>Login</h3></div><div class="card-body" data-v-54eb383a><form data-v-54eb383a><div class="form-group" data-v-54eb383a><label for="username" data-v-54eb383a>Username</label><input type="text" class="form-control" id="username" placeholder="Enter username"${ssrRenderAttr("value", unref(form).username)} data-v-54eb383a></div><div class="form-group" data-v-54eb383a><label for="password" data-v-54eb383a>Password</label><input type="password" class="form-control" id="password" placeholder="Enter password"${ssrRenderAttr("value", unref(form).password)} data-v-54eb383a></div><button type="submit" class="btn btn-primary btn-block"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} data-v-54eb383a>${ssrInterpolate(unref(loading) ? "Login..." : "Login")}</button></form></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-54eb383a"]]);
export {
  login as default
};
//# sourceMappingURL=login-WkzVInA8.js.map
