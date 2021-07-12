<template>
  <div :class="containerClass" class="mb-5">
    <div :class="columnImageClass" class="text-center">
      <a :href="url">
        <img
          :src="imageUrl"
          class="rounded img-fluid"
          :class="imageClass"
          width="auto"
        />
      </a>
    </div>
    <div :class="columnTextClass">
      <div class="mt-3">
        <a
          v-for="(tag, n) in tags"
          v-bind:key="n"
          :href="`tags/${tag}`"
          class="me-1 text-white badge rounded-pill bg-primary"
        >
          {{ tag }}
        </a>
      </div>
      <a :href="url">
        <h3 class="mt-3">{{ title }}</h3>
      </a>
      <p :class="vertical ? '' : 'lead'">
        {{ summary }}
      </p>
      <div>
        <em>{{ publishedAt }}</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: { type: String },
    title: { type: String },
    summary: { type: String },
    imageUrl: { type: String },
    tags: {
      type: Array,
      default() {
        return [];
      },
    },
    publishedAt: {
      type: Date,
      default() {
        return new Date();
      },
    },
    vertical: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    containerClass() {
      if (this.vertical) {
        return ["row", "row-cols-1"];
      } else {
        return ["row"];
      }
    },
    columnImageClass() {
      if (!this.vertical) {
        return "col-6";
      }
      return "col";
    },
    columnTextClass() {
      return "col";
    },
  },
};
</script>

<style lang="scss" scoped>
.x-row {
  display: flex;
  flex-direction: column;

  @media (max-width: 767.98px) {
    flex-direction: row;
  }
}
</style>
