<template>
  <!-- 
    Minimal Loading Indicator
    Design Principles:
    1. Apple-style subtlety
    2. Pure geometric elegance
    3. Seamless infinite motion
  -->
  <div class="minimal-loader">
    <div class="loader-spinner"></div>
    <div class="loader-text">Loading</div>
  </div>
</template>

<script setup>
// Pure minimal loading indicator
// Features:
// - Infinite smooth rotation
// - Perfect geometric proportions
// - Ultra-lightweight implementation
</script>

<style lang="less">
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.minimal-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  z-index: 1000;

  .loader-spinner {
    width: 24px;
    height: 24px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: #000;
    border-radius: 50%;
    animation: spin 1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite;
    will-change: transform;
  }

  .loader-text {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #000;
    letter-spacing: 0.3px;
    opacity: 0.8;
  }
}
</style>