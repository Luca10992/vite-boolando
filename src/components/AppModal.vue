<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    closeModal() {
      store.modal.show = false;
    },
  },
};
</script>

<template>
  <div class="layover" v-if="store.modal.show">
    <div class="modal">
      <div class="current-image">
        <img :src="store.modal.current" alt="" />
      </div>
      <div class="text-modal">
        <div class="brand">{{ store.modal.brand }}</div>
        <div class="name">{{ store.modal.name }}</div>
        <div class="price">{{ store.modal.price }}</div>
        <div class="thumbnail">
          <div class="image-modal">
            <div>
              <img
                @click="store.modal.current = store.modal.front"
                :src="store.modal.front"
              />
            </div>
            <div>
              <img
                @click="store.modal.current = store.modal.retro"
                :src="store.modal.retro"
              />
            </div>
          </div>
        </div>
        <select class="size">
          <option value="Default">Seleziona la taglia...</option>
          <option value="xs">Xs</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">Xl</option>
          <option value="xxl">Xxl</option>
        </select>
        <div class="favourite-cart">
          <div class="favourite">
            <font-awesome-icon icon="fa-solid fa-heart" />
          </div>
          <div class="cart-shopping">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          </div>
        </div>
        <div class="cross" @click="closeModal()">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layover {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.7);
  .modal {
    display: flex;
    width: 60%;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;

    .current-image {
      width: 40%;

      img {
        width: 100%;
        display: block;
      }
    }

    .image-modal {
      width: 30%;
      display: flex;
      margin: 2rem 0;
      gap: 10px;

      div {
        cursor: pointer;

        &:hover {
          border: 2px solid #333;
          opacity: 0.8;
        }
      }

      img {
        width: 100%;
        display: block;
      }
    }

    .text-modal {
      width: 80%;
      padding: 2rem;
      position: relative;

      .brand {
        font-size: 1.5rem;
        color: lightgray;
      }

      .name {
        font-size: 2rem;
        font-weight: bold;
        padding: 1rem 0;
      }

      .price {
        font-size: 20px;
      }

      .size {
        width: 28%;
        font-size: 15px;
        background-color: white;
        border: 1px solid #333;
        border-radius: 3px;
        padding: 4px;
        cursor: pointer;

        &:hover {
          background-color: rgb(238, 238, 238);
        }

        option {
          background-color: white;
        }
      }

      .favourite-cart {
        display: flex;
        position: absolute;
        font-size: 25px;
        right: 0;
        bottom: 0;
        cursor: pointer;

        .favourite {
          padding: 5px 10px;
          background-color: lightgray;
          color: white;

          &:hover {
            opacity: 0.8;
            color: red;
          }
        }

        .cart-shopping {
          padding: 5px 10px;
          background-color: black;
          color: white;
          &:hover {
            opacity: 0.8;
          }
        }
      }

      .cross {
        padding: 5px 10px;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 30px;
        color: #333;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
          transition: 0.5s;
          background-color: red;
        }
      }
    }
  }
}
</style>
