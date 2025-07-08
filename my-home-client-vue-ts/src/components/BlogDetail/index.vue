<template>
    <RichTextDisplay :DATA_TOBE_DISPLAY="DATA_TOBE_DISPLAY" />
</template>

<script setup>
import RichTextDisplay from '../RichTextDisplay/index.vue'
// Get log information
import {useRoute} from 'vue-router'

const route = useRoute()

// Get dynamic parameter 'row'
let DATA_TOBE_DISPLAY = JSON.parse(route.params.row)
// Remove the 'BLOG_' prefix from key names
DATA_TOBE_DISPLAY = Object.fromEntries(
    Object.entries(DATA_TOBE_DISPLAY).map(([key, value]) => {
        return [key.replace('BLOG_', ''), value]
    })
)
</script>

<style lang="scss" scoped></style>