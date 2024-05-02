<template>
    <label>
        <input :id="id" @change="changeHandler" type="checkbox" :checked="checked">
    </label>
</template>

<script setup lang="ts">
    defineProps({
        id: {
            type: String,
            default: () => ''
        },
        checked: {
            type: Boolean,
            default: () => false
        }
    })

    const emits = defineEmits(['onChange'])

    function changeHandler(e: Event) {
        emits('onChange', e)
    }
</script>

<style scoped>
    label {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgba(98, 255, 210, 0.1);
        box-shadow: inset 0 0 3px 0 rgba(113, 113, 113, 0.30);
        overflow: hidden;
        transition: all 0.5s ease;
    }

    input {
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }

    label:has(input:checked) {
        background: rgba(98, 255, 211, 1);
        background: radial-gradient(circle, rgba(98,255,211,0.3) 0%, rgba(197,216,255,1) 100%);
        box-shadow: inset 0 0 1px 0 rgba(113, 113, 113, 0.5);
    }
</style>