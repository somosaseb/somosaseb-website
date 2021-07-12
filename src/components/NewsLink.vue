<template>
  <div class="wrapper d-flex mb-5">
    <div class="main-col">
      <div class="vote ps-2 pe-4 fs-4 text-center">
        <a href="#" title="Votar positivo" class="text-decoration-none">👍</a>
        <div class="count">100</div>
      </div>
      <h3 class="item-title">
        <a :href="url" target="blank">
          {{ title }}
        </a>
      </h3>
      <div>
        <span>1 read</span>
        &middot;
        <span>compartido por <a href="?">Editores</a></span>
        &middot;
        <span>1 día atrás</span>
      </div>
      <div class="summary">
        {{ summary }}
      </div>
    </div>

    <div class="side-col">
      <a :href="url" target="blank">
        <img :src="imageUrl" :alt="title" class=" rounded" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url", "title", "summary", "imageUrl"],
};
</script>

<style lang="scss" scoped>
.item-title {
  font-weight: 700;
  font-size: 1.25rem;
}
.summary {
  font-size: 1rem;
  margin-top: 0.5rem;
}
.main-col {
  position: relative;
  width: auto;
  flex-grow: 1;
  padding-top: 1rem;

  @media (min-width: 767.98px) {
    padding-top: 0;
    padding-right: 4rem;
  }
}
.side-col {
  flex-grow: 1;
  text-align: center;

  img {
    @media (min-width: 767.98px) {
      width: 10rem;
    }
  }
}

.wrapper {
  position: relative;
  flex-direction: column;
  @media (min-width: 767.98px) {
    flex-direction: row;
  }
}

.vote {
  position: absolute;
  top: 1rem;
  left: 0;
  .count {
    font-size: 0.5em;
  }
}

.main-col {
  order: 1;
  padding-left: 3rem;
  @media (min-width: 767.98px) {
    order: 0;
  }
}
</style>
