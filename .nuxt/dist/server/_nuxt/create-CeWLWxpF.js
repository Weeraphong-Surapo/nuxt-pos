import { _ as __nuxt_component_0 } from "./Loader-B1iCMs9o.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
import "../server.mjs";
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
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: ""
    });
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(`<div class="card-body"><form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">หมวดหมู่</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).name)} required></div><button type="submit" class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>${ssrInterpolate(unref(loading) ? "กำลังบันทึก..." : "บันทึก")}</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-CeWLWxpF.js.map
