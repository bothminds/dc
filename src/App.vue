<script setup>

import TheWelcome from './components/TheDonuts.vue'
import FlyThrough from './components/FlyThrough.vue'
</script>

<template>
    <TheWelcome />
    <!-- <FlyThrough/> -->
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
