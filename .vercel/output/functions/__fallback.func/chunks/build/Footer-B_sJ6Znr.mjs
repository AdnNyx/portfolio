import { b as _export_sfc, u as useI18n, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, setLocale } = useI18n();
    const isMenuOpen = ref(false);
    const scrolled = ref(false);
    const activeSection = ref("home");
    const navItems = [
      { id: "home", key: "home" },
      { id: "about", key: "about" },
      { id: "services-wrapper", key: "services" },
      { id: "portfolio-section", key: "portfolio" },
      { id: "contact", key: "contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
          scrolled.value || isMenuOpen.value ? "bg-slate-900/95 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg" : "bg-transparent py-5"
        ]
      }, _attrs))} data-v-70f01280><nav class="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-[100]" data-v-70f01280><a href="#home" class="text-2xl font-display font-bold text-white tracking-wider" data-v-70f01280><span class="text-neon-cyan" data-v-70f01280>Nan</span></a><div class="hidden md:flex items-center space-x-8" data-v-70f01280><ul class="flex space-x-8 text-sm font-medium text-slate-300" data-v-70f01280><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li data-v-70f01280><a${ssrRenderAttr("href", `#${item.id}`)} class="${ssrRenderClass([
          activeSection.value === item.id ? "text-neon-cyan" : "hover:text-white",
          "transition-colors duration-300 relative py-2 group"
        ])}" data-v-70f01280>${ssrInterpolate(_ctx.$t(`nav.${item.key}`))} <span class="${ssrRenderClass([
          activeSection.value === item.id ? "w-full" : "w-0 group-hover:w-full",
          "absolute bottom-0 left-0 h-[2px] bg-neon-cyan transition-all duration-300"
        ])}" data-v-70f01280></span></a></li>`);
      });
      _push(`<!--]--></ul><div class="w-px h-5 bg-white/20" data-v-70f01280></div><button class="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-neon-cyan transition-colors" data-v-70f01280>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:globe",
        class: "text-lg"
      }, null, _parent));
      _push(`<span class="${ssrRenderClass({ "text-neon-cyan": unref(locale) === "id" })}" data-v-70f01280>ID</span><span class="text-slate-500" data-v-70f01280>/</span><span class="${ssrRenderClass({ "text-neon-cyan": unref(locale) === "en" })}" data-v-70f01280>EN</span></button></div><button class="md:hidden text-white p-2 focus:outline-none relative z-[110]" data-v-70f01280>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isMenuOpen.value ? "uil:times" : "uil:bars",
        class: ["text-2xl transition-transform duration-300", isMenuOpen.value ? "text-neon-cyan rotate-90" : "rotate-0"]
      }, null, _parent));
      _push(`</button></nav><div class="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[80] md:hidden cursor-pointer" style="${ssrRenderStyle(isMenuOpen.value ? null : { display: "none" })}" data-v-70f01280></div><div class="${ssrRenderClass([
        isMenuOpen.value ? "translate-x-0 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]" : "translate-x-full",
        "fixed top-0 right-0 h-screen w-64 bg-slate-950 border-l border-white/10 pt-24 px-8 z-[90] transform transition-transform duration-500 ease-in-out md:hidden flex flex-col"
      ])}" data-v-70f01280><ul class="flex flex-col space-y-6 text-lg font-medium text-slate-300 mb-10" data-v-70f01280><!--[-->`);
      ssrRenderList(navItems, (item, index) => {
        _push(`<li data-v-70f01280><a${ssrRenderAttr("href", `#${item.id}`)} class="${ssrRenderClass([
          activeSection.value === item.id ? "text-neon-cyan" : "hover:text-white",
          "flex items-center gap-4 transition-colors duration-300"
        ])}" data-v-70f01280><span class="text-xs font-mono opacity-50" data-v-70f01280>0${ssrInterpolate(index + 1)}</span> ${ssrInterpolate(_ctx.$t(`nav.${item.key}`))}</a></li>`);
      });
      _push(`<!--]--></ul><div class="w-full h-px bg-white/10 mb-6" data-v-70f01280></div><button class="flex items-center gap-3 text-base font-semibold text-slate-300 hover:text-neon-cyan transition-colors" data-v-70f01280>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:globe",
        class: "text-xl"
      }, null, _parent));
      _push(`<div data-v-70f01280><span class="${ssrRenderClass({ "text-neon-cyan": unref(locale) === "id" })}" data-v-70f01280>ID</span><span class="text-slate-500 mx-2" data-v-70f01280>/</span><span class="${ssrRenderClass({ "text-neon-cyan": unref(locale) === "en" })}" data-v-70f01280>EN</span></div></button></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-70f01280"]]), { __name: "Navbar" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative bg-space-950 border-t border-white/5 pt-12 pb-6 overflow-hidden" }, _attrs))}><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-neon-cyan/5 blur-[80px] pointer-events-none"></div><div class="max-w-7xl mx-auto px-8 lg:px-12 relative z-10"><div class="flex flex-col md:flex-row items-center justify-between gap-6"><div class="flex flex-col items-center md:items-start gap-2"><a href="#home" class="text-2xl font-display font-bold text-white tracking-wider cursor-pointer"><span class="text-neon-cyan">Nan</span></a><p class="text-slate-500 text-xs md:text-sm font-light text-center md:text-left">${ssrInterpolate(_ctx.$t("footer.copyright"))}</p></div><div class="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-400 font-light font-mono"><a href="#" class="hover:text-neon-cyan transition-colors duration-300">${ssrInterpolate(_ctx.$t("footer.terms"))}</a><div class="w-1 h-1 rounded-full bg-slate-700"></div><a href="#" class="hover:text-neon-cyan transition-colors duration-300">${ssrInterpolate(_ctx.$t("footer.privacy"))}</a></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "Footer" });

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=Footer-B_sJ6Znr.mjs.map
