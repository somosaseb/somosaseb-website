<template>
  <Layout>
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="mb-3">ASEB Talks</h2>
        <p class="lead">
          Live and always-available virtual events
        </p>
        <p class="lead">
          Register for an upcoming free, live webcast or browse our on-demand
          archive of past events.
        </p>
      </div>

      <h2 class="mb-3">Proximos eventos</h2>

      <div class="row row-cols-1 row-cols-md-2 g-5">
        <div class="col">
          <event-summary
            title="From MVP to “MLP” (Minimum Lovable Product)—Building What Your Customers Care About "
            imageUrl="https://images.unsplash.com/photo-1586985564150-11ee04838034?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            summary="See why it’s important to focus on your customers' needs when building out your product towards desired outcomes. Learn a product design framework that helps startups build better products for their customers. "
          />
        </div>
      </div>
      <h2 class="mb-3 mt-5">Eventos pasados</h2>
      <div class="row row-cols-1 row-cols-md-3 g-5">
        <div class="col" v-for="index in 9" :key="index">
          <event-summary
            title="Give Review for design event"
            imageUrl="https://images.unsplash.com/photo-1586980368323-8ce5db4c85ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            summary="This is a longer card with supporting text below as a natural
                lead-in to additional content."
            :isLive="false"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import EventSummary from "../components/EventSummary.vue";
export default {
  components: { EventSummary },
  metaInfo: {
    title: "Eventos",
  },
};
</script>
