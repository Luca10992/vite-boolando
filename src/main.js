import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";

import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";

import {
  faSquareTwitter,
  faSquareFacebook,
  faSquareYoutube,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faSquareTwitter,
  faSquareFacebook,
  faSquareYoutube,
  faInstagram,
  faPinterest,
  faUser,
  faHeart,
  fas
);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
