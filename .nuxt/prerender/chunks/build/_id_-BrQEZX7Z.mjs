import { _ as __nuxt_component_0 } from './Loader-B1iCMs9o.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
import { u as useRoute } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "TableOrder",
  __ssrInlineRender: true,
  props: ["products", "total_price_sum_vat", "total_price", "vat"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<table${ssrRenderAttrs(mergeProps({ class: "table" }, _attrs))}><thead><tr><th>\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th><th>\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th><th>\u0E23\u0E32\u0E04\u0E32</th><th>\u0E08\u0E33\u0E19\u0E27\u0E19</th><th>\u0E23\u0E27\u0E21</th></tr></thead><tbody>`);
      if (__props.products) {
        _push(`<!--[-->`);
        ssrRenderList(__props.products, (product, index) => {
          _push(`<tr><td>${ssrInterpolate(product.product.barcode)}</td><td>${ssrInterpolate(product.product.name)}</td><td>${ssrInterpolate(product.product.price)}</td><td>${ssrInterpolate(product.quantity)}</td><td>${ssrInterpolate(product.product.price * product.quantity)}.00</td></tr>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody><tfoot><tr><td colspan="5" class="text-center">\u0E20\u0E32\u0E29\u0E35 ${ssrInterpolate(__props.vat)} \u0E1A\u0E32\u0E17</td></tr><tr><td colspan="5" class="text-center">\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21 ${ssrInterpolate(__props.total_price)} \u0E1A\u0E32\u0E17</td></tr><tr><td colspan="5" class="text-center bg-success"><h5 class="text-white">\u0E23\u0E32\u0E04\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E34\u0E49\u0E19 ${ssrInterpolate(__props.total_price_sum_vat)} \u0E1A\u0E32\u0E17</h5></td></tr></tfoot></table>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableOrder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const sale = ref(null);
    const loading = ref(false);
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      var _a, _b, _c, _d, _e;
      const _component_Loader = __nuxt_component_0;
      const _component_TableOrder = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}><div class="card-header d-flex justify-content-between align-items-center"><h5 class="mb-0">Order #32430324 / \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ${ssrInterpolate((_a = unref(sale)) == null ? void 0 : _a.createdDate)}</h5><div><button class="btn btn-sm btn-warning me-3">Print</button><button class="btn btn-sm btn-info">Excel</button></div></div>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(`<div class="card-body"><div class="row"><div class="col-md-4"><form><div class="mb-3"><label for="" class="form-label">\u0E0A\u0E37\u0E48\u0E2D\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32</label><input type="email" class="form-control form-control-sm" readonly disabled value="test"></div><div class="mb-3"><label for="" class="form-label">\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23</label><input type="test" class="form-control form-control-sm" readonly disabled value="test"></div><div class="mb-3"><label for="" class="form-label">\u0E44\u0E25\u0E19\u0E4C</label><input type="test" class="form-control form-control-sm" readonly disabled value="test"></div><div class="mb-3"><label for="" class="form-label">\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48</label><input type="test" class="form-control form-control-sm" readonly disabled value="test"></div></form></div><div class="col-md-8">`);
      _push(ssrRenderComponent(_component_TableOrder, {
        products: (_a2 = (_b = unref(sale)) == null ? void 0 : _b.orders) != null ? _a2 : [],
        total_price: (_b2 = (_c = unref(sale)) == null ? void 0 : _c.total_price) != null ? _b2 : "",
        total_price_sum_vat: (_d = unref(sale)) == null ? void 0 : _d.total_price_sum_vat,
        vat: (_e = unref(sale)) == null ? void 0 : _e.vat
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sale/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BrQEZX7Z.mjs.map
