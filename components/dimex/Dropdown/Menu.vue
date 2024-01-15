<template>
    <ul role="menu" tabindex="0" :class="twMerge(
        `
                space-y-1
                bg-white
                z-[3]
                rounded-lg
                py-3
                px-2
                shadow-sm
                absolute
                w-[10rem]
                min-w-[10rem]
                invisible
                opacity-0
                group-focus-within:opacity-100
                group-focus-within:visible
                group-focus-within:scale-100
                scale-95
                transform
                transition
                duration-200
                ease-out
        `, POSITION_TYPE[position],
        ['top', 'bottom'].includes(position)
            ? ALIGN_VERTICAL_TYPE[align]
            : ALIGN_LATERAL_TYPE[align])">

        <slot />
    </ul>
</template>


<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { TPositionDropdown, TAlignDropdown } from '~~/interfaces';

const ALIGN_START_CLASSES = 'left-0';
const ALIGN_END_CLASSES = 'right-0';
const ALIGN_START_LATERAL_CLASSES = 'top-0 bottom-auto';
const ALIGN_END_LATERAL_CLASSES = 'bottom-0 top-auto';

const POSITION_TOP_CLASSES = 'top-auto bottom-full';
const POSITION_BOTTOM_CLASSES = 'top-full bottom-auto';
const POSITION_RIGHT_CLASSES = 'left-full top-0';
const POSITION_LEFT_CLASSES = 'right-full top-0';

const POSITION_CENTER_CLASSES = 'top-1/2 -translate-y-1/2';
const ALING_CENTER_CLASSES = 'left-1/2 -translate-x-1/2';

const POSITION_TYPE = {
    top: POSITION_BOTTOM_CLASSES,
    bottom: POSITION_TOP_CLASSES,
    right: POSITION_RIGHT_CLASSES,
    left: POSITION_LEFT_CLASSES,
};

const ALIGN_VERTICAL_TYPE = {
    end: ALIGN_END_CLASSES,
    start: ALIGN_START_CLASSES,
    center: ALING_CENTER_CLASSES,
};

const ALIGN_LATERAL_TYPE = {
    end: ALIGN_END_LATERAL_CLASSES,
    start: ALIGN_START_LATERAL_CLASSES,
    center: POSITION_CENTER_CLASSES,
};

defineProps<{ position: TPositionDropdown, align: TAlignDropdown }>();
</script>