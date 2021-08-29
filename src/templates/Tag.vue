<template>
  <Layout>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 gx-5">
        <BlogSummary
          v-for="item in $page.articles.edges"
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
query AllArticle ($id: ID, $page: Int) {
	articles: allArticle (
    perPage: 12,
    page: $page,
    order: DESC,
    sortBy: "date",
    filter: {tags: {contains: [$id]}}
  ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        mainImage(width: 720, height: 420)
        publishedAt: date(format: "MMMM D, YYYY")
        excerpt
        tags {
          id
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  components: {},
};
</script>
