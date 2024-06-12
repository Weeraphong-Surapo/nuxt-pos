import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "Loader",
  __ssrInlineRender: true,
  props: ["loading"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.loading) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "spinner-overlay" }, _attrs))} data-v-2624eeb5><div class="spinner-border border-dotted border-primary" role="status" data-v-2624eeb5><span class="visually-hidden" data-v-2624eeb5>Loading...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2624eeb5"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Loader-B1iCMs9o.js.map
