<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <footer>
    <div class="container footer-container">
      <div>
        <h5>{{ store.footer.footerTitle }}</h5>
        <ul>
          <li v-for="info in store.footer.infos">
            <a href="#">{{ info }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>{{ store.footer.socialText }}</h5>
        <ul>
          <li v-for="socialIcon in store.footer.socialIcons">
            <font-awesome-icon class="social-icon" :icon="socialIcon" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/generals.scss" as *;
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

footer {
  background-color: black;
  box-shadow: 0px 0px 3px 0px;
}

.footer-container {
  padding: 0 2rem;
  color: white;
  font-weight: bold;
  height: 60px;
  @include align("between");

  div {
    margin: 0;
  }

  li {
    margin: 0 5px;

    a {
      font-size: 10px;
      text-decoration: none;
      color: white;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .social-icon:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>
