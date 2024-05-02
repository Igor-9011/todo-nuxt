<template>
    <div class="flex flex-wrap -mr-12 -mb-12">
        <!--TODO: Почему не получается просто передать item в атрибут :note ?-->
        <NoteItem v-for="note in note_list" :key="note.id" :note="note"/>
    </div>
</template>

<script setup lang="ts">
import type { NoteItem } from '~/store/note_list/interfaces';
defineProps({
    note_list: {
        type: Array<NoteItem>,
        default: () => []
    }
})
</script>