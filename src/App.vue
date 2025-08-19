<script setup>
import { RouterView } from 'vue-router'
import FooterSimple from './components/FooterSimple.vue';
import NavBar from './components/NavBar.vue';
import FooterSocial from './components/FooterSocial.vue';

</script>

<template>

  <div class="min-h-screen h-full w-screen flex flex-col dark:bg-zinc-800/80">
    <NavBar />
    <div class="flex-1 pb-24 container mx-auto px-4 sm:px-6 lg:px-8 ">
      <RouterView />
    </div>
    <div class="border-t border-donut-300 dark:border-donut-700 mt-10">

      <FooterSocial :company-name="'Both Minds'" />
      <FooterSimple :company-name="'Donut City'" />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

  }


}
</style>
