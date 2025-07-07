<template>
    <div class="menu">
        <!-- online user count -->
        <OnlineCount />
        <!-- display all functions -->
        <AllFunction />
    </div>
</template>

<script setup>
// mount the online user count component
import OnlineCount from '../OnlineCount/index.vue'
import AllFunction from '../AllFunction/index.vue'
</script>

<style scoped lang="less">
.menu {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}

/* remove default hyperlink styles */
a {
    // & represents the parent selector, which is a
    &, &:hover, &:active, &:focus {
        text-decoration: none;
        color: inherit;
    }
    
    &:hover {
        border-bottom: 3px solid rgba(171, 4, 4, 0.941);
    }
}
</style>