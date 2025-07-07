<template>
    <div :class="['sentence-viewer', {'immersive-mode': isImmersiveMode}]">
        <div class="sentence-content">
            <p>{{ sentence }}</p>
        </div>
        <div class="button-group">
            <el-button type="primary" @click="nextSentence">Next Sentence</el-button>
            <el-button :type="isImmersiveMode ? 'danger' : 'primary'" @click="toggleImmersiveMode">
                {{ isImmersiveMode ? 'Exit Immersive Mode' : 'Enter Immersive Mode' }}
            </el-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  sentence: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['next-sentence'])

const isImmersiveMode = ref(false)

const nextSentence = () => {
  emit('next-sentence')
}

const toggleImmersiveMode = () => {
  isImmersiveMode.value = !isImmersiveMode.value
  if (isImmersiveMode.value) {
    document.documentElement.classList.add('immersive-mode-active')
  } else {
    document.documentElement.classList.remove('immersive-mode-active')
  }
}
</script>

<style scoped>

/* 
    Optimization points:
    
    1. Added padding-top: env(safe-area-inset-top, 20px) to adapt to devices with notches like iPhones.

    2. Adjusted padding and margins in immersive mode to ensure content is not cut off by the screen edges.

    3. Added a minimum font size (16px) to ensure readability on small screens.

    4. Adjusted line height (1.8) and word-break to improve reading experience.

    5. Further optimized top spacing in small screen media queries.

    6. Used box-sizing: border-box to ensure padding does not cause layout issues.
*/
.sentence-viewer {
    text-align: center;
    padding: 20px;
    transition: all 0.3s ease;
}

.sentence-content {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.6;
    color: #333;
    text-align: left;
    text-indent: 2em;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
}

/* Immersive mode styles */
.sentence-viewer.immersive-mode {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    background-color: #121212;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0; /* Added top and bottom padding */
    overflow: auto;
    box-sizing: border-box; /* Ensure padding is included in the height */
}

.sentence-viewer.immersive-mode .sentence-content {
    font-size: clamp(16px, 5vw, 24px); /* Adjusted minimum font size */
    line-height: 1.8; /* Increased line height for readability */
    max-width: 90%; /* Adjusted maximum width */
    margin: 20px 0; /* Adjusted margins */
    color: #fff;
    width: 100%; /* Ensure width adapts */
    padding: 0 5%; /* Horizontal padding */
    box-sizing: border-box;
}

.sentence-viewer.immersive-mode .sentence-content p {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 25px 20px; /* Added top and bottom padding */
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.1);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    margin: 0;
    word-break: break-word; /* Ensure long words wrap */
}

/* Additional adjustments for small screens */
@media (max-width: 480px) {
    .sentence-viewer.immersive-mode {
        padding-top: env(safe-area-inset-top, 20px); /* Consider iPhone notch */
        justify-content: flex-start; /* Start layout from the top */
    }
    
    .sentence-viewer.immersive-mode .sentence-content {
        margin-top: 20px;
        max-width: 95%;
    }
}

/* Global styles to prevent body scrolling */
:global(.immersive-mode-active) {
    overflow: hidden !important;
    background-color: #121212;
    color: #fff;
}
</style>