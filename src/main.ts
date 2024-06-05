import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Importa los estilos de Vuetify
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/routes'

// Crea una instancia de Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

// Crea una instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Crea la aplicación Vue y usa Vuetify y el router
createApp(App).use(vuetify).use(router).mount('#app')
