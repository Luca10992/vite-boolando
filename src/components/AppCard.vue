<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      cards: [],

      spin: false,
    };
  },

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
  <div class="card" v-for="card in this.cards">
    <div class="box-img">
      <img
        @mouseover="card.spin = true"
        @mouseleave="card.spin = false"
        :src="buildImagePath(card.images.front)"
        :class="card.spin == true ? 'none' : 'spin'"
      />
      <img
        @mouseover="card.spin = true"
        @mouseleave="card.spin = false"
        :src="buildImagePath(card.images.retro)"
        :class="card.spin == true ? 'spin' : 'none'"
      />
    </div>
    <div class="box-text">
      <div class="brand">{{ card.brand }}</div>
      <div class="name">{{ card.name }}</div>
      <div class="price">{{ card.price }}</div>
    </div>
    <div @click="card.favourite = !card.favourite" class="heart">
      <div>
        <font-awesome-icon
          icon="fa-solid fa-heart"
          :class="card.favourite == true ? 'favourite' : ''"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc(100% / 3 - 10px);
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .none {
    display: none;
  }

  .spin {
    display: block;
  }

  img {
    width: 100%;
  }

  .box-text {
    border-radius: 0 0 10px 10px;
    padding: 5px;

    .brand {
      font-size: 13px;
    }

    .name {
      font-weight: bold;
    }
  }

  .badge {
    position: absolute;
    bottom: 7rem;
    color: white;
    padding: 3px;
  }

  .tag {
    left: 2rem;
    background-color: green;
  }

  .discount {
    background-color: red;
  }

  .heart {
    background-color: white;
    padding: 10px;
    position: absolute;
    top: 1rem;
    right: 0;

    &:hover i {
      color: red;
    }
  }

  .favourite {
    color: red;
  }
}
</style>
