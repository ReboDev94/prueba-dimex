<template>
    <div class="flex flex-wrap -mx-3">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 px-3">
            <CardStatistics type-icon="aproved" title="Evaluación aprobada">
                <div class="flex gap-4">
                    <div class="flex items-end gap-2">
                        <h3 class="text-base-800 text-2xl font-extrabold">8%</h3>
                        <p class="text-xs text-base-600">con cita</p>
                    </div>
                    <DimexDivider />
                    <div class="flex items-end gap-2">
                        <h3 class="text-base-800 text-2xl font-extrabold">13%</h3>
                        <p class="text-xs text-base-600">sin cita</p>
                    </div>
                </div>
            </CardStatistics>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 px-3">
            <CardStatistics type-icon="not-accept" title="No aceptada oferta" :percentage="19" />
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 px-3">
            <CardStatistics type-icon="incomplete" title="Evaluación incompleta" :percentage="20" />
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-3 px-3">
            <CardStatistics type-icon="not-meet" title="No cumple con el perfil" :percentage="40" />
        </div>
    </div>
</template>