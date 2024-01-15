<template>
   <DimexCard class="flex flex-col gap-2 px-8 py-6 min-h-36 h-36">
      <CardStatisticsIcon :typeIcon="typeIcon" />
      <p class="text-base-500 text-sm font-medium">{{ title }}</p>
      <slot v-if="!percentage" />
      <h3 v-else class="text-base-800 text-2xl font-extrabold">{{ percentage }}%</h3>
   </DimexCard>
</template>

<script setup lang="ts">
import type { ICardStatistics } from '~/interfaces';

withDefaults(defineProps<ICardStatistics>(), { typeIcon: 'aproved', percentage: undefined })
</script>