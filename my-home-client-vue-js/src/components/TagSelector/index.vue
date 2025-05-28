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
import {ref, watch, defineProps, defineEmits} from 'vue'

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

.tag-item {
    display: flex;
    align-items: center;
}

.tag-item label {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}

.tag-item label.selected {
    background-color: #e0e0e0;
}

.tag-item input[type='checkbox'] {
    margin-right: 8px;
}
</style>
