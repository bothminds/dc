<script setup>
import VuitifyCarousel from '@/components/VuitifyCarousel.vue';
</script>
<template>

  <div class="container justify-center items-center flex-1 flex flex-col h-full min-h-100">
    <div class="flex flex-col items-center justify-center pt-10 space-y-4 w-full max-w-4xl ">

      <div
        class="flex flex-col w-100 items-center justify-center pt-10 space-y-4 rounded-lg shadow-lg bg-[color:var(--donut-bg)] dark:bg-[color:var(--donut-bg-dark)] text-[color:var(--donut-text)] dark:text-[color:var(--donut-text-dark)]">
        <h1 class="lg:text-5xl md:text-3xl text-2xl font-bold mb-4 text-center">Welcome to Donut City</h1>
        <p class="text-1xl mb-6 mx-10">Donut City—where mornings begin with joy, and every bite is a little
          celebration. Crafted fresh in Tucker, Georgia, our handmade donuts and breakfast sandwiches are more than a
          treat—they're a tradition.
          Whether you're grabbing your usual or discovering a new favorite, there's always something waiting for you
          here. Come hungry, leave happy.</p>
      </div>
<VuitifyCarousel/>
    </div>


    <div class="flex flex-col items-center justify-center pt-10 space-y-4">
      <v-dialog max-width="400">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps" color="pink-lighten-2" text="Donut Settings" variant="flat"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card class="items-center justify-center pt-5" color="pink-lighten-2">
            <v-card-title class="text-h5">Donut Settings</v-card-title>
            <v-divider></v-divider>
            <div class="text-caption mb-2">Adjust the settings for your floating donuts:</div>
            <v-divider></v-divider>
            <div>
              <div class="text-caption">Donut Count:</div>
              <v-slider v-model="donuts" :max="36" :min="1" :step="1" thumb-label class="w-56">
                <template v-slot:append>
                  <div class="w-10">{{ donuts }}</div>
                </template>
              </v-slider>
            </div>
            <div>
              <div class="text-caption">Min Donut Size:</div>
              <v-slider v-model="donutMinSize" :max="50" :min="10" :step="1" thumb-label class="w-56">
                <template v-slot:append>
                  <div class="w-10">{{ donutMinSize }}</div>
                </template>
              </v-slider>
            </div>
            <div>
              <div class="text-caption">Max Donut Size:</div>
              <v-slider v-model="donutMaxSize" :max="200" :min="50" :step="1" thumb-label class="w-56">
                <template v-slot:append>
                  <div class="w-10">{{ donutMaxSize }}</div>
                </template>
              </v-slider>
            </div>
            <div>
              <div class="text-caption">Average Speed:</div>
              <v-slider v-model="animationSpeed" :max="10" :min="0" :step="1" thumb-label class="w-56">
                <template v-slot:append>
                  <div class="w-10">{{ animationSpeed }}</div>
                </template>
              </v-slider>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Close" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>


  </div>

  <div class="circles bg-[color:var(--donut-bg)]/90 dark:bg-[color:var(--donut-bg-dark)]/90 rounded-lg shadow-lg">
    <ul class="circle" :key="donuts">
      <li v-for="n in donuts" :key="n" :style="getDonutStyle()"></li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'TheDonuts',
  data() {
    return {
      donuts: 12, // Default number of donuts
      donutMinSize: 30,
      donutMaxSize: 150, // Default size of donuts
      animationDelay: 0,
      animationSpeed: 3, // Default animation speed
      size: '50px', // Default size of donuts
      
    };
  },

  methods: {
    getSize() {
      const nsize = Math.floor(Math.random() * (this.donutMaxSize - this.donutMinSize + 1) + this.donutMinSize)  // Random size between donutMinSize and donutMaxSize
      // Ensure the size is a valid CSS value
      return nsize;
    },
    getAnimationDelay() {
      const delay = Math.floor(Math.random() * 5); // Random delay between 0 and 5 seconds
      return `${delay}s`;
    },
    getDonutStyle() {
      const dsize = this.getSize(); // Update size before returning style
      return {
        left: `${Math.floor(Math.random() * 120) - 10}%`,
        width: `${dsize}px`,
        height: `${dsize}px`,
        animationDelay: this.getAnimationDelay(),
        animationDuration: `${Math.floor(Math.random() * 20) - this.animationSpeed + 12}s`, // Random duration between 10 and 30 seconds
        backgroundSize: `${dsize}px ${dsize}px`,
        backgroundImage: `url('images/donut${Math.floor(Math.random() * 5) + 1}.png')`
      };
    }
  }
};
</script>

<style scoped>
/*Start Animations*/
@-webkit-keyframes animatetop {
  from {
    top: -200px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -200px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: .5;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    opacity: .5;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

/*End Animations*/
/*
-- Start BackGround Animation
*/


.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background-color: var(--color-background-soft);
}

/* .donut1 {
  background-image: url('@/assets/donut1.png');
}

.donut2 {
  background-image: url('@/assets/donut2.png');
}

.donut3 {
  background-image: url('@/assets/donut3.png');
}

.donut4 {
  background-image: url('@/assets/donut4.png');
}

.donut5 {
  background-image: url('@/assets/donut5.png');
} */

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  /* width: 20px;
  height: 20px; */
  /* background-image: var(--donut-image); */
  /* border-color: #4e54c8;
  border-width: 1px; */
  /* background: rgba(255, 255, 255, 0.2); */
  /* background-image: url('@/assets/donut.png'); */
  background-position: 25% 25%;
  background-size: 100%;
  background-repeat: no-repeat;
  animation: animate 35s linear infinite;
  bottom: 0px;
}



@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-110vh) rotate(720deg);
    opacity: 1;
    border-radius: 50%;
  }
}

/*
-- End BackGround Animation
*/
</style>