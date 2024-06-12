import { _ as __nuxt_component_0 } from "./Loader-B1iCMs9o.js";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
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
    const form = ref(null);
    const loading = ref(false);
    const loadingBtn = ref(false);
    const categorys = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))} data-v-2fcd40de><div class="card-header" data-v-2fcd40de><h5 class="mb-0" data-v-2fcd40de>แก้ไขประเภท</h5></div>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(` ${ssrInterpolate(unref(form))} <div class="card-body" data-v-2fcd40de><form class="position-relative" data-v-2fcd40de><div class="row" data-v-2fcd40de><div class="col-md-6" data-v-2fcd40de><div class="mb-3" data-v-2fcd40de><label for="exampleInputEmail1" class="form-label" data-v-2fcd40de>ประเภท</label>`);
      if ((_a = unref(form)) == null ? void 0 : _a.name) {
        _push(`<input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).name)} data-v-2fcd40de>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-md-6" data-v-2fcd40de><div class="mb-3" data-v-2fcd40de><label for="exampleInputEmail1" class="form-label" data-v-2fcd40de>หมวดหมู่</label><select class="form-select form-select-sm" data-v-2fcd40de><option value="" disabled selected data-v-2fcd40de>เลือกหมวดหมู่</option>`);
      if ((_b = unref(form)) == null ? void 0 : _b.categorys) {
        _push(`<!--[-->`);
        ssrRenderList(unref(categorys), (category, index) => {
          var _a2;
          _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Number(category.id) == ((_a2 = unref(form).categorys) == null ? void 0 : _a2.id)) ? " selected" : ""} data-v-2fcd40de>${ssrInterpolate(category.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</select></div></div></div><button type="submit" class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr(unref(loadingBtn)) ? " disabled" : ""} data-v-2fcd40de>${ssrInterpolate(unref(loadingBtn) ? "กำลังอัพเดต..." : "อัพเดต")}</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/subcategory/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fcd40de"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-aF09_Vp6.js.map
