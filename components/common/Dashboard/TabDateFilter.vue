<template>
    <ul class="flex items-center text-xs gap-2 font-medium">
        <li v-for="item in filters" :key="item.value" :class="twMerge(
            `hover:cursor-pointer
                    relative
                    after:absolute
                    after:content-['']
                    after:bg-primary-500
                    after:h-[2px]
                    after:left-0
                    after:-bottom-[5px]
                    after:rounded-xl
                    after:duration-300
                    select-none
                    `, selectedTab === item.value && 'after:w-full font-extrabold')">
            <button type="button" @click="selectedTab = item.value">{{ item.title }}</button>
        </li>
        <li>
            <SvgoIconMore class="text-xl text-base-200" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { ITabFilter } from '~/interfaces';

const selectedTab = ref('all');
const filters: ITabFilter[] =
    [
        { title: 'Todo', value: 'all' },
        { title: 'Hoy', value: 'today' },
        { title: 'Mes', value: 'month' },
        { title: 'Año', value: 'year' }
    ]
</script>