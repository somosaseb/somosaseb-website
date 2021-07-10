<template>
  <div class="layout">
    <Header />

    <section>
      <transition name="fade" appear>
        <slot />
      </transition>
    </section>

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
import Header from "./Header.vue";
import Footer from "./Footer.vue";

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
