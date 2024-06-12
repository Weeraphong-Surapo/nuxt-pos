import { _ as __nuxt_component_0 } from "./nuxt-link-dJwNCNmO.js";
import { _ as __nuxt_component_1 } from "./ConfirmModal-yB27J01D.js";
import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, createVNode, unref, useSSRContext, mergeProps } from "vue";
import { ssrRenderComponent, ssrRenderTeleport, ssrRenderAttrs } from "vue/server-renderer";
import { a as useNuxtApp } from "../server.mjs";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "ufo";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "@vue/devtools-api";
import "vue3-easy-data-table";
import "vue-toastification";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableSubCategory",
  __ssrInlineRender: true,
  props: ["sub_categorys", "fetchSubCategorys", "loading"],
  setup(__props) {
    const nuxtApp = useNuxtApp();
    const showToast = (text) => {
      const toastInstance = nuxtApp.$toast;
      toastInstance.success(text, {
        position: "bottom-right",
        timeout: 2500
      });
    };
    const showModal = ref(false);
    const sub_category_id = ref("");
    const headers = [
      { text: "หมวดหมู่", value: "categorys.name", sortable: true },
      { text: "ประเภท", value: "name", sortable: true },
      // { text: "WEIGHT (lbs)", value: "indicator.weight"},
      // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
      { text: "จัดการ", value: "action" }
    ];
    const props = __props;
    const deleteCategory = async () => {
      try {
        console.log("hello");
        const response = await fetch("/api/subcategory/" + sub_category_id.value, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        });
        props.fetchSubCategorys();
        showToast("ลบข้อมูลสำเร็จ");
      } catch (error) {
        console.log(error);
      } finally {
        showModal.value = false;
      }
    };
    const confirmDelete = (subcategoryId) => {
      sub_category_id.value = subcategoryId;
      showModal.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EasyDataTable = resolveComponent("EasyDataTable");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ConfirmModal = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_EasyDataTable, {
        headers,
        items: __props.sub_categorys,
        loading: __props.loading,
        "theme-color": "#5c60f5",
        "show-index": ""
      }, {
        "item-action": withCtx(({ id }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="btn-group"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "category-subcategory-id", params: { id } },
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
                  to: { name: "category-subcategory-id", params: { id } },
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
        _: 1
      }, _parent));
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_ConfirmModal, {
          deleteData: deleteCategory,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableSubCategory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([]);
    const loading = ref(false);
    const getSubCategorys = async () => {
      loading.value = true;
      try {
        const response = await fetch("/api/subcategory", {
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
      const _component_TableSubCategory = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}><div class="card-header d-flex justify-content-between align-items-center"><h5 class="mb-0">ประเภททั้งหมด</h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-primary btn btn-sm",
        to: { name: "category-subcategory-create" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-patch-plus fs-6 me-2"${_scopeId}></i>เพิ่มประเภท`);
          } else {
            return [
              createVNode("i", { class: "bi bi-patch-plus fs-6 me-2" }),
              createTextVNode("เพิ่มประเภท")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card-body">`);
      _push(ssrRenderComponent(_component_TableSubCategory, {
        sub_categorys: unref(items),
        fetchSubCategorys: getSubCategorys,
        loading: unref(loading)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/subcategory/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BJXZrFrB.js.map
