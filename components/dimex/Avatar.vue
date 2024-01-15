<template>
    <div class="shadow-md grid place-content-center h-10 w-10 min-h-[2.5rem] min-w-[2.5rem] rounded-full bg-base-100">
        <img :src="src" :class="twMerge('rounded-[inherit] object-fill h-10 w-10 min-h-[2.5rem] min-w-[2.5rem] text-sm')"
            alt="Avatar" />
    </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
defineProps<{ src: string | undefined }>();
</script>