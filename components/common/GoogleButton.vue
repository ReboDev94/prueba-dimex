<template>
    <button type="button" :class="twMerge(`btn bg-google text-white focus:ring-google/10 text-xs pl-[1px] pr-4 py-[1px] rounded-sm`)">
        <div class="flex items-center justify-center gap-2 h-full">
            <div class="bg-white w-8 grid place-content-center rounded-sm h-full">
                <SvgoIconGoogle class="text-lg" filled />
            </div>
            Iniciar con Google
        </div>
    </button>
</template>
<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
</script>