<template>
    <div class="g_site__wrapper">
        <div class="g_site__bg_image"></div>
        <div class="g_site__bg_decore">
            <span></span>
            <span></span>
        </div>
        <div class="g_site__content">
            <div v-if="globalStore.isBackdropShow" @click="globalStore.hideAllModalls()" class="modal_backdrop"></div>
            <MainHeader />
            <slot />
        </div>
        <RemoveModal v-if="globalStore.isRemoveModalShow"/>
        <CreateModal v-if="globalStore.isCreateNoteModalShow"/>
        <!--TODO: Добавить остальные модальные окна-->
    </div>
</template>

<script setup lang="ts">
    import { useGlobalStore } from '~/store/global'
    const globalStore = useGlobalStore()
</script>


<style scoped>
/*TODO: Почему layout выдает ошибку, если не написать хотябы один стиль */
.g_site__wrapper::-webkit-scrollbar {
    width: 0px;
    /* ширина всей полосы прокрутки */
}
</style>