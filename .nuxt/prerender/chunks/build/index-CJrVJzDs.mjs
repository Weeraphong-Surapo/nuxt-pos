import { _ as __nuxt_component_0 } from './Loader-B1iCMs9o.mjs';
import { useSSRContext, ref, unref, defineComponent, resolveComponent, mergeProps } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
import { Bar, Pie } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue-chartjs/dist/index.js';
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/chart.js/dist/chart.js';
import './server.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TableReportSaleProduct",
  __ssrInlineRender: true,
  props: ["items", "fetchData", "loading"],
  setup(__props) {
    const headers = [
      { text: "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", value: "products_name", sortable: true },
      { text: "\u0E15\u0E49\u0E19\u0E17\u0E38\u0E19", value: "products_cost" },
      { text: "\u0E23\u0E32\u0E04\u0E32\u0E02\u0E32\u0E22", value: "products_price" },
      { text: "\u0E08\u0E33\u0E19\u0E27\u0E19", value: "total_price_quantity" },
      { text: "\u0E15\u0E49\u0E19\u0E17\u0E38\u0E19", value: "total_cost_product" },
      { text: "\u0E02\u0E32\u0E22\u0E44\u0E14\u0E49", value: "total_price_product" },
      { text: "\u0E01\u0E33\u0E44\u0E23", value: "profit" },
      { text: "ROI", value: "roi" }
      // { text: "จัดการ", value: "action" },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EasyDataTable = resolveComponent("EasyDataTable");
      _push(ssrRenderComponent(_component_EasyDataTable, mergeProps({
        headers,
        items: __props.items,
        loading: __props.loading,
        "theme-color": "#5c60f5",
        "show-index": ""
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableReportSaleProduct.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ChartCustomer",
  __ssrInlineRender: true,
  props: ["loading", "chartData"],
  setup(__props) {
    Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!__props.loading) {
        _push(ssrRenderComponent(unref(Bar), {
          data: __props.chartData,
          options: chartOptions.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChartCustomer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ChartCategoryByProduct",
  __ssrInlineRender: true,
  props: ["loading", "chartData"],
  setup(__props) {
    Chart.register(Title, Tooltip, Legend, ArcElement);
    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!__props.loading) {
        _push(ssrRenderComponent(unref(Pie), {
          data: __props.chartData,
          options: chartOptions.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChartCategoryByProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    ref([]);
    ref([]);
    const dataReportSaleProduct = ref([]);
    const chartData = ref({
      labels: [],
      datasets: [
        {
          label: "\u0E0A\u0E37\u0E48\u0E2D\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32",
          backgroundColor: ["#f87979", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff6384"],
          data: []
        }
      ]
    });
    const chartDataCategoryByProduct = ref({
      labels: [],
      datasets: [
        {
          label: "\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49",
          backgroundColor: ["#f87979", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff6384"],
          data: []
        }
      ]
    });
    const fetchDataReportSaleProducts = async () => {
      try {
        const response = await fetch("/api/report/product", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        dataReportSaleProduct.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      const _component_TableReportSaleProduct = _sfc_main$3;
      const _component_ChartCustomer = _sfc_main$2;
      const _component_ChartCategoryByProduct = _sfc_main$1;
      _push(`<!--[--><div class="card shadow border-0 mb-7">`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(`<div class="card-header"><h5 class="text-warning">\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22</h5></div><div class="card-body">`);
      _push(ssrRenderComponent(_component_TableReportSaleProduct, {
        items: unref(dataReportSaleProduct),
        fetchData: fetchDataReportSaleProducts,
        loading: unref(loading)
      }, null, _parent));
      _push(`</div></div><div class="card shadow border-0 mb-7"><div class="card-header"><h5 class="text-warning">\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32</h5></div><div class="card-body">`);
      _push(ssrRenderComponent(_component_ChartCustomer, {
        loading: unref(loading),
        chartData: unref(chartData)
      }, null, _parent));
      _push(`</div></div><div class="card shadow border-0 mb-7"><div class="card-header"><h5 class="text-warning">\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B\u0E01\u0E32\u0E23\u0E02\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</h5></div><div class="card-body">`);
      _push(ssrRenderComponent(_component_ChartCategoryByProduct, {
        loading: unref(loading),
        chartData: unref(chartDataCategoryByProduct)
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/report/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CJrVJzDs.mjs.map
