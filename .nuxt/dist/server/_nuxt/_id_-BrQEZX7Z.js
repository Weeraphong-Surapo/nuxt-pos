import { _ as __nuxt_component_0 } from "./Loader-B1iCMs9o.js";
import { mergeProps, useSSRContext, defineComponent, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useRoute } from "../server.mjs";
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
const _sfc_main$1 = {
  __name: "TableOrder",
  __ssrInlineRender: true,
  props: ["products", "total_price_sum_vat", "total_price", "vat"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<table${ssrRenderAttrs(mergeProps({ class: "table" }, _attrs))}><thead><tr><th>รหัสสินค้า</th><th>สินค้า</th><th>ราคา</th><th>จำนวน</th><th>รวม</th></tr></thead><tbody>`);
      if (__props.products) {
        _push(`<!--[-->`);
        ssrRenderList(__props.products, (product, index) => {
          _push(`<tr><td>${ssrInterpolate(product.product.barcode)}</td><td>${ssrInterpolate(product.product.name)}</td><td>${ssrInterpolate(product.product.price)}</td><td>${ssrInterpolate(product.quantity)}</td><td>${ssrInterpolate(product.product.price * product.quantity)}.00</td></tr>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody><tfoot><tr><td colspan="5" class="text-center">ภาษี ${ssrInterpolate(__props.vat)} บาท</td></tr><tr><td colspan="5" class="text-center">ราคารวม ${ssrInterpolate(__props.total_price)} บาท</td></tr><tr><td colspan="5" class="text-center bg-success"><h5 class="text-white">ราคาทั้งสิ้น ${ssrInterpolate(__props.total_price_sum_vat)} บาท</h5></td></tr></tfoot></table>`);
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
      var _a, _b, _c, _d, _e;
      const _component_Loader = __nuxt_component_0;
      const _component_TableOrder = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}><div class="card-header d-flex justify-content-between align-items-center"><h5 class="mb-0">Order #32430324 / วันที่ ${ssrInterpolate((_a = unref(sale)) == null ? void 0 : _a.createdDate)}</h5><div><button class="btn btn-sm btn-warning me-3">Print</button><button class="btn btn-sm btn-info">Excel</button></div></div>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(`<div class="card-body"><div class="row"><div class="col-md-4"><form><div class="mb-3"><label for="" class="form-label">ชื่อลูกค้า</label><input type="email" class="form-control form-control-sm" readonly disabled value="test"></div><div class="mb-3"><label for="" class="form-label">เบอร์โทร</label><input type="test" class="form-control form-control-sm" readonly disabled value="test"></div><div class="mb-3"><label for="" class="form-label">ไลน์</label><input type="test" class="form-control form-control-sm" readonly disabled value="test"></div><div class="mb-3"><label for="" class="form-label">ที่อยู่</label><input type="test" class="form-control form-control-sm" readonly disabled value="test"></div></form></div><div class="col-md-8">`);
      _push(ssrRenderComponent(_component_TableOrder, {
        products: ((_b = unref(sale)) == null ? void 0 : _b.orders) ?? [],
        total_price: ((_c = unref(sale)) == null ? void 0 : _c.total_price) ?? "",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-BrQEZX7Z.js.map
