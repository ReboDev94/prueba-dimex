<template>
    <label tabindex="0" class="block m-1">
        <DimexButton type="button" v-if="button">
            <slot />
        </DimexButton>
        <slot v-else />
    </label>
</template>

<script setup lang="ts">
import type { IDefaultToogleDropdown } from '~~/interfaces';
defineProps<IDefaultToogleDropdown>()
</script>