<template>
  <Layout>
    <div class="container">
      <img
        class="img-fluid mx-auto d-block"
        height="500px"
        :src="$page.article.mainImage.src"
      />

      <div class="row justify-content-center">
        <article class="col-md-8">
          <h3 class="mx-0 px-xs-5 pt-4">
            {{ $page.article.title }}
          </h3>
          <p>
          <span class="px-xs-5 pt-2 fw-lighter">
            Date: {{ $page.article.date }}
          </span>
          </p>
          <div class="pa-xs-5 body-1 pt-3">
            <div v-html="$page.article.content"></div>
          </div>
        </article>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Article ($path: String!) {
  article: article (path: $path) {
    path
    title
    date (format: "MMMM D, YYYY")
    content
    excerpt
    mainImage(width:1200 height:500)
  }
}
</page-query>

<script>
export default {
  components: {},
};
</script>

<style scoped>
h3 {
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: -1px;
  line-height: 1.1;
}
article > div {
  font-size: 1.11rem;
}
</style>