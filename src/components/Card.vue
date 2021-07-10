<template>
  <div
    class="card mb-4 rounded-3 shadow-sm"
    :class="{ 'border-primary': primary, 'shadow-lg': primary }"
  >
    <div
      class="card-header py-3"
      :class="{ 'bg-primary': primary, 'text-white': primary }"
    >
      <h4 class="my-0 fw-normal">{{ heading }}</h4>
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default() {
        return false;
      },
    },
    heading: { type: String },
  },
};
</script>

<style></style>
