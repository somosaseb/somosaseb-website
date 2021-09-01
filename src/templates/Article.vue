<template>
  <Layout>
    <div class="container">
      <img height="500px" :src="$page.article.mainImage.src" />
      <div class="row justify-content-center">
        <article class="col-md-8">
          <h3 class="mx-0 px-xs-5">
            {{ $page.article.title }}
          </h3>

          <span class="px-xs-5"> Date: {{ $page.article.date }} </span>
          <div class="pa-xs-5 body-1">
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
  font-size: 2rem;
}
</style>