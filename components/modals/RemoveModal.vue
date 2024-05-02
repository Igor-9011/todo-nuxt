<template>
    <div class="remove_modal">
        <div class="remove_modal__title">Are you sure you want to delete the note?</div>
        <div class="remove_modal__buttons">
            <Button @click="removeNoteHendler">Delete</Button>
            <Button @click="cancelHendler">Cancel</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/store/global'
import { useNoteStore } from '~/store/note_list/index'
const globalStore = useGlobalStore()
const notelStore = useNoteStore()


function removeNoteHendler() {
    notelStore.removeNoteItem(globalStore.getSelectId())
    cancelHendler()
}

function cancelHendler() {
    globalStore.hideAllModalls()
}
</script>


<style scoped>
.remove_modal {
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

.remove_modal__title {
    color: #4F4F4F;
    font-weight: 700;
    margin-bottom: 30px;
}

.remove_modal__buttons {
    display: flex;
    justify-content: space-between;
}

.remove_modal__buttons button {
    width: calc(50% - 15px);
}
</style>