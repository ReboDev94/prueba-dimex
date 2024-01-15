<template>
    <div class="mb-4 px-2 flex flex-col gap-1 md:flex-row font-semibold">
        <p class="text-base-400 text-nowrap w-32 min-w-32">{{ keyValue }}</p>
        <p class="text-base-700 text-left">{{ value }}</p>
    </div>
</template>

<script setup lang="ts">
import type { IPersonalProperty } from '~/interfaces';
defineProps<IPersonalProperty>()

</script>