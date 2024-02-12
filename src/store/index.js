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
      "fa-brands fa-square-twitter",
      "fa-brands fa-square-facebook",
      "fa-brands fa-instagram",
      "fa-brands fa-pinterest",
      "fa-brands fa-square-youtube",
    ],
  },
});
