<script setup>

import FooterSimple from './components/FooterSimple.vue';
import TheDonuts from './components/TheDonuts.vue'

</script>

<template>
    <TheDonuts />
    <FooterSimple :company-name="'Both Minds'" />
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
