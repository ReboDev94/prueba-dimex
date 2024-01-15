<template>
    <div :class="twMerge(
        'inline-block self-stretch bg-base-100 opacity-100',
        POSITIONS[position]
    )">
    </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
const POSITIONS = {
    vertical: 'h-full w-[1px]',
    horizontal: 'h-[1px] w-full'
}
withDefaults(defineProps<{ position?: 'vertical' | 'horizontal' }>(), { position: 'vertical' })
</script>