<template>
    <div class="rounded-t-[inherit] h-14 bg-base-50 flex justify-between">
        <ul class="flex h-full rounded-[inherit] text-base-400">
            <li v-for="(tab, index) in tabs" :key="tab" :class="twMerge('h-full text-sm first:rounded-l-[inherit] font-bold',
                modelValue === index && 'bg-white text-primary-500 font-extrabold')">
                <button @click="emits('update:modelValue', index)" type="button" class="px-6 h-full">
                    {{ tab }}
                </button>
            </li>
        </ul>
        <button type="button" class="w-10 grid place-content-center" @click="emits('close-modal')">
            <SvgoIconClose class="text-2xl text-base-600" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

defineProps<{ tabs: string[], modelValue: number }>()
const emits = defineEmits<{
    (e: "close-modal"): void;
    (e: "update:modelValue", value: number): void;
}>();
</script>