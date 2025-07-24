<template>
    <div>
        <h1 style="text-align: center">English Learning Module</h1>
        <EnglishSentenceViewer :sentence="currentSentence" @next-sentence="nextSentence" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { englishApi, messageNotify } from '../../lib';
import EnglishSentenceViewer from './../EnglishSentenceViewer/index.vue'; // English sentence display component

// Current sentence
const currentSentence = ref('Fetching English sentence...')

// Get the next sentence
const nextSentence = async () => {
    try {
        // Get a sentence
        const resRandomSentence = await englishApi.getSentenceRandomOne()

        // Assign the sentence
        currentSentence.value = resRandomSentence.data.CONTENT

        // Pop-up notification
        messageNotify(resRandomSentence)
    } catch (error) {
        // Pop-up notification
        ElMessage({
            message: `error: ${error}`,
            type: 'error' // success, warning, info, error
        })
    }
}

// Execute the sentence fetching function after the page is mounted
onMounted(async () => {
    await nextSentence() // Fetch a sentence after the page is loaded
})
</script>