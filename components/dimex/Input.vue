<template>
    <input v-model="value" class="h-[36px]
        px-2
        py-2
        block
        text-sm
        w-full
        rounded-lg
        shadow-sm
        border
        border-solid
        bg-white
        border-base-200
        placeholder-base-300
        focus:outline-none
        focus:border-primary-500
        focus:ring-1
        focus:ring-primary-500
        disabled:cursor-not-allowed
        disabled:bg-base-50
        disabled:text-base-300" />
</template>

<script setup lang="ts">
const value = defineModel();
</script>