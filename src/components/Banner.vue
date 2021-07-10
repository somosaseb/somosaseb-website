<template>
  <div
    class="component banner overflow-hidden d-flex align-items-center"
    :style="bannerStyles"
  >
    <div class="container">
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
  props: { imageUrl: String },
  computed: {
    bannerStyles() {
      return `background-image: url('${this.imageUrl}'); `;
    },
  },
};
</script>
