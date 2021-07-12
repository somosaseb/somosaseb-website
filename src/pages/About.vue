<template>
  <Layout>
    <div class="container">
      <main class="row">
        <div class="col-md-8 mx-auto">
          <HeroText highlight="Seamlessly create covalent clouds">
            Collaboratively coordinate adaptive synergy with compelling "outside
            the box" thinking. Continually recaptiualize user friendly sources
            whereas leveraged.
          </HeroText>

          <hr class="col-3 col-md-6 mb-5" />

          <h2>
            Refreshing news for developers and designers
          </h2>

          <p class="lead mb-5">
            It’s your business—so you should be able to run and grow it with
            tools that serve you, not the other way around. We have a broad set
            of flexible tools ready for nearly any job, and you only ever pay
            for what you need.
          </p>

          <staff-list />

          <Banner
            imageUrl="https://images.unsplash.com/photo-1604074309568-b13fc8a8ef4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
            class="my-5"
            container
            style="background-position: center"
          />

          <Faq class="bg-white p-4 rounded shadow-sm" />

          <HeroText class="mt-5" highlight="Seamlessly create covalent clouds">
            Collaboratively coordinate adaptive synergy with compelling "outside
            the box" thinking. Continually recaptiualize user friendly sources
            whereas leveraged.
          </HeroText>
        </div>
      </main>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Informacion",
  },
};
</script>
