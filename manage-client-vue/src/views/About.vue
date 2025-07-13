<!-- src/views/About.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView'
})
</script>