<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import DonutCity from './DonutCity.vue';
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute.value.name;

</script>

<template>
    <div class="border-b-donut-600 dark:border-b-donut-400 border-b-2 bg-[color:var(--donut-bg)] dark:bg-[color:var(--donut-bg-dark)] text-[color:var(--donut-text)] dark:text-[color:var(--donut-text-dark)]">


        <div
        class="pt-5 items-center justify-center w-100 px-2 sm:px-6 lg:px-8  hidden sm:block">
        <div class="flex justify-center pr-3">
            <DonutCity class="" />
        </div>
    </div>
    <Disclosure as="nav" class=" text-donut-800 dark:text-donut-200" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-donut-400 hover:bg-zinc-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block size-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <DonutCity class="sm:hidden"></DonutCity>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4 pl-10">
                            <router-link v-for="item in router.options.routes" :key="item.name" :to="item.path" :class="[
                                $router.currentRoute.value.name === item.name ? 'bg-zinc-900 text-donut-800 border-b-2 border-zinc-800 dark:border-b-2 ' : 'text-donut-800',
                                ' px-3 py-2 text-2xl font-montserrat font-medium dark:text-donut-300 group hover:text-donut-500 text-left  ',
                            ]" :aria-current="$router.currentRoute.value.name === item.name ? 'page' : undefined">
                                {{ item.name }}
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <label for="Theme Change" class="block px-1 dark:text-donut-300">
              <DisclosureButton
                @click="toggleTheme"
                id="themebutton"
                type="button"
                class="button cursor-pointer"
                title="Switch to light or dark theme"
              >
                <div v-if="userTheme !== 'light'">
                  <!-- <span class="pr-2 inline">Light Theme</span> -->
                  <SunIcon class="size-10 inline float-end pr-5"></SunIcon>
                </div>
                <div v-else>
                  <!-- <span class="pr-2 inline">Dark Theme</span> -->
                  <MoonIcon class="size-10 inline float-end pr-5"></MoonIcon>
                </div>
              </DisclosureButton>
            </label>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden" v-slot="{ close }">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <DisclosureButton>
                    <router-link v-for="item in router.options.routes" :key="item.name" :to="item.path" :class="[
                         $router.currentRoute.value.name === item.name  ? ' text-donut-600 ' : 'text-donut-800',
                        ' px-3 py-2 text-md font-montserrat font-medium dark:text-donut-300 group block rounded-md text-left hover:bg-zinc-700 hover:text-donut-300',
                    ]" :aria-current="item.current ? 'page' : undefined" @click="isOpen(close)">
                        {{ item.name }}
                    </router-link>
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            open: false,
            userTheme: 'light',

        }
    },
    methods: {
        close() {
            this.isOpen = false;
        },
        isOpen(close) {
            close()
        },
         toggleTheme() {
      const activeTheme = localStorage.getItem('user-theme')
      if (activeTheme === 'light') {
        this.setTheme('dark')
      } else {
        this.setTheme('light')
      }
    },

    getTheme() {
      return localStorage.getItem('user-theme')
    },

    setTheme(theme) {
      localStorage.setItem('user-theme', theme)
      this.userTheme = theme
      if (theme == 'light') {
        theme = ''
      } else {
        theme = 'dark'
      }
      document.documentElement.className = theme
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (hasDarkPreference) {
        return 'dark'
      } else {
        return 'light'
      }
    },
    
    }
}
</script>