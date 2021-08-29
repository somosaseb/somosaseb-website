<template>
  <Layout>
    <div class="container">
      <h2 class="mb-4">Lo más reciente</h2>

      <BlogSummary
        :url="first.node.path"
        :title="first.node.title"
        :summary="first.node.excerpt"
        :imageUrl="first.node.mainImage.src"
        :tags="first.node.tags.map(({ id }) => id)"
        :publishedAt="first.node.publishedAt"
      />

      <h2 class="mb-4">Ultimas Publicaciones</h2>

      <div class="row row-cols-1 row-cols-md-3 gx-5">
        <BlogSummary
          v-for="item in articles"
          :key="item.node.id"
          :url="item.node.path"
          :title="item.node.title"
          :summary="item.node.excerpt"
          :imageUrl="item.node.mainImage.src"
          :publishedAt="item.node.publishedAt"
          :tags="item.node.tags.map(({ id }) => id)"
          vertical
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query AllArticle ($page: Int) {
	articles: allArticle ( perPage: 13, page: $page, order: DESC, sortBy: "date") @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        mainImage(width: 720, height: 420)
        publishedAt: date(format: "MMMM D, YYYY")
        excerpt,
        tags {
          id
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: "Articulos",
  },
  components: {
    Pager,
  },
  computed: {
    first() {
      return this.$page.articles.edges[0];
    },
    articles() {
      const articles = [...this.$page.articles.edges];
      articles.shift(); // Remove the first article
      console.log(articles);
      return articles;
    },
  },
};
</script>
