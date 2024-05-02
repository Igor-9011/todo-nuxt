<template>
    <div>
        <button :class="{'has_save': has_save}">
            <span></span>
            <p>
                <slot />
            </p>
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps({
    has_save: {
        type: Boolean,
        default: () => false
    }
})
</script>

<style scoped>
button {
    position: relative;
    min-width: 120px;
    height: 50px;
    padding: 0 15px;
    border-radius: 10px;
    border: none;
    overflow: hidden;
    background: rgb(61, 127, 255);
    background: linear-gradient(120deg, rgba(61, 127, 255, 1) 0%, rgba(98, 255, 211, 1) 100%);
    transition: all 0.5s ease;
    color: #fff;
    cursor: pointer;
}

button.has_save::after {
    content: '';
    position: absolute;
    top: 10px;
    right: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 5;
    animation: saveIndecate_anim 1.5s ease infinite;
}

@keyframes saveIndecate_anim {
    from {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

span,
p {
    pointer-events: none;
}

span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(61, 127, 255);
    background: linear-gradient(140deg, rgba(61, 127, 255, 1) 20%, rgba(98, 255, 211, 1) 100%);
    transition: all 0.5s ease;
    opacity: 0;
}

p {
    position: relative;
}

button:hover {
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}

button:hover span {
    opacity: 1;
}
</style>