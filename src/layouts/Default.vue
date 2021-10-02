<template>
  <div class="layout">
    <Header />

    <transition name="fade" appear>
      <section>
        <slot />
      </section>
    </transition>

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Header from "./partials/Header.vue";
import Footer from "./partials/Footer.vue";

export default {
  components: { Header, Footer },
  reactiveProvide: {
    name: "context",
    include: ["auth", "logout"],
  },
  data() {
    return { auth: null };
  },
  async mounted() {
    const data = localStorage.getItem("auth");
    if (data !== null) {
      this.auth = JSON.parse(data);
    }
  },
  methods: {
    logout() {
      localStorage.setItem("auth", null);
      this.auth = null;
    },
  },
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.25s;
}
.fade-enter {
  opacity: 0;
}
</style>
