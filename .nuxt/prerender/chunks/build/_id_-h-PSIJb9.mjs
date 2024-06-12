import { _ as __nuxt_component_0 } from './Loader-B1iCMs9o.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { u as useRoute } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    useRoute();
    const form = ref({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      salary: "",
      isAdmin: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card shadow border-0 mb-7" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Loader, { loading: unref(loading) }, null, _parent));
      _push(` ${ssrInterpolate(unref(form))} <div class="card-body"><form><div class="mb-3"><label for="exampleInputEmail1" class="form-label">\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).username)}></div><div class="mb-3"><label for="exampleInputEmail1" class="form-label">\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19</label><input type="text" class="form-control form-control-sm" value="****************" disabled></div><div class="row"><div class="col-md-6"><div class="mb-3"><label for="exampleInputEmail1" class="form-label">\u0E0A\u0E37\u0E48\u0E2D</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).firstName)}></div></div><div class="col-md-6"><div class="mb-3"><label for="exampleInputEmail1" class="form-label">\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).lastName)}></div></div></div><div class="mb-3"><label for="exampleInputEmail1" class="form-label">\u0E2D\u0E35\u0E40\u0E21\u0E25</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).email)}></div><div class="mb-3"><label for="exampleInputEmail1" class="form-label">\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19</label><input type="text" class="form-control form-control-sm"${ssrRenderAttr("value", unref(form).salary)}></div><div class="mb-3"><label for="exampleInputEmail1" class="form-label">\u0E2A\u0E16\u0E32\u0E19\u0E30</label><select class="form-select form-select-sm"><option value="0" selected>\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19</option><option value="1">\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E49\u0E32\u0E19</option></select></div><button class="btn btn-sm btn-primary">\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-h-PSIJb9.mjs.map
