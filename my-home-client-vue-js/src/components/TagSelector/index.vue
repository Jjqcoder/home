<!-- 标签选择器 -->
<template>
    <div class="tag-selector">
        <div v-for="tag in tags" :key="tag.id" class="tag-item">
            <label :class="{selected: selectedTagIds.includes(tag.id)}">
                <input type="checkbox" :value="tag.id" v-model="selectedTagIds" @change="handleTagChange" />
                {{ tag.name }}
            </label>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch } from 'vue'

const props = defineProps({
    tags: {
        type: Array,
        required: true
    },
    modelValue: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['update:modelValue'])

const selectedTagIds = ref(props.modelValue)

watch(
    () => props.modelValue,
    newVal => {
        selectedTagIds.value = newVal
    }
)

watch(selectedTagIds, newVal => {
    emit('update:modelValue', newVal)
})

const handleTagChange = () => {
    emit('update:modelValue', selectedTagIds.value)
}
</script>

<style scoped>
.tag-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag-item label {
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px;
    background: #f5f7fa;
    user-select: none; /* 防止文字被选中 */
}

.tag-item label:hover {
    border-color: #c0c4cc;
    background: #ebeef5;
}

.tag-item label.selected {
    background: #ecf5ff;
    color: #409eff;
    border-color: #c6e2ff;
}

.tag-item input[type='checkbox'] {
    margin-right: 8px;
    width: 14px;
    height: 14px;
    cursor: pointer;
}

.tag-item input[type='checkbox']:checked {
    accent-color: #409eff; /* 复选框选中颜色 */
}
</style>
