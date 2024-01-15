<template>
    <li role="menuitem" tabindex="0" :class="twMerge(
        'text-sm p-1.5 hover:bg-base-50 text-base-800 cursor-pointer rounded-md',
    )">
        <slot />
    </li>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
</script>