<script>
import AppCard from "./AppCard.vue";
export default { components: { AppCard } };
</script>

<template>
  <main>
    <div class="container main-container">
      <AppCard></AppCard>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/generals.scss" as *;
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.main-container {
  padding: 2rem;
  padding-top: 6rem;
  @include align("default");
  flex-wrap: wrap;
  gap: 10px;
}
</style>
