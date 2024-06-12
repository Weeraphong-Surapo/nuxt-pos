import { _ as __nuxt_component_0 } from "./Loader-B1iCMs9o.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { u as useAuthStore } from "./authStore-CYGqtA45.js";
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
import "vue-toastification";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const loading = ref(true);
    const form = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(`<div class="card-body"><form><div class="row"><div class="col-md-6"><div class="mb-3"><label for="" class="form-label">ชื่อ</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).firstName)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-md-6"><div class="mb-3"><label for="" class="form-label">นามสกุล</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).lastName)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mb-3"><label for="" class="form-label">อีเมล</label>`);
      if (unref(form)) {
        _push(`<input type="email" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).email)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="row"><div class="col-md-6"><div class="mb-3"><label for="" class="form-label">ชื่อผู้ใช้งาน</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).username)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-md-6"><div class="mb-3"><label for="" class="form-label">สถานะ</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).isAdmin ? "ผู้ดูแลร้าน" : "พนักงาน")}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mb-3"><label for="" class="form-label">เงินเดือน</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).salary)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-3"><label for="" class="form-label">สร้างเมื่อ</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).createdDate)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-3"><label for="" class="form-label">อัพเดตเมื่อ</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).updatedDate)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="btn btn-success btn-sm">บันทึก</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-BmUhQzuI.js.map
