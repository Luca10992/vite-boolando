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

    applyDiscount(card) {
      const discountPerc = parseInt(card.badges[0].value);
      const discountCalc = ((card.price * discountPerc) / 100)
        .toFixed(2)
        .slice(1);
      const discountPrice = (card.price - discountCalc).toFixed(2);
      return (card.discountPrice = "€ " + discountPrice);
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
  <div
    class="card"
    v-for="(card, index) in this.cards"
    @mouseover="card.spin = true"
    @mouseleave="card.spin = false"
  >
    <div class="box-img" @click="$emit('show-modal', index)">
      <img
        :src="buildImagePath(card.images.front)"
        :class="card.spin == true ? 'none' : 'spin'"
      />
      <img
        :src="buildImagePath(card.images.retro)"
        :class="card.spin == true ? 'spin' : 'none'"
      />
    </div>
    <div class="box-text">
      <div class="brand">{{ card.brand }}</div>
      <div class="name">{{ card.name }}</div>
      <div class="box-price">
        <div v-if="card.isInDiscount">
          {{ applyDiscount(card) }}
        </div>
        <div :class="card.isInDiscount == true ? 'price' : ''">
          {{ "€ " + card.price }}
        </div>
      </div>
    </div>
    <div @click="card.isInFavourite = !card.isInFavourite" class="heart">
      <div>
        <font-awesome-icon
          icon="fa-solid fa-heart"
          :class="card.isInFavourite == true ? 'favourite' : ''"
        />
      </div>
    </div>
    <div class="badge-box">
      <div
        v-for="badge in card.badges"
        class="badge"
        :class="badge.type == 'discount' ? 'discount' : ''"
      >
        {{ badge.value }}
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

    .box-price {
      display: flex;
      gap: 5px;
      color: red;
      font-weight: bold;
    }

    .price {
      text-decoration: line-through;
      color: lightgray;
    }
  }

  .badge-box {
    position: absolute;
    bottom: 7rem;
    color: white;
    padding: 3px;
    display: flex;
    gap: 0.25rem;
  }

  .badge {
    background-color: green;
    padding: 2px;
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
