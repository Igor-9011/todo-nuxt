<template>
    <div class="flex justify-between pb-12">
        <NuxtLink :to="'/'">
            <img src="~/assets/image/logo.svg" alt="">
        </NuxtLink>
        <div>
            <ButtonGradient v-if="route.name == 'index'" @click="globalStore.showCreateNoteModall()">Create new note</ButtonGradient>
            <ButtonGradient v-if="route.name == 'edit_note-id'" @click="noteStore.save()" :has_save="noteStore.hasSave">Save</ButtonGradient>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/store/global'
import { useNoteStore } from '~/store/note_list/index'

const globalStore = useGlobalStore()
const noteStore = useNoteStore()
const route = useRoute()
</script>