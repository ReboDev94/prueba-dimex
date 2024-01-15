<template>
    <ul class="flex space-x-6">
        <li v-for="item in tabs" :key="item.title" @click="emits('change', item.href)"
            :class="twMerge('flex items-center gap-1 text-sm cursor-pointer text-base-500 font-medium', selectedTab === item.href && 'text-primary-600 font-black')">
            <component :is="item.icon" class="text-xl" />
            <span class="hidden md:block">
                {{ item.title }}
            </span>
        </li>
    </ul>
</template>
<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { ITab } from '~~/interfaces';

const selectedTab = defineModel({ type: String })
const { tabs } = defineProps<{ tabs: ITab[] }>();
const emits = defineEmits<{ (e: 'change', value: string): void }>();
</script>