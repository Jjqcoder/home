<template>
    <div class="flex flex-wrap items-center my-font-style">
        <el-dropdown>
            <el-button type="primary">
                All functions<el-icon class="el-icon--right">
                    <Watermelon />
                </el-icon>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <!-- <router-link active-class="" to="/world">
                      <el-dropdown-item>🌏逛地球</el-dropdown-item>
                    </router-link> -->

                    <router-link to="/">
                        <el-dropdown-item>🏠Back to Home</el-dropdown-item>
                    </router-link>

                    <router-link to="/blog">
                        <el-dropdown-item>✍️View Blogs</el-dropdown-item>
                    </router-link>
                    <router-link to="/english">
                        <el-dropdown-item>🔠Learn English</el-dropdown-item>
                    </router-link>
                    <router-link to="/weather">
                        <el-dropdown-item>🌤️Check the Weather</el-dropdown-item>
                    </router-link>
                    <router-link to="/visitorStatistics">
                        <el-dropdown-item>🔢View Data</el-dropdown-item>
                    </router-link>
                    <!-- Go to Admin Panel (Visitor Mode coming soon – experience limited backend functionality.) -->
                    <a href="https://wbeishangw.top:444" target="_blank">
                        <el-dropdown-item>🎛️Admin Panel <span style="margin-left:4px; font-size:13px; color:#666">↗</span></el-dropdown-item>
                    </a>
                    <router-link to="/version">
                        <el-dropdown-item>👓View Version</el-dropdown-item>
                    </router-link>
                    <!-- <router-link to="/login">
                        <el-dropdown-item>📲Go to Login</el-dropdown-item>
                    </router-link> -->
                    <!-- <router-link to="/game">
                        <el-dropdown-item>👻Play Games</el-dropdown-item>
                    </router-link> -->
                    <!-- <router-link to="/aboutWebsite">
                        <el-dropdown-item>🧑‍💻About This Site</el-dropdown-item>
                    </router-link> -->
                    <router-link to="/portfolio">
                        <el-dropdown-item>📚Portfolio</el-dropdown-item>
                    </router-link>
                    <router-link to="/about">
                        <el-dropdown-item>🤟About Me</el-dropdown-item>
                    </router-link>
                    <router-link to="/supportMe">
                        <el-dropdown-item>😮Support Me</el-dropdown-item>
                    </router-link>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang="ts" setup>
import {Watermelon} from '@element-plus/icons-vue'
</script>

<style scoped></style>
