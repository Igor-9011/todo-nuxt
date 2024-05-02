<template>
    <div class="note_item">
        <div class="note_item__title">{{ note.title }}</div>
        <SliceTodoList :todo_list="note.todo_list"/>
        <div class="note_item_action__wrapper">
            <NuxtLink :to="{
                path: `/edit_note/${note.id}`
            }">
                <Icon name="ic:baseline-edit-note" class="pointer-events-none w-6 h-6 mb-2 ml-1" color="white"></Icon>
            </NuxtLink>
            <button @click="removeNote(note.id)">
                <Icon name="ic:sharp-delete" class="pointer-events-none w-5 h-5" color="white"></Icon>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/store/global'
const globalStore = useGlobalStore()

defineProps({
    note: {
        type: Object,
        default: () => { }
    }
})

function removeNote(id: string) {
    globalStore.setSelectId(id)
    globalStore.showRemoveModal()
}
</script>

<style scoped>
.note_item {
    position: relative;
    width: calc(33.333% - 48px);
    height: 240px;
    border-radius: 10px;
    overflow: hidden;
    padding: 30px;
    margin-right: 48px;
    margin-bottom: 48px;
    background-color: #fff;
}

.note_item:hover {
    background-color: #3D7FFF;
}

.note_item::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 85%);
}

.note_item:hover:after {
    background: linear-gradient(180deg, rgba(61, 127, 255, 0) 0%, rgba(61, 127, 255, 1) 85%);
}

.note_item::before {
    content: '';
    position: absolute;
    top: 0;
    right: 30px;
    width: 30px;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    z-index: 2;
}

.note_item:hover:before {
    background: linear-gradient(90deg, rgba(61, 127, 255, 0) 0%, rgba(61, 127, 255, 1) 100%);
}

.limit_todo__item_checkbox {
    display: flex;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin-right: 12px;
    flex-shrink: 0;
}

.note_item__title {
    color: #4F4F4F;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.2;
    margin-bottom: 16px;
}

.note_item:hover .note_item__title {
    color: #fff;
}

.limit_todo__item_title {
    color: #4F4F4F;
    font-size: 14px;
    white-space: pre;
}

.note_item:hover .limit_todo__item_title {
    color: #fff;
}

.limit_todo__item {
    position: relative;
    overflow: hidden;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
}

.disable {
    background-color: rgba(98, 255, 210, 0.1);
    box-shadow: inset 0 0 3px 0 rgba(113, 113, 113, 0.30);
}

.active {
    background: rgba(98, 255, 211, 1);
    background: radial-gradient(circle, rgba(98, 255, 211, 0.3) 0%, rgba(197, 216, 255, 1) 100%);
    box-shadow: inset 0 0 1px 0 rgba(113, 113, 113, 0.5);
}

.note_item_action__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 45px;
    height: 80px;
    border-radius: 10px 0 0 10px;
    background: linear-gradient(290deg, rgba(61, 127, 255, 1) 20%, rgba(98, 255, 211, 1) 100%);
    z-index: 3;
    opacity: 0;
}

.note_item:hover .note_item_action__wrapper {
    opacity: 1;
}
</style>