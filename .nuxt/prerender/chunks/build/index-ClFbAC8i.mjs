import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, resolveComponent } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
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
  __name: "TableUser",
  __ssrInlineRender: true,
  props: ["users", "fetchUsers", "loading"],
  setup(__props) {
    const headers = [
      { text: "\u0E0A\u0E37\u0E48\u0E2D", value: "firstName", sortable: true },
      { text: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19", value: "username" },
      { text: "\u0E2D\u0E35\u0E40\u0E21\u0E25", value: "email" },
      { text: "\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19", value: "salary" },
      { text: "\u0E2A\u0E16\u0E32\u0E19\u0E30", value: "active" },
      // { text: "WEIGHT (lbs)", value: "indicator.weight"},
      // { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
      { text: "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23", value: "action" }
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
                  _push3(`\u0E41\u0E01\u0E49\u0E44\u0E02`);
                } else {
                  return [
                    createTextVNode("\u0E41\u0E01\u0E49\u0E44\u0E02")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<button class="btn btn-danger btn-sm" type="button"${_scopeId}> \u0E25\u0E1A </button></div>`);
          } else {
            return [
              createVNode("div", { class: "btn-group" }, [
                createVNode(_component_NuxtLink, {
                  to: { name: "user-id", params: { id } },
                  class: "btn btn-warning btn-sm"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u0E41\u0E01\u0E49\u0E44\u0E02")
                  ]),
                  _: 2
                }, 1032, ["to"]),
                createVNode("button", {
                  class: "btn btn-danger btn-sm",
                  type: "button",
                  onClick: ($event) => deleteUser(Number(id))
                }, " \u0E25\u0E1A ", 8, ["onClick"])
              ])
            ];
          }
        }),
        "item-active": withCtx(({ id }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="badge text-bg-success"${_scopeId}>\u0E1B\u0E01\u0E15\u0E34</button>`);
          } else {
            return [
              createVNode("button", { class: "badge text-bg-success" }, "\u0E1B\u0E01\u0E15\u0E34")
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}><div class="card-header d-flex justify-content-between align-items-center"><h5 class="mb-0">\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn-primary btn btn-sm",
        to: { name: "user-create" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-patch-plus fs-6 me-2"${_scopeId}></i>\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19`);
          } else {
            return [
              createVNode("i", { class: "bi bi-patch-plus fs-6 me-2" }),
              createTextVNode("\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")
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

export { _sfc_main as default };
//# sourceMappingURL=index-ClFbAC8i.mjs.map
