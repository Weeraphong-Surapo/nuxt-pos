import { _ as __nuxt_component_0 } from "./Loader-B1iCMs9o.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { u as useRoute } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
import "vue-toastification";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    useRoute();
    const form = ref({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      salary: "",
      isAdmin: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(` ${ssrInterpolate(unref(form))} <div class="card-body"><form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">ชื่อผู้ใช้</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).username)}></div><div class="mb-3"><label for="exampleInputEmail1" class="form-label">รหัสผ่าน</label><input type="text" class="form-control form-control-sm" value="****************" disabled></div><div class="row"><div class="col-md-6"><div class="mb-3"><label for="exampleInputEmail1" class="form-label">ชื่อ</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).firstName)}></div></div><div class="col-md-6"><div class="mb-3"><label for="exampleInputEmail1" class="form-label">นามสกุล</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).lastName)}></div></div></div><div class="mb-3"><label for="exampleInputEmail1" class="form-label">อีเมล</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).email)}></div><div class="mb-3"><label for="exampleInputEmail1" class="form-label">เงินเดือน</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).salary)}></div><div class="mb-3"><label for="exampleInputEmail1" class="form-label">สถานะ</label><select class="form-select form-select-sm"><option value="0" selected>พนักงาน</option><option value="1">ผู้ดูแลร้าน</option></select></div><button class="btn btn-sm btn-primary">บันทึก</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-x0ap2TMZ.js.map
