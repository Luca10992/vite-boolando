<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";
import axios from "axios";
export default {
  data() {
    return {
      store,
      cards: [],
    };
  },

  components: { AppCard },

  created() {
    axios.get(`${store.apiUrl}/cards`).then((res) => {
      this.cards = res.data;
    });
  },

  methods: {
    buildImagePath(imageName) {
      return new URL("../assets/img/" + imageName, import.meta.url).href;
    },
    cardOpen(index) {
      const selectedCard = this.cards[index];

      store.modal.brand = selectedCard.brand;
      store.modal.name = selectedCard.name;
      store.modal.brand = selectedCard.brand;
      store.modal.price = selectedCard.price + " €";
      store.modal.current = this.buildImagePath(selectedCard.images.front);
      store.modal.front = this.buildImagePath(selectedCard.images.front);
      store.modal.retro = this.buildImagePath(selectedCard.images.retro);
      store.modal.show = true;
    },
  },
};
</script>

<template>
  <main>
    <div class="container main-container">
      <AppCard @show-modal="cardOpen"></AppCard>
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
