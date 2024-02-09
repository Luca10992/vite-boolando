<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
      data() {
          return {
            logo: 'boolean-logo.png',
            categories: ['Donna', 'Uomo', 'Bambino'],
            icons: ['fa-regular fa-user', 'fa-regular fa-heart', 'fa-solid fa-bag-shopping'],
            footer: {
              footerTitle: 'Boolando s.r.l.',
              infos: [
                  'Informazioni legali',
                  'Informativa sulla privacy',
                  'Diritto di recesso',
              ],
              socialText: 'Trovaci anche su',
              socialIcons: [
                  'fa-brands fa-square-twitter',
                  'fa-brands fa-square-facebook',
                  'fa-brands fa-instagram',
                  'fa-brands fa-pinterest',
                  'fa-brands fa-square-youtube',
              ]
            }
          }
      },

      components: { AppHeader, AppMain, AppFooter }
    }

</script>

<template>

  <header>
    <AppHeader
    :logo="logo"
    :categories="categories"
    :icons="icons"
    >
    </AppHeader>
  </header>

  <main>
    <AppMain></AppMain>
  </main>

  <footer>
    <AppFooter
    :footer="footer"
    :footerTitle="footerTitle"
    :infos="infos"
    :socialText="socialText"
    :socialIcons="socialIcons"
    >
    </AppFooter>
  </footer>

</template>

<style lang="scss">
  @use '../src/styles/generals.scss';
</style>