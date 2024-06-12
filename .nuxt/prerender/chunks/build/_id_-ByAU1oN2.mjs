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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))} data-v-30cb6780><div class="card-header" data-v-30cb6780><h5 class="mb-0" data-v-30cb6780>\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17</h5></div>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(` ${ssrInterpolate(unref(form))} <div class="card-body" data-v-30cb6780><form class="position-relative" data-v-30cb6780><div class="row" data-v-30cb6780><div class="col-md-6" data-v-30cb6780><div class="mb-3" data-v-30cb6780><label for="exampleInputEmail1" class="form-label" data-v-30cb6780>\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17</label>`);
      if ((_a = unref(form)) == null ? void 0 : _a.name) {
        _push(`<input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).name)} data-v-30cb6780>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-md-6" data-v-30cb6780><div class="mb-3" data-v-30cb6780><label for="exampleInputEmail1" class="form-label" data-v-30cb6780>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48</label><select class="form-select form-select-sm" data-v-30cb6780><option value="" disabled selected data-v-30cb6780>\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48</option>`);
      if ((_b = unref(form)) == null ? void 0 : _b.categorys) {
        _push(`<!--[-->`);
        ssrRenderList(unref(categorys), (category, index) => {
          var _a2;
          _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Number(category.id) == ((_a2 = unref(form).categorys) == null ? void 0 : _a2.id)) ? " selected" : ""} data-v-30cb6780>${ssrInterpolate(category.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</select></div></div></div><button type="submit" class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr(unref(loadingBtn)) ? " disabled" : ""} data-v-30cb6780>${ssrInterpolate(unref(loadingBtn) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E15..." : "\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E15")}</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/subcategory/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30cb6780"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-ByAU1oN2.mjs.map
