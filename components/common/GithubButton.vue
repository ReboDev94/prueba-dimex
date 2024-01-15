<template>
    <button type="button"
        :class="twMerge(`btn bg-github text-white focus:ring-github/10 text-xs pl-[1px] pr-4 py-[1px] rounded-sm`)">
        <div class="flex items-center justify-center gap-2 h-full">
            <div class="w-8 grid place-content-center rounded-sm h-full">
                <SvgoIconGithub class="text-lg invert" filled />
            </div>
            Iniciar con GitHub
        </div>
    </button>
</template>
<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
</script>