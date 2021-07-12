<template>
  <div class="container">
    <div class="mt-5 my-3" :class="[textAlign]">
      <h2 class="fs-1">
        <slot />
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default() {
        return "center";
      },
    },
  },
  computed: {
    textAlign() {
      return `text-${this.align}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
