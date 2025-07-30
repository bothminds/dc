<template>
  <!-- <nav class="py-6 bg-white/100 dark:bg-zinc-900/100 px-5"> -->
  <div class="flex flex-col md:flex-row items-center justify-between">

    <div class="flex-1 text-center pb-5 md:pb-0">
      <div v-if="!full">
        <p class="text-sm text-zinc-500 dark:text-zinc-400">
          Store Hours Today: {{ storeStatus().todayHours }}
          <span class="font-bold"
            :class="{ 'text-green-500': storeStatus().isOpen === 'Open', 'text-red-500': storeStatus().isOpen === 'Closed' }">We
            are {{ storeStatus().isOpen }}</span>
        </p>
        <p class="text-sm text-zinc-500 dark:text-zinc-400">
          1880 Mountain Industrial Blvd, Tucker, GA 30084
        </p>
      </div>


      <div v-if="full" class="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class=" bg-white/100 dark:bg-zinc-800/100 rounded-lg shadow-lg dark: pt-5">
          <h2 class="font-bold my-2 text-2xl">Store Hours</h2>
          <div class="text-sm text-zinc-500 dark:text-zinc-400 my-4 mx-6 text-left">
            <div v-for="(hours, day) in storeHours" :key="day" class="flex justify-between mt-1 mb-3">
              <div class="flex justify-between w-full">
                <span>{{ day }}:</span><span>{{ toAmPm(hours.open) }} - {{ toAmPm(hours.close) }}</span>
              </div>
            </div>
            <div>

              <div class="mt-4 text-center">
                <span class="font-bold "
                  :class="{ 'text-green-500': storeStatus().isOpen === 'Open', 'text-red-500': storeStatus().isOpen === 'Closed' }">We
                  are {{ storeStatus().isOpen }}</span>
              </div>
              <div class="text-sm text-zinc-500 dark:text-zinc-400 my-4 mx-auto text-left flex flex-col">
                <h3 class="font-bold text-lg text-center items-center">Store Features</h3>
                <div class="mt-1 mb-3">
                  <TruckIcon class="h-5 w-5 inline-block " /> Drive Thru
                </div>
                <div class="mt-1 mb-3">
                  <BuildingStorefrontIcon class="h-5 w-5 inline-block" /> Dine-In
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white/100 dark:bg-zinc-800/100 rounded-lg shadow-lg">
          <!-- Existing address/map content will remain here -->
          <div class="pt-5">
            <h2 class="font-bold my-2 text-2xl">Address</h2>
            <p class="text-sm text-zinc-500 dark:text-zinc-400 my-2 mx-6">
              1880 Mountain Industrial Blvd<br />
              Tucker, GA 30084
            </p>
          </div>
          <div class="justify-center">
            <div class="w-100 sm:w-100 h-64sm:h-72 rounded-lg shadow-lg px-5 py-5">
              <iframe class="w-100 sm:w-100 h-48 sm:h-64 rounded-lg shadow-lg p-10"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.002014849446!2d-84.20405472279731!3d33.83805867323828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a8a0b298b75d%3A0xa94b7090236d1375!2sDonut%20City!5e0!3m2!1sen!2sus!4v1753651603799!5m2!1sen!2sus"
                style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
import { BuildingStorefrontIcon, TruckIcon } from "@heroicons/vue/24/outline";

export default {
  components: { BuildingStorefrontIcon, TruckIcon },
  props: {
    full: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      currentYear: new Date().getFullYear(),
      storeHours: {
        Monday: { open: 6, close: 16 },
        Tuesday: { open: 6, close: 16 },
        Wednesday: { open: 6, close: 16 },
        Thursday: { open: 6, close: 16 },
        Friday: { open: 6, close: 16 },
        Saturday: { open: 6, close: 16 },
        Sunday: { open: 7, close: 15 }
      }
    }
  },
  methods: {
    toAmPm(hour) {
      const h = Number(hour);
      const suffix = h >= 12 ? "PM" : "AM";
      const displayHour = ((h + 11) % 12 + 1);
      return `${displayHour} ${suffix}`;
    },
    storeStatus() {
      // Get current time in EST (America/New_York)
      const now = new Date();
      // Convert to EST using toLocaleString
      const estTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
      const day = estTime.toLocaleString("en-US", { weekday: "long" });
      const hour = estTime.getHours();
      const minute = estTime.getMinutes();
      const storeHours = this.storeHours[day];
      // Convert military (24-hour) time to AM/PM format
      // Example usage:
      var isOpen = "closed";
      // console.log(hour+1, minute, storeHours.open, storeHours.close);
      // if (hour+1 === storeHours.open) {
      //   console.log("Opening Soon", storeHours.open);
      // }
      const todayHours = this.toAmPm(storeHours.open) + ' to ' + this.toAmPm(storeHours.close);
      if (hour < storeHours.open && (hour + 1 === storeHours.open && minute < 30)) {
        isOpen = "Closed";
      } else if (hour + 1 === storeHours.open && minute >= 30) {
        isOpen = "Opening Soon";
      } else if (hour >= storeHours.open && hour < storeHours.close) {
        isOpen = "Open";
      } else if (hour === storeHours.close && minute === 0) {
        isOpen = "Open";
      } else {
        isOpen = "Closed";
      }
      return {
        todayHours,
        isOpen
      };
    }
  }
}
</script>
