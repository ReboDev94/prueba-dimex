<template>
    <div class="flex flex-col gap-2">
        <div class="text-xs flex justify-center md:justify-end gap-2 min-h-4 h-4 ">
            <span class="font-extrabold text-primary-500">Oferta comercial</span>
            <DimexDivider />
            <span class="text-base-400 font-bold">Cita agendada</span>
        </div>
        <div class="flex justify-between items-end">
            <h3 class="text-base-700 text-xl font-extrabold">Información Personal</h3>
            <CardStatisticsIcon typeIcon="aproved" with-label />
        </div>
    </div>
    <div class="pt-6">
        <div class="flex flex-wrap -mx-2 text-xs">
            <EvaluationsInfoPersonalProperty class="w-full lg:w-5/12" key-value="Nombre"
                value="Maria Eugenia Rodriguez Rendon" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-7/12" key-value="Celular" value="+52 81 8576 7894" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-5/12" key-value="Fecha de nacimiento" value="28/08/1965" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-7/12" key-value="Correo" value="maria.eugenia@gmail.com" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-5/12" key-value="RFC" value="VISA790402B3TA" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-7/12" key-value="Dirección"
                value="Calle Rio Lena #2018,Ruberas de Dos Rios, Guadalupe,C.P. 64628" />
        </div>
    </div>
    <DimexDivider position="horizontal" />
    <div class="pt-6">
        <div class="flex flex-wrap -mx-2 text-xs">
            <EvaluationsInfoPersonalProperty class="w-full lg:w-5/12" key-value="Producto" value="Electrónico" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-7/12" key-value="Estado" value="Nuevo León" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-5/12" key-value="Sub Producto" value="IMSS" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-7/12" key-value="Banco" value="Banorte" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-5/12" key-value="Tipo de Nómina" value="Jubilado" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-7/12" key-value="Sucursal" value="Sucursal Escobedo" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-5/12" key-value="Operación" value="Crédito Nuevo" />
            <EvaluationsInfoPersonalProperty class="w-full lg:w-7/12" key-value="Promotor" value="Pamela Chaves Garcia (81 10375 28740)" />
        </div>
    </div>
    <div class="flex justify-end py-3">
        <DimexButton @click="emits('close')">Cerrar</DimexButton>
    </div>
</template>


<script setup lang="ts">
const emits = defineEmits<{
    (e: 'close'): void
}>()
</script>