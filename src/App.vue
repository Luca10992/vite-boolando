<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppModal from "./components/AppModal.vue";
import AppFooter from "./components/AppFooter.vue";

export default { components: { AppHeader, AppMain, AppModal, AppFooter } };
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>

  <main>
    <AppMain></AppMain>
    <AppModal></AppModal>
  </main>

  <footer>
    <AppFooter></AppFooter>
  </footer>
</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>
