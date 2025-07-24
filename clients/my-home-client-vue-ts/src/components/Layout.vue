<script setup>
// Import footer component
import FooterCom from './footer/index.vue'
// Import menu component - used to replace more functionality components
import MenuCom from './../components/menu/index.vue'
</script>

<template>
    <el-row>
        <!-- Total of 24 columns -->
        <!-- Left margin -->
        <el-col :span="1" style="background: white">
            <div class="grid-content" />
        </el-col>
        <!-- Navigation bar left - LOGO -->
        <el-col :span="11" style="background: Beige">
            <div class="grid-content ep-bg-purple-dark my-home">
                <router-link to="/">
                    <span class="my-logo">Home</span>
                </router-link>
            </div>
        </el-col>
        <!-- Navigation bar right - All functions button -->
        <el-col :span="11" style="background: Beige">
            <div class="grid-content">
                <span class="my-more">
                    <!-- Menu -->
                    <MenuCom />
                </span>
            </div>
        </el-col>
        <!-- Right margin -->
        <el-col :span="1" style="background: Khaki2">
            <div class="grid-content" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="1" style="background: white" class="content">
            <div class="grid-content" />
        </el-col>
        <el-col :span="22" style="background: Cornsilk" class="content">
            <span class="my-content">
                <!-- Main content -->
                <router-view></router-view>
            </span>
            <!-- Container for main content -->
            <div class="grid-content" />
        </el-col>
        <!-- Right margin -->
        <el-col :span="1" style="background: white" class="content">
            <div class="grid-content" />
        </el-col>
    </el-row>
    <!-- Footer section -->
    <el-row>
        <el-col :span="1" style="background: white">
            <div class="grid-content" />
        </el-col>
        <el-col :span="22">
            <FooterCom></FooterCom>
        </el-col>
        <el-col :span="1" style="background: white">
            <div class="grid-content" />
        </el-col>
    </el-row>
</template>

<style lang="scss">
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
}
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 45px;
}

// New styles
.content {
    min-height: 100vb; // Using min-height to ensure element expands when content exceeds viewport height
}

.grid-content {
    display: flex;
    align-items: center; /* Vertical centering */
    justify-content: center; /* Horizontal centering */
}

.my-logo {
    font-size: 100%; // Inherit parent element's font size
    color: DarkRed;
}

.my-search {
    font-size: 100%; // Inherit parent element's font size
    color: DarkRed;
}

.my-more {
    font-size: 100%; // Inherit parent element's font size
    color: DarkRed;
}

// Remove default link styling
/* Remove default anchor tag styles */
a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit parent element's text color */
    /* Other styles you want to reset */
}

a:hover,
a:active,
a:focus {
    text-decoration: none; /* Remove underline on hover, active and focus states */
    /* Other styles you want to reset */
}

/* Redefine hover style */
a:hover {
    /* border: 1px solid black; */
    border-bottom: 3px solid rgba(171, 4, 4, 0.941);
}
/* Hide global scrollbar */
::-webkit-scrollbar {
    display: none; /* For Chrome, Safari and Opera */
}

body {
    -ms-overflow-style: none; /* For IE and Edge */
    scrollbar-width: none; /* For Firefox */
}
</style>