import { ssrRenderAttrs } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { custom as default };
//# sourceMappingURL=custom-DFwauI4X.mjs.map
