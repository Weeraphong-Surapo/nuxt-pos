import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
import "vue/server-renderer";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="row g-6 mb-6"><div class="col-xl-3 col-sm-6 col-12"><div class="card shadow border-0"><div class="card-body"><div class="row"><div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">สินค้า</span><span class="h3 font-bold mb-0">$750.90</span></div><div class="col-auto"><div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle"><i class="bi bi-credit-card"></i></div></div></div><div class="mt-2 mb-0 text-sm"><span class="badge badge-pill bg-soft-success text-success me-2"><i class="bi bi-arrow-up me-1"></i>13% </span><span class="text-nowrap text-xs text-muted">Since last month</span></div></div></div></div><div class="col-xl-3 col-sm-6 col-12"><div class="card shadow border-0"><div class="card-body"><div class="row"><div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">ลูกค้า</span><span class="h3 font-bold mb-0">215</span></div><div class="col-auto"><div class="icon icon-shape bg-primary text-white text-lg rounded-circle"><i class="bi bi-people"></i></div></div></div><div class="mt-2 mb-0 text-sm"><span class="badge badge-pill bg-soft-success text-success me-2"><i class="bi bi-arrow-up me-1"></i>30% </span><span class="text-nowrap text-xs text-muted">Since last month</span></div></div></div></div><div class="col-xl-3 col-sm-6 col-12"><div class="card shadow border-0"><div class="card-body"><div class="row"><div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">ผู้ใช้งาน</span><span class="h3 font-bold mb-0">1.400</span></div><div class="col-auto"><div class="icon icon-shape bg-info text-white text-lg rounded-circle"><i class="bi bi-clock-history"></i></div></div></div><div class="mt-2 mb-0 text-sm"><span class="badge badge-pill bg-soft-danger text-danger me-2"><i class="bi bi-arrow-down me-1"></i>-5% </span><span class="text-nowrap text-xs text-muted">Since last month</span></div></div></div></div><div class="col-xl-3 col-sm-6 col-12"><div class="card shadow border-0"><div class="card-body"><div class="row"><div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">รายการขาย</span><span class="h3 font-bold mb-0">95%</span></div><div class="col-auto"><div class="icon icon-shape bg-warning text-white text-lg rounded-circle"><i class="bi bi-minecart-loaded"></i></div></div></div><div class="mt-2 mb-0 text-sm"><span class="badge badge-pill bg-soft-success text-success me-2"><i class="bi bi-arrow-up me-1"></i>10% </span><span class="text-nowrap text-xs text-muted">Since last month</span></div></div></div></div><div class="col-xl-3 col-sm-6 col-12"><div class="card shadow border-0"><div class="card-body"><div class="row"><div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">ยอดขายเดือนนี้</span><span class="h3 font-bold mb-0">95%</span></div><div class="col-auto"><div class="icon icon-shape bg-warning text-white text-lg rounded-circle"><i class="bi bi-minecart-loaded"></i></div></div></div><div class="mt-2 mb-0 text-sm"><span class="badge badge-pill bg-soft-success text-success me-2"><i class="bi bi-arrow-up me-1"></i>10% </span><span class="text-nowrap text-xs text-muted">Since last month</span></div></div></div></div><div class="col-xl-3 col-sm-6 col-12"><div class="card shadow border-0"><div class="card-body"><div class="row"><div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">กำไรเดือนนี้</span><span class="h3 font-bold mb-0">95%</span></div><div class="col-auto"><div class="icon icon-shape bg-warning text-white text-lg rounded-circle"><i class="bi bi-minecart-loaded"></i></div></div></div><div class="mt-2 mb-0 text-sm"><span class="badge badge-pill bg-soft-success text-success me-2"><i class="bi bi-arrow-up me-1"></i>10% </span><span class="text-nowrap text-xs text-muted">Since last month</span></div></div></div></div><div class="col-xl-3 col-sm-6 col-12"><div class="card shadow border-0"><div class="card-body"><div class="row"><div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">กำไรทั้งหมด</span><span class="h3 font-bold mb-0">95%</span></div><div class="col-auto"><div class="icon icon-shape bg-warning text-white text-lg rounded-circle"><i class="bi bi-minecart-loaded"></i></div></div></div><div class="mt-2 mb-0 text-sm"><span class="badge badge-pill bg-soft-success text-success me-2"><i class="bi bi-arrow-up me-1"></i>10% </span><span class="text-nowrap text-xs text-muted">Since last month</span></div></div></div></div><div class="col-xl-3 col-sm-6 col-12"><div class="card shadow border-0"><div class="card-body"><div class="row"><div class="col"><span class="h6 font-semibold text-muted text-sm d-block mb-2">ยอดขายทั้งหมด</span><span class="h3 font-bold mb-0">95%</span></div><div class="col-auto"><div class="icon icon-shape bg-warning text-white text-lg rounded-circle"><i class="bi bi-minecart-loaded"></i></div></div></div><div class="mt-2 mb-0 text-sm"><span class="badge badge-pill bg-soft-success text-success me-2"><i class="bi bi-arrow-up me-1"></i>10% </span><span class="text-nowrap text-xs text-muted">Since last month</span></div></div></div></div></div><div class="card shadow border-0 mb-7"><div class="card-header"><h5 class="mb-0">สินค้าขายดี 10 อันดับ</h5></div><div class="card-body"></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-De5V6PM0.js.map
