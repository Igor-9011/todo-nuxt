<template>
    <div>
        <TodoItem v-for="todo in todo_list" :key="todo.id" :todo="todo"/>
    </div>
</template>


<script setup lang="ts">
import type { TodoItem } from '~/store/note_list/interfaces';
defineProps({
    todo_list: {
        type: Array<TodoItem>,
        default: () => []
    }
})
</script>