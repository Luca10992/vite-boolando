<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
      data() {
          return {
              
          }
      },

      components: { AppHeader, AppMain, AppFooter }
    }

</script>

<template>

  <header>
    <AppHeader></AppHeader>
  </header>

  <main>
    <AppMain></AppMain>
  </main>

  <footer>
    <AppFooter></AppFooter>
  </footer>

</template>

<style lang="scss">
  @use '../src/styles/generals.scss'
</style>