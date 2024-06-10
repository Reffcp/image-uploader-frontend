<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useTheme } from 'vuetify'

export default defineComponent({
  name: 'App',
  setup() {
    const theme = useTheme()

    const isDarkMode = computed({
      get: () => theme.global.name.value === 'dark',
      set: (val: boolean) => {
        theme.global.name.value = val ? 'dark' : 'light'
      }
    })

    const toggleDarkMode = () => {
      isDarkMode.value = isDarkMode.value ? true : false
    }

    return {
      isDarkMode,
      toggleDarkMode
    }
  }
})
</script>

<template>
  <v-app>
    <v-toolbar extension-height="1">
      <v-toolbar-title>
        <br />
        <v-switch
          align-content="center"
          v-model="isDarkMode"
          :label="isDarkMode ? 'Modo Oscuro' : 'Modo Claro'"
          @change="toggleDarkMode"
        ></v-switch>
      </v-toolbar-title>
    </v-toolbar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* Puedes agregar estilos globales o específicos aquí si es necesario */
</style>
