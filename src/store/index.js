import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://localhost:3000",
  logo: "boolean-logo.png",
  categories: ["Donna", "Uomo", "Bambino"],
  icons: [
    "fa-regular fa-user",
    "fa-regular fa-heart",
    "fa-solid fa-bag-shopping",
  ],
  footer: {
    footerTitle: "Boolando s.r.l.",
    infos: [
      "Informazioni legali",
      "Informativa sulla privacy",
      "Diritto di recesso",
    ],
    socialText: "Trovaci anche su",
    socialIcons: [
      {
        link: "https://twitter.com/i/flow/login",
        icon: "fa-brands fa-square-twitter",
      },
      {
        link: "https://www.facebook.com/?locale=it_IT",
        icon: "fa-brands fa-square-facebook",
      },
      {
        link: "https://www.instagram.com/",
        icon: "fa-brands fa-instagram",
      },
      {
        link: "https://www.pinterest.it/",
        icon: "fa-brands fa-pinterest",
      },
      {
        link: "https://www.youtube.com/",
        icon: "fa-brands fa-square-youtube",
      },
    ],
  },
  options: ["Xs", "S", "M", "L", "Xl", "Xxl"],
  modal: {
    show: false,
    brand: "",
    name: "",
    price: "",
    current: "",
    front: "",
    retro: "",
    favourite: false,
    cart: false,
  },
});
