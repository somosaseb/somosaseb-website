<template>
  <div class="layout">
    <Header />

    <section>
      <slot />
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
