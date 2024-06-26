import { _ as __nuxt_component_0 } from "./nuxt-link-D35ckuRb.js";
import { _ as __nuxt_component_1 } from "./ConfirmModal-yB27J01D.js";
import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, createVNode, unref, useSSRContext, mergeProps } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderTeleport, ssrRenderAttrs } from "vue/server-renderer";
import "hookable";
import { u as useAuthStore } from "./authStore-CjG5wzUO.js";
import "file-saver";
import "jspdf";
import "jspdf-autotable";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableProduct",
  __ssrInlineRender: true,
  props: ["products", "fetchProduct", "loading"],
  setup(__props) {
    const showModal = ref(false);
    const dataId = ref("");
    const headers = [
      { text: "บาร์โค้ด", value: "barcode", sortable: true },
      { text: "รูปภาพ", value: "image" },
      { text: "สินค้า", value: "name", sortable: true },
      { text: "ต้นทุน", value: "cost", sortable: true },
      { text: "ราคาขาย", value: "price", sortable: true },
      { text: "หมวดหมู่", value: "category.name", sortable: true },
      { text: "ประเภท", value: "sub_category.name", sortable: true },
      { text: "จำนวน", value: "quantity" },
      { text: "สถานนะ", value: "is_active" },
      // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
      { text: "จัดการ", value: "action" }
    ];
    const props = __props;
    const deleteProduct = async () => {
      try {
        const response = await fetch("/api/product/" + dataId.value, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        });
        props.fetchProduct();
      } catch (error) {
        console.log(error);
      }
    };
    const confirmDelete = (id) => {
      dataId.value = id;
      showModal.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EasyDataTable = resolveComponent("EasyDataTable");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ConfirmModal = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_EasyDataTable, {
        headers,
        items: __props.products,
        "theme-color": "#5c60f5",
        loading: __props.loading
      }, {
        "item-action": withCtx(({ id }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="btn-group"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "product-id", params: { id } },
              class: "btn btn-warning btn-sm"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`แก้ไข`);
                } else {
                  return [
                    createTextVNode("แก้ไข")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<button class="btn btn-danger btn-sm" type="button"${_scopeId}> ลบ </button></div>`);
          } else {
            return [
              createVNode("div", { class: "btn-group" }, [
                createVNode(_component_NuxtLink, {
                  to: { name: "product-id", params: { id } },
                  class: "btn btn-warning btn-sm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("แก้ไข")
                  ]),
                  _: 2
                }, 1032, ["to"]),
                createVNode("button", {
                  class: "btn btn-danger btn-sm",
                  type: "button",
                  onClick: ($event) => confirmDelete(id)
                }, " ลบ ", 8, ["onClick"])
              ])
            ];
          }
        }),
        "item-image": withCtx(({ file_path }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", file_path)} alt="" style="${ssrRenderStyle({ "height": "70px", "width": "90px", "object-fit": "cover" })}" class="rounded"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: file_path,
                alt: "",
                style: { "height": "70px", "width": "90px", "object-fit": "cover" },
                class: "rounded"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_ConfirmModal, {
          deleteData: deleteProduct,
          show: unref(showModal),
          onClose: ($event) => showModal.value = false
        }, null, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const items = ref([]);
    const loading = ref(false);
    const getProducts = async () => {
      loading.value = true;
      try {
        const response = await fetch("/api/product", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        items.value = data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_TableProduct = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}><div class="card-header d-flex justify-content-between align-items-center"><h5 class="mb-0">สินค้าทั้งหมด</h5><div class=""><button class="btn btn-sm btn-success">Export Excel</button><button class="btn btn-sm btn-secondary">Export PDF</button><button class="btn btn-sm btn-dark"></button></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-primary btn btn-sm",
        to: { name: "product-create" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-patch-plus fs-6 me-2"${_scopeId}></i>เพิ่มสินค้า`);
          } else {
            return [
              createVNode("i", { class: "bi bi-patch-plus fs-6 me-2" }),
              createTextVNode("เพิ่มสินค้า")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card-body">`);
      _push(ssrRenderComponent(_component_TableProduct, {
        products: unref(items),
        fetchProduct: getProducts,
        loading: unref(loading)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Cysc2_gG.js.map
