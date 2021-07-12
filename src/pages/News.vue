<template>
  <Layout>
    <div class="container">
      <div class="row gx-5">
        <div class="col">
          <div class="mb-5">
            <a href="#" class="btn btn-primary">Envia tus noticias</a>
          </div>
        </div>
        <div class="col-sm-7">
          <div class="mb-4">
            <a href="#" class="btn btn-sm btn-accent me-2">Lo más popular</a>
            <a href="#" class="btn btn-sm btn-secondary">Recientes</a>
          </div>
          <news-link
            v-for="item in items"
            v-bind:key="item.guid"
            :url="item.link"
            :title="item.title"
            :summary="item.description"
            :imageUrl="item.enclosure.link"
          />
        </div>
        <div class="col">
          <div class="rounded-3 bg-accent p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Nam accusamus molestiae iusto facilis, eos corporis quidem
              inventore reprehenderit porro at, labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
import NewsLink from "../components/NewsLink.vue";

export default {
  components: { NewsLink },
  data() {
    return { items: [] };
  },
  async mounted() {
    const response = await axios.get(" https://api.rss2json.com/v1/api.json", {
      params: {
        rss_url: "https://www.nasa.gov/rss/dyn/breaking_news.rss",
        api_key: "3odluslwqbpxi50fdtlwfydizcda2t1cnjf8ufq7",
      },
    });
    response.data.items.map((item) => {
      this.items.push(item);
    });
  },
};
</script>
