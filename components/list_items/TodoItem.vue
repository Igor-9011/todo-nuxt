<template>
    <div class="flex items-center mt-5 bg-white border rounded-lg p-5">
        <div class="w-full relative text-2">
            <div v-if="!isTitleEditable && !todo.succes">{{ todo.text }}</div>
            <s v-if="!isTitleEditable && todo.succes">{{ todo.text }}</s>
            <input v-if="isTitleEditable" class="w-full bg-transparent borde-0 outline-none" type="text"
                v-model="todoText">
            <!--TODO: Как установить каретку или выделить содержимое инпута-->
        </div>
        <ButtonEdit @click="editTodoTextHandler(todo.id, todo.text, todo.succes)" :editable="isTitleEditable" />
        <button class="flex mr-3" @click="removeTodoHandler(todo.id)">
            <Icon name="ic:sharp-delete" class="pointer-events-none w-5 h-5" color="black"></Icon>
        </button>
        <CheckBox @onChange="checkTodoHandler(todo.id, todo.text, todo.succes)" :id="todo.id" :checked="todo.succes" />
    </div>
</template>


<script setup lang="ts">
import { useNoteStore } from '~/store/note_list/index'
const route = useRoute()
const noteId = route.params.id.toString()
const noteStore = useNoteStore()
const isTitleEditable = ref(false)
const isTodoSucces = ref(false)
const todoText = ref('')

//TODO: Есть ли вариант сразу назначить todoText значение из пропсов? Сейчас это происходит только после пользовательского события

defineProps({
    todo: {
        type: Object,
        default: () => { }
    }
})

function editTodoTextHandler(todo_id: string, todo_text: string, todo_succes: boolean) {
    isTitleEditable.value = !isTitleEditable.value

    if (isTitleEditable.value) {
        todoText.value = todo_text
        isTodoSucces.value = todo_succes
    } else {
        updateTodo(todo_id)
    }
}

function removeTodoHandler(todo_id: string) {
    noteStore.removeTodoItem(noteId, todo_id)
}

function checkTodoHandler(todo_id: string, todo_text: string, todo_succes: boolean) {
    isTodoSucces.value = !isTodoSucces.value
    todoText.value = todo_text
    updateTodo(todo_id)
}

function updateTodo(todo_id: string) {
    const newIodoItem = {
        id: todo_id,
        text: todoText.value,
        succes: isTodoSucces.value
    }
    noteStore.updateTodoItem(noteId, todo_id, newIodoItem)
}
</script>
