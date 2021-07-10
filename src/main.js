import DefaultLayout from "~/layouts/Default.vue";

import "./assets/scss/main.scss";

export default function(Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "es" };

  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
  });

  Vue.component("Layout", DefaultLayout);
}
