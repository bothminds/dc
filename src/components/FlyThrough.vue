<template>
  <div class="logo-container">
    <img
      v-for="(logo, i) in logos"
      :key="i"
      :src="logo"
      class="flying-logo"
      :style="{ animationDelay: `${i * 0.3}s` }"
    />
  </div>
</template>
<script>


export default {
  name: 'FlyThrough',
  components: {},
  props: {},
  data() {
    return {
      logos: [
        ('@/assets/donut1.png'),
        ('@/assets/donut2.png'),
        ('@/assets/donut3.png'),
        ('@/assets/donut4.png'),
        ('@/assets/donut5.png'),
      ],
    };
  },
}

</script>

<style scoped>
.flying-logo {
  position: absolute;
  top: 50vh;
  left: -200px;
  animation: flyIn 1.5s ease-out forwards;
}
@keyframes flyIn {
  from {
    transform: translateX(0) rotate(-30deg);
    opacity: 0;
  }
  to {
    transform: translateX(800px) rotate(0deg);
    opacity: 1;
  }
}
</style>
