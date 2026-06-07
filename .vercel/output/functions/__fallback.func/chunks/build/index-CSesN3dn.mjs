import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Footer-B_sJ6Znr.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useI18n, c as useHead, a as useSeoMeta } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'better-sqlite3';
import '@vue/shared';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    useHead({
      htmlAttrs: {
        lang: locale.value
      }
    });
    useSeoMeta({
      title: "Software Engineer",
      description: t("home.description"),
      ogType: "website",
      ogUrl: "https://nandev.my.id/",
      ogTitle: "Mahfudin Adnan | Full-Stack Software Engineer",
      ogDescription: t("home.description"),
      ogImage: "https://nandev.my.id/preview.webp",
      // Twitter Card
      twitterCard: "summary_large_image",
      twitterTitle: "Mahfudin Adnan | Software Engineer",
      twitterDescription: t("home.description"),
      twitterImage: "https://nandev.my.id/preview.webp"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex flex-col bg-space-900" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<main class="flex-1 pt-16 lg:pt-20">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CSesN3dn.mjs.map
