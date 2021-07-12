<template>
  <div class="card rounded shadow-sm h-100">
    <div class="card-header">
      <div class="row ">
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-end">
            <div class="fw-bold fs-1 lh-1">31</div>
            <div class="fs-5 ms-1">Julio 2021</div>
          </div>
          <div class="">
            <p class="m-0">18:00 a 19:00</p>
            <p class="m-0">Duracion: 45min</p>
          </div>
        </div>
      </div>
    </div>

    <img :src="imageUrl" :alt="title" class=" card-img-top" />

    <div class="card-body">
      <div
        v-for="(tag, n) in tags"
        v-bind:key="n"
        class="badge rounded-pill bg-primary me-2 mb-3"
      >
        {{ tag }}
      </div>
      <h4 class="card-title font-raleway fw-bold">{{ title }}</h4>
      <p class="card-text">
        {{ summary }}
      </p>
      <h5 class="font-raleway fw-semibold">Expositores</h5>
      <ul>
        <li>Chris Sev, Senior Developer Advocate, DigitalOcean</li>
        <li>Ryan Chenkie, Developer Advocate, Prisma</li>
      </ul>
      <div v-if="isLive">
        <a href="#" class="btn rounded btn-primary">Registrate</a>
      </div>
      <div v-else>
        <a href="#" class="btn rounded btn-primary">Ver</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imageUrl: String,
    summary: String,
    isLive: {
      type: Boolean,
      default() {
        return true;
      },
    },
    tags: {
      type: Array,
      default() {
        return ["Livestream", "Zoom"];
      },
    },
  },
};
</script>
