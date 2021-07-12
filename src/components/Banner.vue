<template>
  <div
    class="component banner overflow-hidden d-flex align-items-center"
    :class="{ container, rounded: container, shadow: container }"
    :style="bannerStyles"
  >
    <div v-if="hasChildren" class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="bg-dark p-4 rounded">
            <h2 class="fs-4 lh-base fw-light text-white">
              <slot />
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    container: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    bannerStyles() {
      return `
        background-image: url('${this.imageUrl}');
        background-size: cover;
      `;
    },
    hasChildren() {
      return !!this.$slots.default;
    },
  },
};
</script>

<style scoped>
.banner {
  min-height: 24rem;
}
</style>
