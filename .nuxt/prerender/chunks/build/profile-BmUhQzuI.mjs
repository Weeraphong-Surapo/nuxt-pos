import { _ as __nuxt_component_0 } from './Loader-B1iCMs9o.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
import { u as useAuthStore } from './authStore-CYGqtA45.mjs';
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
import 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue-toastification/dist/index.cjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const loading = ref(true);
    const form = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(`<div class="card-body"><form><div class="row"><div class="col-md-6"><div class="mb-3"><label for="" class="form-label">\u0E0A\u0E37\u0E48\u0E2D</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).firstName)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-md-6"><div class="mb-3"><label for="" class="form-label">\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).lastName)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mb-3"><label for="" class="form-label">\u0E2D\u0E35\u0E40\u0E21\u0E25</label>`);
      if (unref(form)) {
        _push(`<input type="email" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).email)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="row"><div class="col-md-6"><div class="mb-3"><label for="" class="form-label">\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).username)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-md-6"><div class="mb-3"><label for="" class="form-label">\u0E2A\u0E16\u0E32\u0E19\u0E30</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).isAdmin ? "\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E49\u0E32\u0E19" : "\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19")}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mb-3"><label for="" class="form-label">\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).salary)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-3"><label for="" class="form-label">\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).createdDate)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-3"><label for="" class="form-label">\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E15\u0E40\u0E21\u0E37\u0E48\u0E2D</label>`);
      if (unref(form)) {
        _push(`<input type="text" class="form-control form-control-sm" disabled${ssrRenderAttr("value", unref(form).updatedDate)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="btn btn-success btn-sm">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-BmUhQzuI.mjs.map
