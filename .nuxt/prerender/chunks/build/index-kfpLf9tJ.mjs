import { _ as __nuxt_component_0 } from './Loader-B1iCMs9o.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-dJwNCNmO.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, ref, computed, unref, createTextVNode, withDirectives, isRef, vModelText } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttrs, ssrRenderSlot } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/ufo/dist/index.mjs';
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
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue-toastification/dist/index.cjs';

const _sfc_main$2 = {
  __name: "ModalPos",
  __ssrInlineRender: true,
  props: ["total_price"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal-dialog modal-xl",
        id: "exampleModal"
      }, _attrs))}><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalPos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TablePos",
  __ssrInlineRender: true,
  props: ["products", "fetchProduct", "loading", "addToCart"],
  setup(__props) {
    const headers = [
      { text: "\u0E1A\u0E32\u0E23\u0E4C\u0E42\u0E04\u0E49\u0E14", value: "barcode", sortable: true },
      { text: "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E", value: "image" },
      { text: "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", value: "name", sortable: true },
      { text: "\u0E23\u0E32\u0E04\u0E32", value: "price", sortable: true },
      { text: "\u0E08\u0E33\u0E19\u0E27\u0E19", value: "quantity" },
      { text: "Action", value: "action" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EasyDataTable = resolveComponent("EasyDataTable");
      _push(ssrRenderComponent(_component_EasyDataTable, mergeProps({
        headers,
        items: __props.products,
        "theme-color": "#5c60f5",
        loading: __props.loading,
        "rows-per-page": 9
      }, _attrs), {
        "item-action": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="btn-group"${_scopeId}><button class="btn btn-primary btn-sm" type="button"${_scopeId}><i class="bi bi-cart-plus-fill"${_scopeId}></i></button></div>`);
          } else {
            return [
              createVNode("div", { class: "btn-group" }, [
                createVNode("button", {
                  class: "btn btn-primary btn-sm",
                  type: "button",
                  onClick: ($event) => __props.addToCart(item)
                }, [
                  createVNode("i", { class: "bi bi-cart-plus-fill" })
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        "item-image": withCtx(({ file_path }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", file_path)} alt="" style="${ssrRenderStyle({ "height": "60px", "width": "80px", "object-fit": "cover" })}" class="rounded"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: file_path,
                alt: "",
                style: { "height": "60px", "width": "80px", "object-fit": "cover" },
                class: "rounded"
              }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TablePos.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    const showToast = (text) => {
      const toastInstance = nuxtApp.$toast;
      toastInstance.success(text, {
        position: "bottom-right",
        timeout: 2500
      });
    };
    const products = ref([]);
    const type_pay = ref(0);
    const inputMoney = ref("");
    const inputVat = ref(0);
    const loading = ref(false);
    const carts = ref([]);
    const customers = ref([]);
    const customer = ref(0);
    const resultInputMoney = computed(() => {
      return inputMoney.value == "" ? 0 : inputMoney.value;
    });
    const allProducts = async () => {
      loading.value = true;
      try {
        await getAllCustomers();
        const response = await fetch("/api/product", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        products.value = data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };
    const addNumberCalc = (number) => {
      inputMoney.value += number;
    };
    const addToCart = (product) => {
      const existingItemIndex = carts.value.findIndex((item) => item.id === product.id);
      if (existingItemIndex !== -1) {
        carts.value[existingItemIndex].qty++;
        carts.value[existingItemIndex].total_price = carts.value[existingItemIndex].price * carts.value[existingItemIndex].qty;
      } else {
        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          stock: product.quantity,
          qty: 1,
          //   stock:quantity,
          total_price: product.price * 1
        };
        carts.value.push(newItem);
        localStorage.setItem("cart", JSON.stringify(carts.value));
      }
    };
    const paybalance = () => {
      inputMoney.value = Number(total_price_vat_show.value);
    };
    const total_price = computed(() => {
      return carts.value.reduce((total, item) => total + item.price * item.qty, 0);
    });
    const total_price_vat_show = computed(() => {
      let result;
      if (inputVat.value > 0) {
        result = carts.value.reduce((total, item) => total + item.price * item.qty, 0) + vat.value;
      } else {
        result = carts.value.reduce((total, item) => total + item.price * item.qty, 0);
      }
      return result;
    });
    const vat = computed(() => {
      const total = carts.value.reduce((total2, item) => total2 + item.price * item.qty, 0);
      const vatAmount = inputVat.value ? total * inputVat.value / 100 : 0;
      return vatAmount;
    });
    const formatNumber = (vatAmount) => {
      return new Intl.NumberFormat("th-TH", {
        style: "currency",
        currency: "THB"
      }).format(vatAmount);
    };
    const changeMoney = computed(() => {
      return total_price_vat_show.value - inputMoney.value;
    });
    const clearInput = () => {
      inputMoney.value = 0;
    };
    const decreaseLastDigit = () => {
      inputMoney.value = inputMoney.value.slice(0, -1);
    };
    const loadCart = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        carts.value = JSON.parse(storedCart);
      }
    };
    const createListSale = async () => {
      loading.value = true;
      let dataInsert;
      if (type_pay.value == 0) {
        dataInsert = {
          customer: customer.value,
          total_price: total_price.value,
          vat: vat.value,
          total_price_sum_vat: total_price_vat_show.value,
          getMoney: inputMoney.value,
          change_money: changeMoney.value,
          type_pay: type_pay.value,
          orders: carts.value
        };
      } else {
        dataInsert = {
          customer: customer.value,
          total_price: total_price.value,
          vat: vat.value,
          total_price_sum_vat: total_price_vat_show.value,
          getMoney: total_price_vat_show.value,
          change_money: changeMoney.value,
          type_pay: type_pay.value,
          orders: carts.value
        };
      }
      try {
        const response = await fetch("/api/sale", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dataInsert)
        });
        const data = await response.json();
        carts.value = [];
        localStorage.removeItem("cart");
        loadCart();
        showToast("\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E02\u0E32\u0E22\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22");
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
        const modal = (void 0).getElementById("staticBackdrop");
        modal.classList.remove("show");
      }
    };
    const getAllCustomers = async () => {
      try {
        const response = await fetch("/api/customer", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        customers.value = data.data;
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ModalPos = _sfc_main$2;
      const _component_TablePos = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(`<div class="container-fluid px-0" data-v-d95aec05><div class="row" data-v-d95aec05><div class="col-md-7" data-v-d95aec05><div class="card border border-bottom-0 border-end-0 border-start-0 border-4 vh-100" data-v-d95aec05><div class="card-header d-flex justify-content-between align-items-center" data-v-d95aec05><h2 data-v-d95aec05>\u0E02\u0E32\u0E22\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E49\u0E32\u0E19 ${ssrInterpolate(unref(vat))}</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { name: "index" },
        class: "btn btn-danger btn-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Exit`);
          } else {
            return [
              createTextVNode("Exit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="input-group mb-3 input-group-sm" data-v-d95aec05><span class="input-group-text" id="basic-addon1" data-v-d95aec05><i class="bi bi-person-circle" data-v-d95aec05></i></span><input readonly type="text" class="form-control form-control-sm" placeholder="\u0E27\u0E35\u0E23\u0E30\u0E1E\u0E07\u0E29\u0E4C \u0E2A\u0E38\u0E23\u0E32\u0E42\u0E1E\u0E18\u0E34\u0E4C" data-v-d95aec05></div><div class="input-group input-group-sm mb-3" data-v-d95aec05><span class="input-group-text" data-v-d95aec05><i class="bi bi-people-fill" data-v-d95aec05></i></span><select class="form-select form-select-sm" data-v-d95aec05><option value="" disabled selected data-v-d95aec05>\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32</option><!--[-->`);
      ssrRenderList(unref(customers), (customer2, index2) => {
        _push(`<option${ssrRenderAttr("value", customer2.id)} data-v-d95aec05>${ssrInterpolate(customer2.full_name)}</option>`);
      });
      _push(`<!--]--></select><button type="button" class="input-group-text bg-dark text-white" data-v-d95aec05> \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 </button></div><div class="border border-1 border-warning" data-v-d95aec05></div><p class="text-center mt-1" data-v-d95aec05>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 (${ssrInterpolate(unref(carts).length)})</p><div class="card-body mb-0 pb-0" style="${ssrRenderStyle({ "max-height": "calc(100vh - 150px)", "overflow-y": "auto" })}" data-v-d95aec05><!--[-->`);
      ssrRenderList(unref(carts), (cart, i) => {
        _push(`<div class="d-flex align-items-center mb-3" style="${ssrRenderStyle({ "overflow-y": "auto" })}" data-v-d95aec05><div class="input-group input-group-sm rounded-0" data-v-d95aec05><button type="button" class="input-group-text bg-danger text-white rounded-0" data-v-d95aec05> X </button><input readonly type="text" class="form-control form-control-sm rounded-0"${ssrRenderAttr("value", cart.name)} data-v-d95aec05></div><div class="d-flex" data-v-d95aec05><button class="btn btn-warning btn-sm rounded-0" data-v-d95aec05> - </button><span style="${ssrRenderStyle({ "width": "70px" })}" class="text-center border" data-v-d95aec05>${ssrInterpolate(cart.qty)}</span><button class="btn btn-primary btn-sm rounded-0" data-v-d95aec05> + </button></div><div class="input-group input-group-sm w-100" data-v-d95aec05><input readonly type="text" class="form-control form-control-sm text-end rounded-0"${ssrRenderAttr("value", cart.total_price)} data-v-d95aec05><button type="button" class="input-group-text bg-info text-white rounded-0" data-v-d95aec05> \u0E3F </button></div></div>`);
      });
      _push(`<!--]--></div><div class="p-3 border-3 border-secondary" data-v-d95aec05><div class="row mb-3" data-v-d95aec05><label for="" class="col-sm-2 col-form-label" data-v-d95aec05>\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E47\u0E19 (VAT)</label><div class="col-sm-10" data-v-d95aec05><input type="number" class="form-control form-control-sm text-end"${ssrRenderAttr("value", unref(inputVat))} data-v-d95aec05></div></div><div class="row mb-3" data-v-d95aec05><label for="" class="col-sm-2 col-form-label" data-v-d95aec05>\u0E20\u0E32\u0E29\u0E35</label><div class="col-sm-10" data-v-d95aec05><input readonly type="text" class="form-control form-control-sm text-end"${ssrRenderAttr("value", formatNumber(unref(vat)))} data-v-d95aec05></div></div><div class="row mb-3" data-v-d95aec05><label for="" class="col-sm-2 col-form-label" data-v-d95aec05>\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E34\u0E49\u0E19</label><div class="col-sm-10" data-v-d95aec05><input type="text" class="form-control form-control-sm text-end"${ssrRenderAttr("value", formatNumber(unref(total_price_vat_show)))} readonly data-v-d95aec05></div></div></div><button class="btn btn-success w-100 rounded-0 btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop"${ssrIncludeBooleanAttr(unref(carts).length < 1) ? " disabled" : ""} data-v-d95aec05> \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D </button><div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-v-d95aec05>`);
      _push(ssrRenderComponent(_component_ModalPos, { total_price: unref(total_price) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row" data-v-d95aec05${_scopeId}><div class="col-12" data-v-d95aec05${_scopeId}><div class="list-group list-group-horizontal-sm" id="list-tab" role="tablist" data-v-d95aec05${_scopeId}><a class="list-group-item list-group-item-action active text-center" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home" data-v-d95aec05${_scopeId}>\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14</a><a class="list-group-item list-group-item-action text-center" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" data-v-d95aec05${_scopeId}>\u0E42\u0E2D\u0E19\u0E0A\u0E33\u0E23\u0E30</a></div></div><div class="col-12" data-v-d95aec05${_scopeId}><div class="tab-content" id="nav-tabContent" data-v-d95aec05${_scopeId}><div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list" data-v-d95aec05${_scopeId}><div class="row" data-v-d95aec05${_scopeId}><div class="col-md-6" data-v-d95aec05${_scopeId}><div class="my-3" data-v-d95aec05${_scopeId}><div class="input-group flex-nowrap" data-v-d95aec05${_scopeId}><span class="input-group-text" style="${ssrRenderStyle({ "width": "150px" })}" id="addon-wrapping" data-v-d95aec05${_scopeId}>\u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21\u0E40\u0E07\u0E34\u0E19\u0E0A\u0E33\u0E23\u0E30</span><input type="text" class="form-control from-control-sm text-end"${ssrRenderAttr("value", formatNumber(unref(total_price_vat_show)))} readonly data-v-d95aec05${_scopeId}></div></div><div class="mb-3" data-v-d95aec05${_scopeId}><div class="input-group flex-nowrap" data-v-d95aec05${_scopeId}><span class="input-group-text" style="${ssrRenderStyle({ "width": "150px" })}" id="addon-wrapping" data-v-d95aec05${_scopeId}>\u0E22\u0E2D\u0E14\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19</span><input type="text" class="form-control from-control-sm text-end"${ssrRenderAttr("value", unref(resultInputMoney))} data-v-d95aec05${_scopeId}></div></div><div class="mb-3" data-v-d95aec05${_scopeId}><div class="input-group flex-nowrap" data-v-d95aec05${_scopeId}><span class="input-group-text" style="${ssrRenderStyle({ "width": "150px" })}" id="addon-wrapping" data-v-d95aec05${_scopeId}>\u0E22\u0E2D\u0E14\u0E40\u0E07\u0E34\u0E19\u0E17\u0E2D\u0E19</span><input type="text" class="form-control from-control-sm text-end"${ssrRenderAttr("value", formatNumber(unref(changeMoney)))} readonly data-v-d95aec05${_scopeId}></div></div><div class="row" data-v-d95aec05${_scopeId}><div class="col-md-6" data-v-d95aec05${_scopeId}><button type="button" class="btn btn-info text-white w-100 mb-3" data-v-d95aec05${_scopeId}> \u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E1E\u0E2D\u0E14\u0E35 </button></div><div class="col-md-6" data-v-d95aec05${_scopeId}><button type="button" class="btn btn-success w-100 mb-3" data-v-d95aec05${_scopeId}> \u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19 </button></div></div><button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal" data-v-d95aec05${_scopeId}> \u0E1B\u0E34\u0E14 </button></div><div class="col-md-6" data-v-d95aec05${_scopeId}><div class="calculator mt-3" data-v-d95aec05${_scopeId}><div class="calculator-keys" data-v-d95aec05${_scopeId}><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 7 </button><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 8 </button><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 9 </button><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 4 </button><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 5 </button><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 6 </button><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 1 </button><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 2 </button><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 3 </button><button type="button" class="decimal text-white btn-hover bg-primary" data-v-d95aec05${_scopeId}> &lt;= </button><button type="button" class="bg-primary text-white btn-hover" data-v-d95aec05${_scopeId}> 0 </button><button type="button" class="all-clear text-white btn-hover bg-primary" data-v-d95aec05${_scopeId}> AC </button></div></div></div></div></div><div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list" data-v-d95aec05${_scopeId}><span class="text-muted d-block my-3" data-v-d95aec05${_scopeId}> \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E17\u0E33\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C <span class="text-danger" data-v-d95aec05${_scopeId}>\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E2D\u0E32\u0E44\u0E27\u0E49</span> \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19 <span class="text-success" data-v-d95aec05${_scopeId}>\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E38\u0E48\u0E21 &quot;\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E41\u0E25\u0E49\u0E27&quot;</span> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27\u0E41\u0E25\u0E30\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07.</span><div class="d-flex justify-content-center" data-v-d95aec05${_scopeId}><button class="btn btn-success btn-lg" data-v-d95aec05${_scopeId}> \u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E41\u0E25\u0E49\u0E27 </button></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-12" }, [
                  createVNode("div", {
                    class: "list-group list-group-horizontal-sm",
                    id: "list-tab",
                    role: "tablist"
                  }, [
                    createVNode("a", {
                      class: "list-group-item list-group-item-action active text-center",
                      id: "list-home-list",
                      "data-bs-toggle": "list",
                      href: "#list-home",
                      role: "tab",
                      "aria-controls": "list-home",
                      onClick: ($event) => type_pay.value = 0
                    }, "\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14", 8, ["onClick"]),
                    createVNode("a", {
                      class: "list-group-item list-group-item-action text-center",
                      id: "list-profile-list",
                      "data-bs-toggle": "list",
                      href: "#list-profile",
                      role: "tab",
                      "aria-controls": "list-profile",
                      onClick: ($event) => type_pay.value = 1
                    }, "\u0E42\u0E2D\u0E19\u0E0A\u0E33\u0E23\u0E30", 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "col-12" }, [
                  createVNode("div", {
                    class: "tab-content",
                    id: "nav-tabContent"
                  }, [
                    createVNode("div", {
                      class: "tab-pane fade show active",
                      id: "list-home",
                      role: "tabpanel",
                      "aria-labelledby": "list-home-list"
                    }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("div", { class: "my-3" }, [
                            createVNode("div", { class: "input-group flex-nowrap" }, [
                              createVNode("span", {
                                class: "input-group-text",
                                style: { "width": "150px" },
                                id: "addon-wrapping"
                              }, "\u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21\u0E40\u0E07\u0E34\u0E19\u0E0A\u0E33\u0E23\u0E30"),
                              createVNode("input", {
                                type: "text",
                                class: "form-control from-control-sm text-end",
                                value: formatNumber(unref(total_price_vat_show)),
                                readonly: ""
                              }, null, 8, ["value"])
                            ])
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("div", { class: "input-group flex-nowrap" }, [
                              createVNode("span", {
                                class: "input-group-text",
                                style: { "width": "150px" },
                                id: "addon-wrapping"
                              }, "\u0E22\u0E2D\u0E14\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                class: "form-control from-control-sm text-end",
                                "onUpdate:modelValue": ($event) => isRef(resultInputMoney) ? resultInputMoney.value = $event : null
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(resultInputMoney)]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("div", { class: "input-group flex-nowrap" }, [
                              createVNode("span", {
                                class: "input-group-text",
                                style: { "width": "150px" },
                                id: "addon-wrapping"
                              }, "\u0E22\u0E2D\u0E14\u0E40\u0E07\u0E34\u0E19\u0E17\u0E2D\u0E19"),
                              createVNode("input", {
                                type: "text",
                                class: "form-control from-control-sm text-end",
                                value: formatNumber(unref(changeMoney)),
                                readonly: ""
                              }, null, 8, ["value"])
                            ])
                          ]),
                          createVNode("div", { class: "row" }, [
                            createVNode("div", { class: "col-md-6" }, [
                              createVNode("button", {
                                type: "button",
                                class: "btn btn-info text-white w-100 mb-3",
                                onClick: paybalance
                              }, " \u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E1E\u0E2D\u0E14\u0E35 ")
                            ]),
                            createVNode("div", { class: "col-md-6" }, [
                              createVNode("button", {
                                type: "button",
                                class: "btn btn-success w-100 mb-3",
                                onClick: ($event) => createListSale()
                              }, " \u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19 ", 8, ["onClick"])
                            ])
                          ]),
                          createVNode("button", {
                            type: "button",
                            class: "btn btn-secondary w-100",
                            "data-bs-dismiss": "modal"
                          }, " \u0E1B\u0E34\u0E14 ")
                        ]),
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("div", { class: "calculator mt-3" }, [
                            createVNode("div", { class: "calculator-keys" }, [
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("7")
                              }, " 7 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("8")
                              }, " 8 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("9")
                              }, " 9 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("4")
                              }, " 4 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("5")
                              }, " 5 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("6")
                              }, " 6 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("1")
                              }, " 1 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("2")
                              }, " 2 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("3")
                              }, " 3 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "decimal text-white btn-hover bg-primary",
                                onClick: decreaseLastDigit
                              }, " <= "),
                              createVNode("button", {
                                type: "button",
                                class: "bg-primary text-white btn-hover",
                                onClick: ($event) => addNumberCalc("0")
                              }, " 0 ", 8, ["onClick"]),
                              createVNode("button", {
                                type: "button",
                                class: "all-clear text-white btn-hover bg-primary",
                                onClick: ($event) => clearInput()
                              }, " AC ", 8, ["onClick"])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "tab-pane fade",
                      id: "list-profile",
                      role: "tabpanel",
                      "aria-labelledby": "list-profile-list"
                    }, [
                      createVNode("span", { class: "text-muted d-block my-3" }, [
                        createTextVNode(" \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E17\u0E33\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C "),
                        createVNode("span", { class: "text-danger" }, "\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E2D\u0E32\u0E44\u0E27\u0E49"),
                        createTextVNode(" \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19 "),
                        createVNode("span", { class: "text-success" }, '\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E38\u0E48\u0E21 "\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E41\u0E25\u0E49\u0E27"'),
                        createTextVNode(" \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27\u0E41\u0E25\u0E30\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07.")
                      ]),
                      createVNode("div", { class: "d-flex justify-content-center" }, [
                        createVNode("button", {
                          class: "btn btn-success btn-lg",
                          onClick: ($event) => createListSale()
                        }, " \u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\u0E41\u0E25\u0E49\u0E27 ", 8, ["onClick"])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-5" data-v-d95aec05><div class="card border border-bottom-0 border-start-0 border-end-0 border-4" data-v-d95aec05><div class="card-header" data-v-d95aec05><input type="text" class="form-control mb-3 border-danger" placeholder="search..." data-v-d95aec05><select class="form-select form-select-sm border-danger" data-v-d95aec05><option value="" data-v-d95aec05></option><option value="" data-v-d95aec05></option></select></div><div class="card-bod" data-v-d95aec05><div class="table-responsive" data-v-d95aec05>`);
      _push(ssrRenderComponent(_component_TablePos, {
        fetchProduct: allProducts,
        products: unref(products),
        loading: unref(loading),
        addToCart
      }, null, _parent));
      _push(`</div></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pos/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d95aec05"]]);

export { index as default };
//# sourceMappingURL=index-kfpLf9tJ.mjs.map
