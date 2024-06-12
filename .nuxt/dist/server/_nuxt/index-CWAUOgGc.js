import { _ as __nuxt_component_0 } from "./nuxt-link-dJwNCNmO.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, ref, unref } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "vue3-easy-data-table";
import "vue-toastification";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableSale",
  __ssrInlineRender: true,
  props: ["sales", "fetchSales", "loading"],
  setup(__props) {
    const headers = [
      { text: "รหัส", value: "order_code", sortable: true },
      { text: "ลูกค้า", value: "customers.full_name" },
      { text: "รูปแบบ", value: "type_pay", sortable: true },
      { text: "ภาษี", value: "vat", sortable: true },
      { text: "ราคาขาย", value: "total_price", sortable: true },
      { text: "ราคาขายรวมภาษี", value: "total_price_sum_vat", sortable: true },
      { text: "วันที่", value: "createdDate" },
      // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
      { text: "จัดการ", value: "action" }
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
            _push2(`<span${_scopeId}>${ssrInterpolate(type_pay ? "โอนชำระ" : "ชำระเงินสด")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(type_pay ? "โอนชำระ" : "ชำระเงินสด"), 1)
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CWAUOgGc.js.map
