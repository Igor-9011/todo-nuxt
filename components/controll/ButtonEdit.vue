<template>
    <button class="flex shrink-0 items-center justify-center bg-transparent border-0 outline-none  mr-3">
        <Icon v-if="editable" 
        class="pointer-events-none w-6 h-6"
        name="ic:baseline-check" color="#3D7FFF" />
        <Icon v-if="!editable"
        class="pointer-events-none w-6 h-6"
        name="ic:baseline-edit" />
    </button>
</template>

<script setup lang="ts">
defineProps({
    editable: {
        type: Boolean,
        default: () => false
    }
})
</script>