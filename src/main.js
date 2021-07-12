import DefaultLayout from "~/layouts/Default.vue";
import Banner from "~/components/Banner.vue";
import Pricing from "~/components/Pricing.vue";
import HeroText from "~/components/HeroText.vue";
import HeroImage from "~/components/HeroImage.vue";
import TextHeading from "~/components/TextHeading.vue";
import TextLead from "~/components/TextLead.vue";
import BlogSummary from "~/components/BlogSummary.vue";

import "./assets/scss/main.scss";

export default function(Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "es" };

  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
  });

  Vue.prototype.$utils = {
    toggleClass(selector, className) {
      document.querySelector(selector).classList.toggle(className);
    },
  };
  Vue.component("Layout", DefaultLayout);
  Vue.component("BlogSummary", BlogSummary);

  Vue.component("Banner", Banner);
  Vue.component("Pricing", Pricing);
  Vue.component("HeroText", HeroText);
  Vue.component("HeroImage", HeroImage);
  Vue.component("TextHeading", TextHeading);
  Vue.component("TextLead", TextLead);
}
