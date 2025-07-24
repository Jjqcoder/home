<!-- Rich text display component - most display work will be handled by this component later -->
<template>
    <div v-html="editorContent"></div>
</template>

<script setup>
import {ref, watch} from 'vue'

const props = defineProps({
    DATA_TOBE_DISPLAY: {
        type: Object,
        required: true
    }
})

const editorContent = ref('Content is loading...') // Initialize editor content

watch(
    () => props.DATA_TOBE_DISPLAY, // Watch the DATA_TOBE_DISPLAY prop
    newVal => {
        editorContent.value = `
        ${newVal.TITLE ? `<h2 style="text-align: center">${newVal.TITLE}</h2>` : ''}
        ${newVal.CREATE_TIME ? `<p>【Created at: ${newVal.CREATE_TIME}】</p>` : ''}
        ${newVal.UPDATE_TIME ? `<p>【Updated at: ${newVal.UPDATE_TIME}】</p>` : ''}
        ${newVal.CONTENT ? `<div style="text-indent: 2em">${newVal.CONTENT}</div>` : ''}
    `
    },
    {immediate: true, deep: true}
)
</script>

<style scoped>
div {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>