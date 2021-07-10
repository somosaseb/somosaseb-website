<template>
  <div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <Card class="card-accent" heading="Miembros">
          <h1 class="card-title">
            Bs. 0<small class="text-muted fw-light">/mes</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-accent">
            Sign up for free
          </button>
        </Card>
      </div>
      <div class="col">
        <Card heading="Socios" primary>
          <h1 class="card-title">
            Bs. 700 <small class="text-muted fw-light">/mes</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-primary">
            Sign up for free
          </button>
        </Card>
      </div>
      <div class="col">
        <Card heading="Empresas">
          <h1 class="card-title">
            Llamanos
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-secondary">
            Sign up for free
          </button>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: { Card },
};
</script>
