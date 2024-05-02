<template>
    <div v-if="isNoteListReady">
        <div class="transition-all border border-transparent rounded-lg w-full flex items-center mb-5 p-3"
            :class="{ 'bg-white border-inherit': isTitleEditable }">
            <ButtonEdit @click="editTitleHandler" :editable="isTitleEditable" />
            <div class="w-full relative text-3xl">
                <div v-if="!isTitleEditable">{{ note.title }}</div>
                <input v-if="isTitleEditable" class="w-full bg-transparent borde-0 outline-none" type="text"
                    v-model="noteTitle">
                <!--TODO: Как установить каретку или выделить содержимое инпута-->
            </div>
        </div>
        <div class="flex w-full">
            <input v-model="newTodoTitle" class="w-full outline-none border rounded-lg h-12 p-3" type="text">
            <button @click="addTodo"
                class="transition-all h-12 w-28 ml-3 bg-cyan-600 rounded-lg text-white hover:bg-cyan-500 ">Add</button>
        </div>
        <TodoList :todo_list="note.todo_list"/>
    </div>
    <LoaderSpiner v-if="!isNoteListReady" />
</template>

<script setup lang="ts">
import { useNoteStore } from '~/store/note_list/index'
const noteStore = useNoteStore()
const route = useRoute()
const noteId = route.params.id
const isTitleEditable = ref(false)
const isNoteListReady = ref(false)
const note = ref(noteStore.getNoteById(noteId.toString()))
const noteTitle = ref('')
const newTodoTitle = ref('')

onMounted(() => {
    noteStore.setNoteList()
    note.value = noteStore.getNoteById(noteId.toString())
    isNoteListReady.value = true
})



function addTodo() {
    noteStore.addTodoItem(
        noteId.toString(),
        {
            id: '',
            text: newTodoTitle.value,
            succes: false
        }
    )
    newTodoTitle.value = ''
}

function editTitleHandler() {
    isTitleEditable.value = !isTitleEditable.value

    if (isTitleEditable.value) {
        noteTitle.value = note.value.title.toString()
    } else {
        noteStore.updateNoteTitle(noteId.toString(), noteTitle.value.toString())
    }
}


</script>
