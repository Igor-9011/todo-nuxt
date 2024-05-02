<template>
    <ul>
        <li v-for="(todo, index) in limitTodo(todo_list, 5)" :key="index" class="limit_todo__item">
            <span :class="[todo.succes ? 'active' : 'disable']" class="limit_todo__item_checkbox"></span>
            <div class="limit_todo__item_title">{{ sliceStr(todo.text, 30) }}</div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { sliceString, limitTodoList } from '~/utils'
import type { TodoItem } from '~/store/note_list/interfaces';

const sliceStr = ref(sliceString)
const limitTodo = ref(limitTodoList)

defineProps({
    todo_list: {
        type: Array<TodoItem>,
        default: () => { }
    }
})
</script>