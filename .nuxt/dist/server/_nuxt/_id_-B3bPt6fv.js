import { _ as __nuxt_component_0 } from "./Loader-B1iCMs9o.js";
import { u as useRoute } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "@vue/devtools-api";
import "vue3-easy-data-table";
import "vue-toastification";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const form = ref({
      full_name: "",
      phone: "",
      line: "",
      address: ""
    });
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(`<div class="card-body"><form><div class="mb-3"><label for="" class="form-label">ชื่อลูกค้า</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).full_name)}></div><div class="row"><div class="mb-3"><label for="" class="form-label">เบอร์โทร</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).phone)}></div><div class="mb-3"><label for="" class="form-label">ไลน์</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).line)}></div></div><div class="mb-3"><label for="" class="form-label">ที่อยู่</label><textarea rows="3" cols="10" class="form-control form-control-sm">${ssrInterpolate(unref(form).address)}</textarea></div><button type="submit" class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}> บันทึก </button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customer/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-B3bPt6fv.js.map
