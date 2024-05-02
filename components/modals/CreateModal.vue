<template>
    <div class="create_modal">
        <div class="create_modal__title">Create a new note</div>
        <input type="text" v-model="note_name" :class="{'border-red-300': isEmpty}" class="p-4 mb-6 w-full h-12 border rounded-lg">
        <div class="create_modal__buttons">
            <Button @click="addNoteHendler">Done</Button>
            <Button @click="cancelAddingHendler">Cancel</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/store/global'
import { useNoteStore } from '~/store/note_list/index'

const globalStore = useGlobalStore()
const notelStore = useNoteStore()
const note_name = ref('')
const isEmpty = ref(false)

function addNoteHendler() {
    if (note_name.value.trim() != '') {
        notelStore.addNoteItem({
            id: '',
            title: note_name.value,
            todo_list: []
        })
        cancelAddingHendler()
    } else {
        isEmpty.value = true
    }
}

function cancelAddingHendler() {
    globalStore.hideAllModalls()
}

</script>


<style scoped>
.create_modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 390px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 0 80px 0 rgba(130, 130, 130, 0.25);
    z-index: 999;
}

.create_modal__title {
    color: #4F4F4F;
    font-weight: 700;
    margin-bottom: 20px;
}

.create_modal__buttons {
    display: flex;
    justify-content: space-between;
}

.create_modal__buttons button {
    width: calc(50% - 15px);
}
</style>