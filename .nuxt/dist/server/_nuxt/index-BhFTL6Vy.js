import { _ as __nuxt_component_0 } from "./Loader-B1iCMs9o.js";
import { defineComponent, resolveComponent, mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { Bar, Pie } from "vue-chartjs";
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from "chart.js";
import "../server.mjs";
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TableReportSaleProduct",
  __ssrInlineRender: true,
  props: ["items", "fetchData", "loading"],
  setup(__props) {
    const headers = [
      { text: "สินค้า", value: "products_name", sortable: true },
      { text: "ต้นทุน", value: "products_cost" },
      { text: "ราคาขาย", value: "products_price" },
      { text: "จำนวน", value: "total_price_quantity" },
      { text: "ต้นทุน", value: "total_cost_product" },
      { text: "ขายได้", value: "total_price_product" },
      { text: "กำไร", value: "profit" },
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
          label: "ชื่อลูกค้า",
          backgroundColor: ["#f87979", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff6384"],
          data: []
        }
      ]
    });
    const chartDataCategoryByProduct = ref({
      labels: [],
      datasets: [
        {
          label: "รายได้",
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
      _push(`<div class="card-header"><h5 class="text-warning">รายงานสรุปยอดขาย</h5></div><div class="card-body">`);
      _push(ssrRenderComponent(_component_TableReportSaleProduct, {
        items: unref(dataReportSaleProduct),
        fetchData: fetchDataReportSaleProducts,
        loading: unref(loading)
      }, null, _parent));
      _push(`</div></div><div class="card shadow border-0 mb-7"><div class="card-header"><h5 class="text-warning">รายงานสรุปการซื้อลูกค้า</h5></div><div class="card-body">`);
      _push(ssrRenderComponent(_component_ChartCustomer, {
        loading: unref(loading),
        chartData: unref(chartData)
      }, null, _parent));
      _push(`</div></div><div class="card shadow border-0 mb-7"><div class="card-header"><h5 class="text-warning">รายงานสรุปการขายประเภทสินค้า</h5></div><div class="card-body">`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BhFTL6Vy.js.map
