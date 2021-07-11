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
