<template>
  <nav class="py-6 bg-zinc-200 dark:bg-zinc-900/100 px-5">
    <div class=" lg:px-10 flex flex-col md:flex-row items-center justify-between">

      <div class="flex-1 text-center">
        <a href="/" class="text-4xl font-bold">
          Donut City
        </a>
        <p class="text-sm text-zinc-500 dark:text-zinc-400">
          {{ storeStatus().todayHours }} 
          <span class="font-bold" :class="{'text-green-500': storeStatus().isOpen === 'Open', 'text-red-500': storeStatus().isOpen === 'Closed'}">We are {{ storeStatus().isOpen }}</span>
        </p>
        <p class="text-sm text-zinc-500 dark:text-zinc-400">
          1880 Mountain Industrial Blvd, Tucker, GA 30084
        </p>
      </div>
    </div>
  </nav>
</template>
<script>
export default {

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
      function toAmPm(hour) {
        const h = Number(hour);
        const suffix = h >= 12 ? "PM" : "AM";
        const displayHour = ((h + 11) % 12 + 1);
        return `${displayHour} ${suffix}`;
      }
      // Example usage:
      var isOpen = "closed";
      // console.log(hour+1, minute, storeHours.open, storeHours.close);
      // if (hour+1 === storeHours.open) {
      //   console.log("Opening Soon", storeHours.open);
      // }
      const todayHours = toAmPm(storeHours.open) + ' to ' + toAmPm(storeHours.close);
      if (hour < storeHours.open && (hour+1 === storeHours.open && minute < 30)) {
         isOpen = "Closed";
      } else if (hour+1 === storeHours.open && minute >= 30) {
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
