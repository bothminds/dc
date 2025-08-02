<script setup>
import HoursAddress from '../components/HoursAddress.vue';
import paralaxImage from '@/assets/images/strawberry_glaze_tray.jpg';

</script>
<template>
  <div>
    <!-- <div class="text-center">
        <h1 class="display-1 font-weight-bold text-2xl">Location</h1>
        <h2 class="subheading">Find us at our Tucker location!</h2>
      </div> -->
    <div class="justify-center items-center px-5 pb-100">

      <div class="flex flex-col">
        <HoursAddress :full="true" />
      </div>
    </div>
  </div>
  <div class="bg-full">
    <div :style="{ backgroundImage: `url(${paralaxImage})` }"
      class="bg-cover bg-position-[center_top_5rem] sm:bg-position-[center_top_5rem] bg-parallax bg-no-repeat h-full sm:h-full bg-opacity-100 bg-fixed">
    </div>
  </div>
</template>
<style scoped>
.bg-full {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: var(--donut-bg-soft);
  color: var(--donut-text);
}
</style>
