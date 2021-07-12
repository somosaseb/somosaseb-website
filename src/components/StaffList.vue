<template>
  <div class="row row-cols-2 row-cols-md-3 g-5">
    <div class="col text-center" v-for="(person, n) in staff" :key="n">
      <img :src="person.picture.large" class="img-fluid rounded" />
      <div class="mt-2">{{ person.name.first }} {{ person.name.last }}</div>
      <div class="small">NOMBRE PUESTO</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { staff: [] };
  },
  async mounted() {
    const response = await axios.get("https://randomuser.me/api/?results=10");

    response.data.results.forEach((element) => {
      this.staff.push(element);
    });
  },
};
</script>

<style scoped>
.img-fluid {
  background-color: white;
  height: 128px;
  width: 128px;
}
</style>
