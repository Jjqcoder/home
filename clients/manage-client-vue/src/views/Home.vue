<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Home Page</h1>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>