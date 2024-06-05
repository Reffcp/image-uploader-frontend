<script lang="ts">
import { defineComponent } from 'vue'
import HomeComponent from '@/components/home/HomeComponent.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeComponent
  }
})
</script>

<template>
  <br />
  <HomeComponent />
</template>

<style></style>
