<template>
  <Layout>
    <div class="container">
      <img height="500px" :src="$page.article.mainImage.src" />

      <article>
        <h3 class="primary--text font-weight-bold mx-0 display-2 px-xs-5">
          {{ $page.article.title }}
        </h3>

        <span class="px-xs-5"> Date: {{ $page.article.date }} </span>
        <div class="pa-xs-5 body-1">
          <div>
            {{ $page.article.content }}
          </div>
        </div>
      </article>
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
