import { mergeProps, useSSRContext } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle } from 'file:///Applications/nodejs_project/full_stack_nuxt_express/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "ConfirmModal",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    deleteData: Function
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-mask" }, _attrs))} data-v-a8fae1ae><div class="modal-container" data-v-a8fae1ae><div class="modal-body p-0 text-center" data-v-a8fae1ae>`);
        ssrRenderSlot(_ctx.$slots, "body", {}, () => {
          _push(`<i class="bi bi-exclamation-square text-warning" style="${ssrRenderStyle({ "font-size": "60px" })}" data-v-a8fae1ae></i><h4 class="text-dark" data-v-a8fae1ae>\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ?</h4>`);
        }, _push, _parent);
        _push(`</div><div class="modal-footer d-flex justify-content-center pt-3 pb-0" data-v-a8fae1ae>`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
          _push(`<div class="" data-v-a8fae1ae><button class="btn btn-danger btn-sm me-5" data-v-a8fae1ae> DELETE </button><button class="btn btn-secondary btn-sm" data-v-a8fae1ae> Close </button></div>`);
        }, _push, _parent);
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConfirmModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8fae1ae"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ConfirmModal-yB27J01D.mjs.map
