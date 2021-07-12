<template>
  <Layout>
    <div class="container">
      <h2 class="mb-4">Lo más reciente</h2>

      <BlogSummary
        url="/post?id=1"
        title="The quick brown fox jumped over the lazy dog."
        summary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
        imageUrl="https://preview.cruip.com/open-pro/images/news-01.jpg"
        :tags="['Product', 'Engineering']"
      />

      <h2 class="mb-4">Ultimas Publicaciones</h2>

      <div class="row row-cols-1 row-cols-md-3 gx-5">
        <BlogSummary
          url="/post?id=1"
          title="The quick brown fox jumped over the lazy dog."
          summary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
          imageUrl="https://preview.cruip.com/open-pro/images/news-02.jpg"
          vertical
          :tags="['Product', 'Engineering']"
        />
        <BlogSummary
          url="/post?id=1"
          title="The quick brown fox jumped over the lazy dog."
          summary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
          imageUrl="https://preview.cruip.com/open-pro/images/news-03.jpg"
          vertical
          :tags="['Product', 'Engineering']"
        />
        <BlogSummary
          url="/post?id=1"
          title="The quick brown fox jumped over the lazy dog."
          summary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
          imageUrl="https://preview.cruip.com/open-pro/images/news-04.jpg"
          vertical
          :tags="['Product', 'Engineering']"
        />

        <BlogSummary
          url="/post?id=1"
          title="The quick brown fox jumped over the lazy dog."
          summary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
          imageUrl="https://preview.cruip.com/open-pro/images/news-05.jpg"
          vertical
          :tags="['Product', 'Engineering']"
        />

        <BlogSummary
          url="/post?id=1"
          title="The quick brown fox jumped over the lazy dog."
          summary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
          imageUrl="https://preview.cruip.com/open-pro/images/news-06.jpg"
          vertical
          :tags="['Product', 'Engineering']"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Blog",
  },
};
</script>
