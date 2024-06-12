import { _ as __nuxt_component_0 } from './nuxt-link-dJwNCNmO.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, createVNode, createTextVNode, unref } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
import { u as useAuthStore } from './authStore-CYGqtA45.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdminSideBar",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const isAdmin = computed(() => {
      var _a;
      return ((_a = authStore.user) == null ? void 0 : _a.isAdmin) ? true : false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg",
        id: "navbarVertical"
      }, _attrs))}><div class="container-fluid"><button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#"><img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..."></a><div class="navbar-user d-lg-none"><div class="dropdown"><a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><div class="avatar-parent-child"><img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80" class="avatar avatar- rounded-circle"><span class="avatar-child avatar-badge bg-success"></span></div></a><div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar"><a href="#" class="dropdown-item">Profile</a><a href="#" class="dropdown-item">Settings</a><a href="#" class="dropdown-item">Billing</a><hr class="dropdown-divider"><a href="#" class="dropdown-item">Logout</a></div></div></div><div class="collapse navbar-collapse" id="sidebarCollapse"><ul class="navbar-nav"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: { name: "index" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-house"${_scopeId}></i> \u0E41\u0E14\u0E0A\u0E1A\u0E2D\u0E23\u0E4C\u0E14 `);
          } else {
            return [
              createVNode("i", { class: "bi bi-house" }),
              createTextVNode(" \u0E41\u0E14\u0E0A\u0E1A\u0E2D\u0E23\u0E4C\u0E14 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: { name: "product" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-bar-chart"${_scopeId}></i> \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 `);
          } else {
            return [
              createVNode("i", { class: "bi bi-bar-chart" }),
              createTextVNode(" \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: { name: "category" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-bar-chart"${_scopeId}></i> \u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48 `);
          } else {
            return [
              createVNode("i", { class: "bi bi-bar-chart" }),
              createTextVNode(" \u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: { name: "category-subcategory" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-bar-chart"${_scopeId}></i> \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 `);
          } else {
            return [
              createVNode("i", { class: "bi bi-bar-chart" }),
              createTextVNode(" \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: { name: "customer" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-bar-chart"${_scopeId}></i> \u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 `);
          } else {
            return [
              createVNode("i", { class: "bi bi-bar-chart" }),
              createTextVNode(" \u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: { name: "sale" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-bar-chart"${_scopeId}></i> \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E02\u0E32\u0E22 `);
          } else {
            return [
              createVNode("i", { class: "bi bi-bar-chart" }),
              createTextVNode(" \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E02\u0E32\u0E22 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (unref(isAdmin)) {
        _push(`<li class="nav-item">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link",
          to: { name: "report" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="bi bi-bar-chart"${_scopeId}></i> \u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E02\u0E32\u0E22 `);
            } else {
              return [
                createVNode("i", { class: "bi bi-bar-chart" }),
                createTextVNode(" \u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E02\u0E32\u0E22 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: { name: "user" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-bar-chart"${_scopeId}></i> \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 `);
          } else {
            return [
              createVNode("i", { class: "bi bi-bar-chart" }),
              createTextVNode(" \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><hr class="navbar-divider my-5 opacity-20"><div class="mt-auto"></div><ul class="navbar-nav"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { name: "user-profile" },
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="bi bi-person-square"${_scopeId}></i> \u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19 `);
          } else {
            return [
              createVNode("i", { class: "bi bi-person-square" }),
              createTextVNode(" \u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-box-arrow-left"></i> Logout </a></li></ul></div></div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminSideBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-surface-primary border-bottom pt-6 pb-6" }, _attrs))}><div class="container-fluid"><div class="mb-npx"><div class="row align-items-center"><div class="col-sm-6 col-12 mb-4 mb-sm-0"><h1 class="h2 mb-0 ls-tight">Application</h1></div><div class="col-sm-6 col-12 text-sm-end"><div class="mx-n1"><a href="#" class="btn d-inline-flex btn-sm btn-neutral border-base mx-1"><span class="pe-2"><i class="bi bi-pencil"></i></span><span>Edit</span></a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { name: "pos" },
    class: "btn d-inline-flex btn-sm btn-primary mx-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="pe-2"${_scopeId}><i class="bi bi-plus"${_scopeId}></i></span><span${_scopeId}>POS</span>`);
      } else {
        return [
          createVNode("span", { class: "pe-2" }, [
            createVNode("i", { class: "bi bi-plus" })
          ]),
          createVNode("span", null, "POS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AdminSideBar = _sfc_main$2;
  const _component_AdminHeader = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary" }, _attrs))} data-v-f63ee164>`);
  _push(ssrRenderComponent(_component_AdminSideBar, null, null, _parent));
  _push(`<div class="h-screen flex-grow-1 overflow-y-lg-auto" data-v-f63ee164>`);
  _push(ssrRenderComponent(_component_AdminHeader, null, null, _parent));
  _push(`<main class="py-6 bg-surface-secondary" data-v-f63ee164><div class="container-fluid" data-v-f63ee164>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f63ee164"]]);

export { _default as default };
//# sourceMappingURL=default-B4_k80jD.mjs.map
