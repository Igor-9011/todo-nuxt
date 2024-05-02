<template>
    <button>
        <slot />
    </button>
</template>

<style scoped>
    button {
        min-width: 120px;
        height: 50px;
        padding: 0 15px;
        border-radius: 10px;
        border: 1px solid #4F4F4F;
        background-color: #fff;
        transition: all 0.5s ease;
        cursor: pointer;
    }
    button:hover {
        background-color: #3D7FFF;
        border-color: #3D7FFF;
        color: #fff;
    }
</style>