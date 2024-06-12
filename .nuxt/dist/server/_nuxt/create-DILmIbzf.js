import { _ as __nuxt_component_0 } from "./Loader-B1iCMs9o.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
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
      name: "",
      category: ""
    });
    const categorys = ref(null);
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(` ${ssrInterpolate(unref(form))} <div class="card-body"><form><div class="row"><div class="col-md-6"><div class="mb-3"><label for="exampleInputEmail1" class="form-label">ประเภท</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).name)}></div></div><div class="col-md-6"><div class="mb-3"><label for="exampleInputEmail1" class="form-label">หมวดหมู่</label><select class="form-select form-select-sm"><option value="" disabled selected>เลือกหมวดหมู่</option><!--[-->`);
      ssrRenderList(unref(categorys), (category, index) => {
        _push(`<option${ssrRenderAttr("value", category.id)}>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><button type="submit" class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>${ssrInterpolate(unref(loading) ? "กำลังบันทึก..." : "บันทึก")}</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/subcategory/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-DILmIbzf.js.map
