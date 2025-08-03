import './assets/main.css'
import router from './router'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue'
import App from './App.vue'

const vuetify = createVuetify({
  components,
    directives,
    treeShake: true,
    theme: false, // Disable default theme
    theme: {
    defaultTheme: 'system', // 'light' | 'dark' | 'system'
  },
})

createApp(App).use(vuetify).use(router).mount('#app')
