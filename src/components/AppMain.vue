<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";
import axios from "axios";
export default {
  data() {
    return {
      cards: [],

      spin: false,
    };
  },

  components: { AppCard },

  methods: {
    buildImagePath(imageName) {
      return new URL("../assets/img/" + imageName, import.meta.url).href;
    },
  },

  created() {
    axios.get(`${store.apiUrl}/cards`).then((res) => {
      this.cards = res.data;
    });
  },
};
</script>

<template>
  <main>
    <div class="container main-container">
      <AppCard
        v-for="card in cards"
        :frontImg="buildImagePath(card.images.front)"
        :retroImg="buildImagePath(card.images.retro)"
        :spin="card.spin"
        :brand="card.brand"
        :name="card.name"
        :price="card.price"
        :favourite="card.isInFavourite"
      >
      </AppCard>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/generals.scss" as *;
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.main-container {
  padding: 2rem;
  padding-top: 6rem;
  @include align("default");
  flex-wrap: wrap;
  gap: 10px;
}
</style>
