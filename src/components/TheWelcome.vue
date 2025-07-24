<template>

  <div class="justify-center h-screen items-center flex flex-col">
    <div class="">
      <h1 class="text-5xl font-bold mb-4">Coming Soon!</h1>
      </div>

    <div class="flex flex-col items-center justify-center pt-10 space-y-4">
  <h1 class="text-4xl font-bold pb-5">How many donuts?</h1>
  <input  id="donut_count" name="donut_count" v-model.number="donuts"
    type="number"
    placeholder="Enter a number"
    class="border w-36 border-gray-300 rounded px-4 py-2 text-center
     shadow focus:outline-none focus:ring-2 focus:ring-pink-500 "
  />
</div>


  </div>

  <div class="area">
    <ul class="circles" :key="donuts">
      <li v-for="n in donuts" :key="n" :class="`donut${Math.floor(Math.random() * 5) + 1}`"></li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'TheWelcome',
  data() {
    return {
      donuts: 6, // Default number of donuts
    };
  },
};
</script>

<style scoped>
/*Start Animations*/
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
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
  z-index:  -1;
}

.donut1 {
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
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  /* background-image: var(--donut-image); */
  /* border-color: #4e54c8;
  border-width: 1px; */
  /* background: rgba(255, 255, 255, 0.2); */
  /* background-image: url('@/assets/donut.png'); */
  background-position: 25% 25%;
  background-size: 100%;
  background-repeat: no-repeat;
  animation: animate 35s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 50px;
  height: 50px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 30px;
  height: 30px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

/*
-- End BackGround Animation
*/
</style>