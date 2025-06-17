<template>
    <div class="flex flex-wrap items-center my-font-style">
        <el-dropdown>
            <el-button type="primary">
                全部功能<el-icon class="el-icon--right">
                    <Watermelon />
                </el-icon>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <!-- <router-link active-class="" to="/world">
                      <el-dropdown-item>🌏逛地球</el-dropdown-item>
                    </router-link> -->

                    <router-link to="/">
                        <el-dropdown-item>🏠回首页</el-dropdown-item>
                    </router-link>

                    <router-link to="/blog">
                        <el-dropdown-item>✍️看日志</el-dropdown-item>
                    </router-link>
                    <router-link to="/english">
                        <el-dropdown-item>🔠学英语</el-dropdown-item>
                    </router-link>
                    <router-link to="/weather">
                        <el-dropdown-item>🌤️查天气</el-dropdown-item>
                    </router-link>
                    <router-link to="/visitorStatistics">
                        <el-dropdown-item>🔢看数据</el-dropdown-item>
                    </router-link>
                    <!-- 跳转到本站的管理后台 后续将开放游客模式让游客体验后台的功能（功能会限制） -->
                    <!-- <a href="http://wbeishangw.top:81/" target="_blank">
                        <el-dropdown-item>🎛️管后台</el-dropdown-item>
                    </a> -->
                    <router-link to="/version">
                        <el-dropdown-item>👓看版本</el-dropdown-item>
                    </router-link>
                    <!-- <router-link to="/login">
                        <el-dropdown-item>📲去登录</el-dropdown-item>
                    </router-link> -->
                    <!-- <router-link to="/game">
                        <el-dropdown-item>👻玩游戏</el-dropdown-item>
                    </router-link> -->
                    <!-- <router-link to="/aboutWebsite">
                        <el-dropdown-item>🧑‍💻关于本站</el-dropdown-item>
                    </router-link> -->
                    <router-link to="/about">
                        <el-dropdown-item>🤟关于我</el-dropdown-item>
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
