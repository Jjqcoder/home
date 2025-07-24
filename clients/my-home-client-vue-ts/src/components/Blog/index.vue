<template>
    <div>
        <!-- Tag selection component starts -->
        <div class="tag-selector-container">
            <h1>Filter Logs by Tags</h1>
            <TagSelector :tags="allTags" v-model="selectedTagIds" />
            <p>Selected tags:</p>
            <ul>
                <li v-for="tag in selectedTags" :key="tag.id">
                    {{ tag.name }}
                </li>
            </ul>
        </div>
        <!-- Tag selection component ends -->
        <!-- Render all article lists starts -->
        <FixedList class="my-blog" :pageSelectData="pageSelectData"></FixedList>
        <!-- Render all article lists ends -->
        <!-- Pagination starts -->
        <div class="demo-pagination-block">
            <div class="demonstration"></div>
            <el-pagination
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="[5, 8, 10]"
                :small="small"
                :disabled="disabled"
                :background="background"
                :pager-count="4"
                layout="prev, pager, next"
                :total="totalDataCount"
                @current-change="handleCurrentChange"
            />
            <!-- @size-change="handleSizeChange" Not enabled for now -->
            <!-- The complete one is: layout="total, sizes, prev, pager, next, jumper" :total="totalDataCount" -->
        </div>
        <!-- Pagination ends -->
    </div>
</template>

<script lang="" setup>
import TagSelector from '../TagSelector/index.vue' /* Import the tag selection component */
import {ref, onMounted, computed, watch} from 'vue'
import FixedList from './../FixedList/index.vue' /* Import the fixedList component */
import {isMobileDevice, messageNotify} from '../../lib' /* Determine whether it is a mobile device or PC */
import {blogApi} from '../../lib'
const totalDataCount = ref(100) /* Record the total number of data */
const currentPage = ref(1)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const pageSelectData = ref(null) /* Store the data queried by pagination */
const allBlogType = ref([]) /* Store all the Tags of the blog */
let pageSize = isMobileDevice() ? ref(5) : ref(15) /* Set the number of items per page based on the device type */

/* ===============================After the page is loaded, get the blog data starts=============================== */
onMounted(async () => {
    try {
        // Get blog data by pagination
        let res = await blogApi.getBlogByPage(currentPage.value, pageSize.value)

        /* Get all TAGs starts */
        let allTagFromServer = await blogApi.getAllTag()

        // Convert it to the format {0: 'Essay', 1: 'Hiking', 2: 'Demo'}
        allTagFromServer.data.forEach((item, index) => {
            allBlogType.value[index] = item
        })
        /* Get all TAGs ends */
        
        // Assign the total number of blog entries
        totalDataCount.value = res.data.total
        // Assign the data queried by pagination
        pageSelectData.value = res.data.records

        // Process the date information display and line breaks
        // 2025-03-09T15:01:38.000Z ==> 2025-03-09 15:01:38
        if (pageSelectData.value) {
            pageSelectData.value.forEach(item => {
                item.BLOG_CREATE_TIME = item.BLOG_CREATE_TIME.replace('T', ' ').replace('.000Z', '')
                item.BLOG_UPDATE_TIME = item.BLOG_UPDATE_TIME.replace('T', ' ').replace('.000Z', '')
            })
        }
        // Pop-up
        messageNotify(res, allTagFromServer)
    } catch (error) {
        // Pop-up
        ElMessage({
            message: `error: ${error}`,
            type: 'error' // success, warning, info, error
        })
    }
})
/* ===============================After the page is loaded, get the blog data ends=============================== */

// Callback when the size changes (Note: Considering the page layout, it is not enabled for now)
/*
const handleSizeChange = async val => {
    try {
        pageSize.value = val
        await handleCurrentChange()
    } catch (error) {
        console.error('An exception occurred while changing the page size')
    }
}
*/

// Callback when the page number changes
const handleCurrentChange = async val => {
    try {
        let res = await blogApi.getBlogByPageAndTag(currentPage.value, pageSize.value, selectedTags.value.map(tag => tag.name).join('|'))
        pageSelectData.value = res.data.records
        // Pop-up
        messageNotify(res)
        
    } catch (error) {
        console.error('An exception occurred while changing the page number', error)
        ElMessage({
            message: `error: ${error}`,
            type: 'error' // success, warning, info, error
        })
    }
}

/* ===================================Tag selection related content starts=================================== */
// Store all the tag data obtained from the backend
const allTags = ref([])
// Convert the tags in allBlogType to an array of objects
allTags.value = allBlogType.value.map((tag, index) => ({
    id: index + 1, // Use the index as ID
    name: tag
}))

// Store the IDs of the selected tags
const selectedTagIds = ref([]) // Initially select JavaScript and CSS

// Add a watch to monitor changes in selectedTagIds
watch(
    selectedTagIds,
    async () => {
        /* When the selected blog tags change, re-fetch the data starts */
        try {
            let res = await blogApi.getBlogByPageAndTag(currentPage.value, pageSize.value, selectedTags.value.map(tag => tag.name).join('|'))
            // Assign the total number of blog entries
            totalDataCount.value = res.data.total
            // Assign the data queried by pagination
            pageSelectData.value = res.data.records

            // Process the date information display and line breaks
            // 2025-03-09T15:01:38.000Z ==> 2025-03-09 15:01:38
            if (pageSelectData.value) {
                pageSelectData.value.forEach(item => {
                    item.BLOG_CREATE_TIME = item.BLOG_CREATE_TIME.replace('T', ' ').replace('.000Z', '')
                    item.BLOG_UPDATE_TIME = item.BLOG_UPDATE_TIME.replace('T', ' ').replace('.000Z', '')
                    // item.BLOG_CONTENT = item.BLOG_CONTENT.replace(/\n/g, '<br>') // Implement line breaks Note: Currently using rich text, no need to manually handle line breaks
                })
            }

            // Pop-up
            messageNotify(res)
            
        } catch (error) {
            // Pop-up
            ElMessage({
                message: `error: ${error}`,
                type: 'error' // success, warning, info, error
            })
            
        }
        /* When the selected blog tags change, re-fetch the data ends */
    },
    {deep: true}
)

// Calculate the selected tags
const selectedTags = computed(() => {
    /*
        allTags:
        0
        : 
        {id: 1, name: 'Essay'}
        1
        : 
        {id: 2, name: 'Hiking'}
        2
        : 
        {id: 3, name: 'Demo'}
    */
    // When selectedTagIds changes, selectedTags will be recalculated
    const res = allTags.value.filter(tag => selectedTagIds.value.includes(tag.id))
    return res
})

// Watch changes in allBlogType and update allTags
watch(
    allBlogType,
    () => {
        allTags.value = allBlogType.value.map((tag, index) => ({
            id: index + 1, // Use the index as ID
            name: tag
        }))
    },
    {immediate: true, deep: true}
)
/* ===================================Tag selection related content ends=================================== */
</script>

<style scoped>
/* Tag selector style starts */
.tag-selector-container {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
/* Tag selector style ends */
</style>