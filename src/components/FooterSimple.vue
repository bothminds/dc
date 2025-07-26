<template>
  <footer class="dark:text-zinc-200 py-6 text-zinc-800 bg-zinc-200 dark:bg-zinc-800 px-5">
    <div class="container lg:px-10 flex flex-col md:flex-row items-center justify-between">
      <div class="flex space-x-4 mt-2 md:mt-0 text-sm"
        >&copy; {{ currentYear }} </div>
      <div class="w-auto flex items-center justify-center">
             <a
          href="https://bothminds.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          <span class="text-lg font-semibold pr-2">Web Development by </span>

        <img src="@/assets/images/both_minds_logo.png" alt="Both Minds Logo" class="h-8"/>
        <span class="text-lg font-semibold pl-2">Both Minds</span>
        </a>
      
      </div>
      <div class="flex space-x-4 mt-2 md:mt-0">
        <!-- <a href="#" class="hover:text-white">Privacy Policy</a>
        <a href="#" class="hover:text-white">Terms of Service</a> -->
        <!-- <a href="/contact" class="hover:underline">Contact</a> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    companyName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
