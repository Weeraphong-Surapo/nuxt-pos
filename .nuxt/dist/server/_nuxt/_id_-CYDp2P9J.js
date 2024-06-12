import { _ as __nuxt_component_0 } from "./Loader-B1iCMs9o.js";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRoute();
    router.params.id;
    const form = ref({
      id: null,
      name: "",
      barcode: "",
      is_active: 1,
      price: 0,
      category: "",
      sub_category: "",
      description: "",
      quantity: 0,
      cost: 0,
      file: null,
      file_path: ""
    });
    const loading = ref(false);
    const imageUrl = ref(void 0);
    const categorys = ref(null);
    const sub_categorys = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))} data-v-9b1a5faa>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(`<div class="card-body" data-v-9b1a5faa>${ssrInterpolate(unref(form))} <form data-v-9b1a5faa><div class="d-flex justify-content-center" data-v-9b1a5faa>`);
      if (unref(imageUrl) || unref(form).file_path) {
        _push(`<img${ssrRenderAttr("src", unref(imageUrl) ? unref(imageUrl) : unref(form).file_path)} alt="Uploaded Image" class="mt-3 img-thumbnail" width="124" height="72" data-v-9b1a5faa>`);
      } else {
        _push(`<img src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg" alt="" width="124" height="72" data-v-9b1a5faa>`);
      }
      _push(`</div>`);
      if (unref(form).file) {
        _push(`<p class="my-2 text-center" data-v-9b1a5faa>${ssrInterpolate(unref(form).file.name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-2" data-v-9b1a5faa><div class="d-flex flex-column align-items-center" data-v-9b1a5faa>`);
      if (!unref(form).file) {
        _push(`<div class="" data-v-9b1a5faa><label for="file-upload" class="custom-file-upload btn btn-primary btn-sm" data-v-9b1a5faa> อัพโหลดรูปภาพ </label><input id="file-upload" type="file" data-v-9b1a5faa></div>`);
      } else {
        _push(`<div data-v-9b1a5faa><button class="btn btn-danger btn-sm" data-v-9b1a5faa>ยกเลิก</button></div>`);
      }
      _push(`</div></div><div class="mb-3" data-v-9b1a5faa><label for="exampleInputEmail1" class="form-label" data-v-9b1a5faa>สินค้า</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).name)} data-v-9b1a5faa></div><div class="row" data-v-9b1a5faa><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label for="exampleInputEmail1" class="form-label" data-v-9b1a5faa>รหัสสินค้า</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).barcode)} data-v-9b1a5faa></div></div></div><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>จำนวน</label><input type="number" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).quantity)} data-v-9b1a5faa></div></div></div><div class="row" data-v-9b1a5faa><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>ราคาทุน</label><input type="number" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).cost)} data-v-9b1a5faa></div></div><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>ราคาขาย</label><input type="number" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).price)} data-v-9b1a5faa></div></div></div><div class="row" data-v-9b1a5faa><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>หมวดหมู่</label><select class="form-select form-select-sm" data-v-9b1a5faa><!--[-->`);
      ssrRenderList(unref(categorys), (category, index) => {
        _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(category.id == unref(form).category) ? " selected" : ""} data-v-9b1a5faa>${ssrInterpolate(category == null ? void 0 : category.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>ประเภท</label><select class="form-select form-select-sm" data-v-9b1a5faa><option value="" disabled selected data-v-9b1a5faa>เลือกประเภท</option><!--[-->`);
      ssrRenderList(unref(sub_categorys), (subCategory, index) => {
        _push(`<option${ssrRenderAttr("value", subCategory.id)}${ssrIncludeBooleanAttr(subCategory.id == unref(form).sub_category) ? " selected" : ""} data-v-9b1a5faa>${ssrInterpolate(subCategory == null ? void 0 : subCategory.name)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="mb-3" data-v-9b1a5faa><label for="" class="form-label" data-v-9b1a5faa>รายละเอียด</label><textarea class="form-control" cols="30" rows="3" data-v-9b1a5faa>${ssrInterpolate(unref(form).description)}</textarea></div><div class="mb-3" data-v-9b1a5faa><div class="form-check" data-v-9b1a5faa><input class="form-check-input" type="radio"${ssrIncludeBooleanAttr(Boolean(unref(form).is_active)) ? " checked" : ""} data-v-9b1a5faa><label class="form-check-label" for="flexRadioDefault1" data-v-9b1a5faa> เปิดขาย </label></div><div class="form-check" data-v-9b1a5faa><input class="form-check-input" type="radio"${ssrIncludeBooleanAttr(!unref(form).is_active) ? " checked" : ""} data-v-9b1a5faa><label class="form-check-label" for="flexRadioDefault2" data-v-9b1a5faa> ไม่เปิดขาย </label></div></div><button type="submit" class="btn btn-primary btn-sm" data-v-9b1a5faa>Submit</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b1a5faa"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CYDp2P9J.js.map
