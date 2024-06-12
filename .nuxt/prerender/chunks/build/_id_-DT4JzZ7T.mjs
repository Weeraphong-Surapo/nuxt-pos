import { _ as __nuxt_component_0 } from './Loader-B1iCMs9o.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/devalue/index.js';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/destr/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/klona/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/scule/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue3-easy-data-table/dist/vue3-easy-data-table.es.js';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue-toastification/dist/index.cjs';

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
        _push(`<div class="" data-v-9b1a5faa><label for="file-upload" class="custom-file-upload btn btn-primary btn-sm" data-v-9b1a5faa> \u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E </label><input id="file-upload" type="file" data-v-9b1a5faa></div>`);
      } else {
        _push(`<div data-v-9b1a5faa><button class="btn btn-danger btn-sm" data-v-9b1a5faa>\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01</button></div>`);
      }
      _push(`</div></div><div class="mb-3" data-v-9b1a5faa><label for="exampleInputEmail1" class="form-label" data-v-9b1a5faa>\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).name)} data-v-9b1a5faa></div><div class="row" data-v-9b1a5faa><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label for="exampleInputEmail1" class="form-label" data-v-9b1a5faa>\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).barcode)} data-v-9b1a5faa></div></div></div><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>\u0E08\u0E33\u0E19\u0E27\u0E19</label><input type="number" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).quantity)} data-v-9b1a5faa></div></div></div><div class="row" data-v-9b1a5faa><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>\u0E23\u0E32\u0E04\u0E32\u0E17\u0E38\u0E19</label><input type="number" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).cost)} data-v-9b1a5faa></div></div><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>\u0E23\u0E32\u0E04\u0E32\u0E02\u0E32\u0E22</label><input type="number" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).price)} data-v-9b1a5faa></div></div></div><div class="row" data-v-9b1a5faa><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48</label><select class="form-select form-select-sm" data-v-9b1a5faa><!--[-->`);
      ssrRenderList(unref(categorys), (category, index) => {
        _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(category.id == unref(form).category) ? " selected" : ""} data-v-9b1a5faa>${ssrInterpolate(category == null ? void 0 : category.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-md-6" data-v-9b1a5faa><div class="mb-3" data-v-9b1a5faa><label class="form-label" data-v-9b1a5faa>\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17</label><select class="form-select form-select-sm" data-v-9b1a5faa><option value="" disabled selected data-v-9b1a5faa>\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17</option><!--[-->`);
      ssrRenderList(unref(sub_categorys), (subCategory, index) => {
        _push(`<option${ssrRenderAttr("value", subCategory.id)}${ssrIncludeBooleanAttr(subCategory.id == unref(form).sub_category) ? " selected" : ""} data-v-9b1a5faa>${ssrInterpolate(subCategory == null ? void 0 : subCategory.name)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="mb-3" data-v-9b1a5faa><label for="" class="form-label" data-v-9b1a5faa>\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14</label><textarea class="form-control" cols="30" rows="3" data-v-9b1a5faa>${ssrInterpolate(unref(form).description)}</textarea></div><div class="mb-3" data-v-9b1a5faa><div class="form-check" data-v-9b1a5faa><input class="form-check-input" type="radio"${ssrIncludeBooleanAttr(Boolean(unref(form).is_active)) ? " checked" : ""} data-v-9b1a5faa><label class="form-check-label" for="flexRadioDefault1" data-v-9b1a5faa> \u0E40\u0E1B\u0E34\u0E14\u0E02\u0E32\u0E22 </label></div><div class="form-check" data-v-9b1a5faa><input class="form-check-input" type="radio"${ssrIncludeBooleanAttr(!unref(form).is_active) ? " checked" : ""} data-v-9b1a5faa><label class="form-check-label" for="flexRadioDefault2" data-v-9b1a5faa> \u0E44\u0E21\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E02\u0E32\u0E22 </label></div></div><button type="submit" class="btn btn-primary btn-sm" data-v-9b1a5faa>Submit</button></form></div></div>`);
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

export { _id_ as default };
//# sourceMappingURL=_id_-DT4JzZ7T.mjs.map
