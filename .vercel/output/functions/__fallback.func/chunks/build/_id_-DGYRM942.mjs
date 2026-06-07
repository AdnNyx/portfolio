import { _ as __nuxt_component_0 } from './nuxt-link-B4BMcNVU.mjs';
import { b as _export_sfc, u as useI18n, a as useSeoMeta, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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

const __vite_glob_0_0 = "" + __buildAssetsURL("company.BQAxnd95.webp");
const __vite_glob_0_1 = "" + __buildAssetsURL("downloader.BT0o4IQG.webp");
const __vite_glob_0_2 = "" + __buildAssetsURL("pelaporan.CyD1XpLV.webp");
const __vite_glob_0_3 = "" + __buildAssetsURL("pelaporan_1.GpXuyEIX.webp");
const __vite_glob_0_4 = "" + __buildAssetsURL("pelaporan_2.C88d2LFm.webp");
const __vite_glob_0_5 = "" + __buildAssetsURL("pelaporan_3.B8ENPPw9.webp");
const __vite_glob_0_6 = "" + __buildAssetsURL("pelaporan_4.DJWWDCKj.webp");
const __vite_glob_0_7 = "" + __buildAssetsURL("pelaporan_5.Pi4WvZpD.webp");
const __vite_glob_0_8 = "" + __buildAssetsURL("pelaporan_6.CRc0DY6M.webp");
const __vite_glob_0_9 = "" + __buildAssetsURL("pelaporan_7.DV7swuuF.webp");
const __vite_glob_0_10 = "" + __buildAssetsURL("pelaporan_8.Wbk4cKQ2.webp");
const __vite_glob_0_11 = "" + __buildAssetsURL("portfolio.Ci91phHg.webp");
const __vite_glob_0_12 = "" + __buildAssetsURL("profile.CEzFXbrh.webp");
const __vite_glob_0_13 = "" + __buildAssetsURL("qrcodegenerator.WsFrGLo7.webp");
const __vite_glob_0_14 = "" + __buildAssetsURL("school.D8resQ54.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const projectId = route.params.id;
    const projects = [
      {
        titleKey: "portfolio.project1_title",
        descKey: "portfolio.project1_desc",
        images: ["company.webp"],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Lenis"],
        liveLink: "/notfound",
        repoLink: "/notfound"
      },
      {
        titleKey: "portfolio.project2_title",
        descKey: "portfolio.project2_desc",
        images: [],
        stack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
        liveLink: "/notfound",
        repoLink: "https://github.com/AdnNyx/NovelPlatform"
      },
      {
        titleKey: "portfolio.project3_title",
        descKey: "portfolio.project3_desc",
        images: ["school.webp"],
        stack: ["Vue.js", "PostgreSQL", "Golang"],
        liveLink: "https://mi-alhidayah-kemuning.vercel.app/",
        repoLink: "https://github.com/AdnNyx/SchoolWebsite"
      },
      {
        titleKey: "portfolio.project4_title",
        descKey: "portfolio.project4_desc",
        images: ["portfolio.webp"],
        stack: ["Nuxt", "Tailwind CSS", "Lenis", "GSAP"],
        liveLink: "https://nandev-kappa.vercel.app",
        repoLink: "https://github.com/AdnNyx/portfolio"
      },
      {
        titleKey: "portfolio.project5_title",
        descKey: "portfolio.project5_desc",
        images: ["qrcodegenerator.webp"],
        stack: ["React.js", "Tailwind CSS", "Flask"],
        liveLink: "https://qrcodegenerator-gilt.vercel.app",
        repoLink: "https://github.com/AdnNyx/QRCodeGenerator"
      },
      {
        titleKey: "portfolio.project6_title",
        descKey: "portfolio.project6_desc",
        images: ["downloader.webp"],
        stack: ["Python", "Flask"],
        liveLink: "https://universal-vid-down.vercel.app",
        repoLink: "https://github.com/AdnNyx/universal-vid-down"
      },
      {
        titleKey: "portfolio.project7_title",
        descKey: "portfolio.project7_desc",
        images: [],
        stack: ["Vue.js", "Nuxt", "REST API"],
        liveLink: "",
        repoLink: ""
      },
      {
        titleKey: "portfolio.project8_title",
        descKey: "portfolio.project8_desc",
        images: [],
        stack: ["Python", "TensorFlow", "React"],
        liveLink: "",
        repoLink: ""
      }
    ];
    const project = computed(() => {
      return projects.find((p) => p.titleKey.includes(projectId));
    });
    const imagesAssets = /* @__PURE__ */ Object.assign({
      "/assets/image/company.webp": __vite_glob_0_0,
      "/assets/image/downloader.webp": __vite_glob_0_1,
      "/assets/image/pelaporan.webp": __vite_glob_0_2,
      "/assets/image/pelaporan_1.webp": __vite_glob_0_3,
      "/assets/image/pelaporan_2.webp": __vite_glob_0_4,
      "/assets/image/pelaporan_3.webp": __vite_glob_0_5,
      "/assets/image/pelaporan_4.webp": __vite_glob_0_6,
      "/assets/image/pelaporan_5.webp": __vite_glob_0_7,
      "/assets/image/pelaporan_6.webp": __vite_glob_0_8,
      "/assets/image/pelaporan_7.webp": __vite_glob_0_9,
      "/assets/image/pelaporan_8.webp": __vite_glob_0_10,
      "/assets/image/portfolio.webp": __vite_glob_0_11,
      "/assets/image/profile.webp": __vite_glob_0_12,
      "/assets/image/qrcodegenerator.webp": __vite_glob_0_13,
      "/assets/image/school.webp": __vite_glob_0_14
    });
    const getImageUrl = (name) => {
      if (!name) return "";
      const path = `/assets/image/${name}`;
      for (const key in imagesAssets) {
        if (key.endsWith(path)) return imagesAssets[key];
      }
      return "";
    };
    if (project.value) {
      const projectImageUrl = project.value.images.length > 0 ? getImageUrl(project.value.images[0]) : "https://nandev.my.id/preview.jpg";
      useSeoMeta({
        title: t(project.value.titleKey),
        description: t(project.value.descKey),
        ogTitle: `${t(project.value.titleKey)} | Mahfudin Adnan`,
        ogDescription: t(project.value.descKey),
        ogImage: projectImageUrl,
        ogUrl: `https://nandev.my.id/projects/${projectId}`,
        twitterTitle: `${t(project.value.titleKey)} | Mahfudin Adnan`,
        twitterDescription: t(project.value.descKey),
        twitterImage: projectImageUrl
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen bg-space-950 text-white pt-8 lg:pt-12 pb-32 overflow-x-hidden" }, _attrs))} data-v-81cbead8><div class="fixed inset-0 pointer-events-none -z-10" data-v-81cbead8><div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full" data-v-81cbead8></div><div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full" data-v-81cbead8></div></div>`);
      if (project.value) {
        _push(`<div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10" data-v-81cbead8><div class="detail-anim opacity-0 flex flex-wrap items-center gap-3 text-slate-400 font-mono text-sm mb-8" data-v-81cbead8>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#portfolio-section",
          class: "flex items-center gap-2 hover:text-white transition-colors px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "uil:arrow-left",
                class: "text-lg"
              }, null, _parent2, _scopeId));
              _push2(` Back `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "uil:arrow-left",
                  class: "text-lg"
                }),
                createTextVNode(" Back ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="text-slate-600" data-v-81cbead8>Projects</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "uil:angle-right",
          class: "text-slate-600"
        }, null, _parent));
        _push(`<span class="text-white font-semibold" data-v-81cbead8>${ssrInterpolate(_ctx.$t(project.value.titleKey))}</span></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start" data-v-81cbead8><div class="flex flex-col h-full" data-v-81cbead8><div class="detail-anim opacity-0 mb-8" data-v-81cbead8><h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6" data-v-81cbead8>${ssrInterpolate(_ctx.$t(project.value.titleKey))}</h1><div class="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" data-v-81cbead8></div></div><p class="detail-anim opacity-0 text-slate-300 text-lg leading-relaxed font-light mb-12 lg:mb-20" data-v-81cbead8>${ssrInterpolate(_ctx.$t(project.value.descKey))}</p><div class="detail-anim opacity-0 mt-auto w-full max-w-lg" data-v-81cbead8><div class="flex flex-wrap sm:flex-nowrap gap-4" data-v-81cbead8>`);
        if (project.value.liveLink && project.value.liveLink.includes(".")) {
          _push(`<a${ssrRenderAttr(
            "href",
            project.value.liveLink.startsWith("http") ? project.value.liveLink : `https://${project.value.liveLink}`
          )} target="_blank" class="flex-1 flex justify-center items-center gap-2 px-5 py-4 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan rounded-2xl hover:bg-neon-cyan hover:text-space-900 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(34,211,238,0.25)] transition-all duration-300 font-display font-bold group" data-v-81cbead8>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "uil:external-link-alt",
            class: "text-xl group-hover:rotate-45 transition-transform duration-300"
          }, null, _parent));
          _push(`<span data-v-81cbead8>Live Demo</span></a>`);
        } else {
          _push(`<div class="flex-1 flex justify-center items-center gap-2 px-5 py-4 bg-slate-800/40 border border-white/5 text-slate-500 rounded-2xl font-display font-bold cursor-not-allowed" data-v-81cbead8>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "uil:external-link-alt",
            class: "text-xl"
          }, null, _parent));
          _push(`<span data-v-81cbead8>Unavailable</span></div>`);
        }
        if (project.value.repoLink && project.value.repoLink.includes("github")) {
          _push(`<a${ssrRenderAttr("href", project.value.repoLink)} target="_blank" class="flex-1 flex justify-center items-center gap-2 px-5 py-4 bg-white/5 border border-white/20 text-white rounded-2xl hover:bg-white hover:text-space-900 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(255,255,255,0.15)] transition-all duration-300 font-display font-bold group" data-v-81cbead8>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "uil:github",
            class: "text-xl group-hover:rotate-12 transition-transform duration-300"
          }, null, _parent));
          _push(`<span data-v-81cbead8>Source Code</span></a>`);
        } else {
          _push(`<div class="flex-1 flex justify-center items-center gap-2 px-5 py-4 bg-slate-800/40 border border-white/5 text-slate-500 rounded-2xl font-display font-bold cursor-not-allowed" data-v-81cbead8>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "uil:github",
            class: "text-xl"
          }, null, _parent));
          _push(`<span data-v-81cbead8>Private Repo</span></div>`);
        }
        _push(`</div></div></div><div class="flex flex-col gap-8" data-v-81cbead8><div class="detail-anim opacity-0 w-full aspect-video md:aspect-[4/3] lg:aspect-auto lg:h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl relative" data-v-81cbead8>`);
        if (project.value.images.length > 0) {
          _push(`<img${ssrRenderAttr("src", getImageUrl(project.value.images[0]))} class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" data-v-81cbead8>`);
        } else {
          _push(`<div class="absolute inset-0 flex items-center justify-center text-slate-500 font-mono bg-space-900" data-v-81cbead8> Preview Image Not Available </div>`);
        }
        _push(`</div><div class="detail-anim opacity-0 bg-slate-900/60 border border-white/10 rounded-3xl p-8 shadow-lg backdrop-blur-sm" data-v-81cbead8><h3 class="text-xl font-display font-bold text-white mb-6 flex items-center gap-3" data-v-81cbead8>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "uil:layer-group",
          class: "text-neon-cyan text-2xl"
        }, null, _parent));
        _push(` Tech Stack </h3><div class="flex flex-wrap gap-3" data-v-81cbead8><!--[-->`);
        ssrRenderList(project.value.stack, (tech, idx) => {
          _push(`<span class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-mono text-neon-cyan shadow-inner" data-v-81cbead8>${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div></div></div></div>`);
      } else {
        _push(`<div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-6" data-v-81cbead8>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "uil:sad-squint",
          class: "text-7xl text-neon-purple mb-6 animate-pulse"
        }, null, _parent));
        _push(`<h1 class="text-4xl font-display font-bold text-white mb-4" data-v-81cbead8> Project Not Found </h1><p class="text-slate-400 mb-10 max-w-md" data-v-81cbead8> I&#39;m sorry, the project details you are looking for doesn&#39;t exist or has been removed. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#portfolio-section",
          class: "px-8 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-space-950 transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Back to Portfolio `);
            } else {
              return [
                createTextVNode(" Back to Portfolio ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81cbead8"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DGYRM942.mjs.map
