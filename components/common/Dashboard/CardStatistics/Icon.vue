<template>
    <div :class="twMerge(
        'border rounded-md',
        !withLabel && 'min-w-8 min-h-8 w-8 h-8 grid place-content-center',
        withLabel && 'inline-flex items-center justify-start px-2  min-h-7 h-7 gap-2',
        ICONS_EVALUATIONS_STATUS[typeIcon].classes,
    )">
        <component :is="Icon" class="min-w-5 min-h-5 w-5 h-5" />
        <p v-if="withLabel" class="font-semibold text-nowrap text-xs">{{ ICONS_EVALUATIONS_STATUS[typeIcon].label }}</p>
    </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { StatusEvaluation } from '~/interfaces';

const props = withDefaults(defineProps<{ typeIcon: StatusEvaluation, withLabel?: boolean }>(), { withLabel: false })
const Icon = resolveComponent(ICONS_EVALUATIONS_STATUS[props.typeIcon].icon);

</script>

