<template>
  <div class="container">
    <div class="d-flex row justify-content-center align-items-center">
      <div class="col-12 col-sm-6">
        <h2 class="display-4 fw-lighter">
          {{ highlight }}
        </h2>
      </div>
      <div class="col-12 col-sm-6">
        <div class="lead text-mute ">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["highlight"],
};
</script>
