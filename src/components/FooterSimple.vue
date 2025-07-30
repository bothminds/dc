<template>
  <footer class=" bg-[color:var(--donut-bg)] dark:bg-[color:var(--donut-bg-dark)] text-[color:var(--donut-text)] dark:text-[color:var(--donut-text-dark)] py-4 px-5 pt-30">
    <div class="container mx-auto sm:px-10 flex flex-col sm:flex-row items-center justify-between">
      <div class="flex space-x-4 my-2 text-sm text-center"
        >&copy; {{ currentYear }} </div>
      <div class="w-auto flex text-center">
             <a
          href="https://bothminds.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex space-x-2 hover:bg-donut-200 dark:hover:bg-donut-700 transition"
        >
          <span class="text-md sm:text-lg font-semibold pr-2 text-center">Web site by Both Minds</span>
                <img src="@/assets/images/both_minds_logo.png" alt="Both Minds Logo" class="h-8"/>
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
