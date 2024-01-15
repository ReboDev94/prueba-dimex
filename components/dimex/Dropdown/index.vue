<template>
    <div role="listbox" class="group relative inline-block">
        <DimexDropdownToogle :button="button">
            <slot name="toogle" />
        </DimexDropdownToogle>
        <DimexDropdownMenu :position="position" :align="align" :class="classMenu">
            <slot name="content" />
        </DimexDropdownMenu>
    </div>
</template>

<script setup lang="ts">
import type { IDropdown } from '~~/interfaces';
withDefaults(defineProps<IDropdown>(), { position: 'bottom', align: 'end', button: true, classMenu: '' });
</script>