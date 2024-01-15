<template>
    <div class="flex flex-col">
        <p class="text-xs text-base-500">{{ EVALUATION_STATUS[progress] }}</p>
        <div class="flex gap-1">
            <div v-for="item in 5" :key="item"
                :class="twMerge('h-[10px] w-6 bg-primary-50 border first:rounded-l-lg last:rounded-r-lg', progress >= item && 'bg-primary-600')">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { IProgress } from '~/interfaces';
defineProps<IProgress>()
</script>