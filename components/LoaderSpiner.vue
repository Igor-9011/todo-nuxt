<template>
    <div class="flex w-full h-80 justify-center items-center">
        <span class="loader"></span>
    </div>
</template>

<style scoped>
.loader {
    display: flex;
    position: relative;
    width: 100px;
    height: 100px;
}

.loader:before,
.loader:after {
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
}

.loader:after {
    box-shadow: 0 2px 0 #3d7fff inset;
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>