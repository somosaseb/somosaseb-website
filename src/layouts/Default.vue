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
import Header from "./DefaultHeader.vue";
import Footer from "./DefaultFooter.vue";
export default {
  components: { Header, Footer },
};
</script>
