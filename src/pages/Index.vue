<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h2 class="display-4">
            We are making better CoWorking for you.
          </h2>
        </div>
        <div class="col-md-5">
          <p class="lead text-muted">
            Collaboratively coordinate adaptive synergy with compelling "outside
            the box" thinking. Continually recaptiualize user friendly sources
            whereas leveraged.
          </p>
        </div>
      </div>
    </div>

    <Banner :imageUrl="bannerImage" class="my-5">
      The Center is a network of 9 workspaces, from 200 to 3,700 sqft, Build and
      Designed to support Personal and Businesses in the Creative World.
    </Banner>

    <Pricing class="container" />
  </Layout>
</template>

<script>
import Card from "../components/Card.vue";
import Banner from "../components/Banner.vue";
import Pricing from "./IndexPricing.vue";

const bannerImage =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80";

export default {
  components: { Card, Pricing, Banner },
  metaInfo: {
    title: "ASEB Bolivia",
  },
  data() {
    return { bannerImage };
  },
};
</script>

<style></style>
