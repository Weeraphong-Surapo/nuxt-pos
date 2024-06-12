import { _ as __nuxt_component_0 } from "./nuxt-link-D35ckuRb.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, ref, unref } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableUser",
  __ssrInlineRender: true,
  props: ["users", "fetchUsers", "loading"],
  setup(__props) {
    const headers = [
      { text: "ชื่อ", value: "firstName", sortable: true },
      { text: "ชื่อผู้ใช้งาน", value: "username" },
      { text: "อีเมล", value: "email" },
      { text: "เงินเดือน", value: "salary" },
      { text: "สถานะ", value: "active" },
      // { text: "WEIGHT (lbs)", value: "indicator.weight"},
      // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
      { text: "จัดการ", value: "action" }
    ];
    const props = __props;
    const deleteUser = async (userId) => {
      try {
        const response = await fetch("/api/user/" + userId, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        });
        props.fetchUsers();
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EasyDataTable = resolveComponent("EasyDataTable");
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_EasyDataTable, mergeProps({
        headers,
        items: __props.users,
        loading: __props.loading,
        "theme-color": "#5c60f5",
        "show-index": ""
      }, _attrs), {
        "item-action": withCtx(({ id }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="btn-group"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "user-id", params: { id } },
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
                  to: { name: "user-id", params: { id } },
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
                  onClick: ($event) => deleteUser(Number(id))
                }, " ลบ ", 8, ["onClick"])
              ])
            ];
          }
        }),
        "item-active": withCtx(({ id }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="badge text-bg-success"${_scopeId}>ปกติ</button>`);
          } else {
            return [
              createVNode("button", { class: "badge text-bg-success" }, "ปกติ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([]);
    ref(false);
    const loading = ref(false);
    const getUsers = async () => {
      loading.value = true;
      try {
        const response = await fetch("/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        items.value = data.data;
        console.log(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_TableUser = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}><div class="card-header d-flex justify-content-between align-items-center"><h5 class="mb-0">ผู้ใช้งานทั้งหมด</h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-primary btn btn-sm",
        to: { name: "user-create" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-patch-plus fs-6 me-2"${_scopeId}></i>เพิ่มผู้ใช้งาน`);
          } else {
            return [
              createVNode("i", { class: "bi bi-patch-plus fs-6 me-2" }),
              createTextVNode("เพิ่มผู้ใช้งาน")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card-body">`);
      _push(ssrRenderComponent(_component_TableUser, {
        users: unref(items),
        fetchUsers: getUsers,
        loading: unref(loading)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-ClFbAC8i.js.map
