<template>
    <div>
        <div v-if="noteStore.noteList.length == 0 && isNoteListReady" class="flex items-center flex-col">
            <div class="text-5xl text-teal-200 mb-7">You don't have any notes yet</div>
            <div class="text-2xl text-slate-400">Click on the 'create new note' button</div>
        </div>
        <NoteList :note_list="noteStore.noteList"/>
        <LoaderSpiner v-if="!isNoteListReady"/>
    </div>
</template>

<script setup lang="ts">
import { useNoteStore } from '~/store/note_list/index'

const noteStore = useNoteStore()
const isNoteListReady = ref(false)

onMounted(() => {
  noteStore.setNoteList()
  isNoteListReady.value = true
})
</script>
