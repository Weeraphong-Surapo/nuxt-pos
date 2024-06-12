import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { useSSRContext, ref, mergeProps, unref, defineComponent, resolveComponent, withCtx, createVNode, toDisplayString } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/devalue/index.js';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableSale",
  __ssrInlineRender: true,
  props: ["sales", "fetchSales", "loading"],
  setup(__props) {
    const headers = [
      { text: "\u0E23\u0E2B\u0E31\u0E2A", value: "order_code", sortable: true },
      { text: "\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32", value: "customers.full_name" },
      { text: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A", value: "type_pay", sortable: true },
      { text: "\u0E20\u0E32\u0E29\u0E35", value: "vat", sortable: true },
      { text: "\u0E23\u0E32\u0E04\u0E32\u0E02\u0E32\u0E22", value: "total_price", sortable: true },
      { text: "\u0E23\u0E32\u0E04\u0E32\u0E02\u0E32\u0E22\u0E23\u0E27\u0E21\u0E20\u0E32\u0E29\u0E35", value: "total_price_sum_vat", sortable: true },
      { text: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48", value: "createdDate" },
      // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
      { text: "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23", value: "action" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EasyDataTable = resolveComponent("EasyDataTable");
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_EasyDataTable, mergeProps({
        headers,
        items: __props.sales,
        "theme-color": "#5c60f5",
        loading: __props.loading
      }, _attrs), {
        "item-action": withCtx(({ id }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="btn-group"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "sale-id", params: { id } },
              class: "btn btn-primary btn-sm"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="bi bi-eye-fill"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "bi bi-eye-fill" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "btn-group" }, [
                createVNode(_component_NuxtLink, {
                  to: { name: "sale-id", params: { id } },
                  class: "btn btn-primary btn-sm"
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "bi bi-eye-fill" })
                  ]),
                  _: 2
                }, 1032, ["to"])
              ])
            ];
          }
        }),
        "item-type_pay": withCtx(({ type_pay }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(type_pay ? "\u0E42\u0E2D\u0E19\u0E0A\u0E33\u0E23\u0E30" : "\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(type_pay ? "\u0E42\u0E2D\u0E19\u0E0A\u0E33\u0E23\u0E30" : "\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableSale.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const listSales = ref([]);
    const getAllSales = async () => {
      loading.value = true;
      try {
        const response = await fetch("/api/sale", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        listSales.value = data.data;
        console.log(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TableSale = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}><div class="card-header"><h5 class="mb-0">Sale</h5></div><div class="card-body">`);
      _push(ssrRenderComponent(_component_TableSale, {
        loading: unref(loading),
        fetchSales: getAllSales,
        sales: unref(listSales)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sale/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index--SE_XPqZ.mjs.map
