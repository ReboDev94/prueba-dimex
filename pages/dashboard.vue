<template>
    <div class="flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-end">
        <div class="w-full">
            <h1 class="text-2xl font-extrabold text-base-800">Dashboard</h1>
            <p class="font-light text-sm">Buenos dias, <span class="text-primary-600 font-black">{{ user?.firstName }} {{ user?.lastName }}</span></p>
        </div>
        <DimexCard>
            <TabDateFilter />
        </DimexCard>
    </div>
    <div class="mt-6">
        <Stadistics />
    </div>
    <div class="mt-4">
        <Evaluations />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Dashboard',
})
const { isUser: user } = useAuthStore()
</script>

