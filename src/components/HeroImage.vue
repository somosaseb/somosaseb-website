<template>
  <div class="container">
    <div class="bg rounded">
      <div class="d-flex rounded">
        <div class="bg-col text-white ">
          <div class="p-5">
            <slot />
          </div>
        </div>
        <div class="bg-col bg-image" :style="bannerStyles">
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
  },
  computed: {
    bannerStyles() {
      return `
      background-image: url('${this.imageUrl}');
    `;
    },
  },
};
</script>

<style scoped></style>

<style lang="scss" scoped>
.bg {
  overflow: hidden;
  background-color: var(--bs-green);

  div.d-flex {
    @media (max-width: 767.98px) {
      flex-direction: column;
    }
  }
}

.bg-image {
  background-color: darken(#1a4942, 5%);
  background-size: cover;
  min-height: 20rem;
}

.bg-col {
  width: 100%;

  @media (min-width: 767.98px) {
    width: 50%;
  }
}
</style>
