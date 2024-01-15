<template>
    <DimexCard class="flex flex-col gap-2 px-8 py-6">
        <h4 class="text-base-800 text-lg font-extrabold">Mis Evaluaciones</h4>
        <div class="block relative md:w-96 w-full mt-2 md:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-6">
                <SvgoIconSearch class="text-lg text-base-300"></SvgoIconSearch>
            </span>
            <DimexInput v-model="searchInput" class="pl-14" placeholder="Buscar por número de celular" />
        </div>

        <DimexTable :fields="fields" :items="filterItems" class="mt-5" :loading="pending">
            <template #header(date)="{ data }">
                <button type="button" class="flex items-end gap-2">
                    {{ data.name }}
                    <SvgoIconFilter class="text-base-600" />
                </button>
            </template>
            <template #header(name)="{ data }">
                <button type="button" class="flex items-end gap-2">
                    {{ data.name }}
                    <SvgoIconFilter class="text-base-600" />
                </button>
            </template>

            <template #header(progress)="{ data }">
                <button type="button" class="flex items-end gap-2">
                    {{ data.name }}
                    <SvgoIconArrow class="text-base-600 text-xl !mb-0" />
                </button>
            </template>
            <template #header(status)="{ data }">
                <button type="button" class="flex items-end gap-2">
                    {{ data.name }}
                    <SvgoIconArrow class="text-base-600 text-xl !mb-0" />
                </button>
            </template>
            <template #cell(date)="{ data }">
                {{ $dayjs(data.date).format('DD/MM/YYYY') }}
            </template>
            <template #cell(celphone)="{ data }">
                {{ data.lada }} {{ formatPhoneNumber(data.celphone) }}
            </template>
            <template #cell(progress)="{ data }">
                <EvaluationsProgress :progress="data.progress" />
            </template>
            <template #cell(status)="{ data }">
                <CardStatisticsIcon :typeIcon="data.status" with-label />
            </template>
            <template #cell(opt)="{ data }">
                <button type="button" v-if="['aproved', 'not-meet'].includes(data.status)" @click="modal = true">
                    <SvgoIconEye class="text-xl text-base-300" />
                </button>
                <button type="button" v-if="['incomplete', 'not-accept'].includes(data.status)" @click="modal = true">
                    <SvgoIconEdit class="text-xl text-base-300" />
                </button>
            </template>
        </DimexTable>
    </DimexCard>
    <DimexModal v-model="modal" size="lg" hidden-header>
        <template #header>
            <EvaluationsInfoTab v-model="activeIndex" :tabs="tabs" @close-modal="modal = false" />
        </template>
        <template #content>
            <div class="px-8 py-3">
                <EvaluationsInfoOverAll v-if="activeIndex === 0" @close="modal = false" />
                <EvaluationsInfoOffer v-if="activeIndex === 1" />
            </div>
        </template>
    </DimexModal>
</template>

<script setup lang="ts">
import type { IEvaluation } from '~/interfaces';

const searchInput = ref('');
const modal = ref(false);
const activeIndex = ref(0);
const tabs: string[] = ['General', 'Oferta Comercial']

const fields = [
    { key: 'date', name: 'Fecha' },
    { key: 'name', name: 'Nombre' },
    { key: 'celphone', name: 'Celular' },
    { key: 'progress', name: 'Progeso' },
    { key: 'status', name: 'Estatus' },
    { key: 'opt', name: '' },
];
const filterItems = computed<IEvaluation[]>(() => {
    const allEvaluations = data.value ?? []
    if (searchInput.value.trim().length === 0) return allEvaluations;
    const regex = new RegExp('^' + searchInput.value, 'i');
    return [...allEvaluations].filter((item) => regex.test(item.celphone))
});

const { data, pending } = await useAsyncData<IEvaluation[]>('evaluations', () => $fetch('/api/evaluations'))
</script>