<template>
    <Teleport to="body">
        <div class="modal" v-if="modelValue">
            <DimexBackDrop />
            <div class="fixed inset-0 z-[70] overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out"
                :class="[wrapperClass]">

                <div class="flex justify-center  px-4 pb-10" :class="{
                    'items-center min-h-screen pt-4': !centerModal,
                    'pt-10': centerModal
                }">
                    <!-- modal -->
                    <div class="relative bg-white rounded-lg w-full" :class="{
                        'md:w-2/6': size == 'sm',
                        'md:w-2/4': size == 'md',
                        'md:w-3/4': size == 'lg',
                        'md:w-full': size == 'xl',
                    }">
                        <!-- modal header -->
                        <div v-if="!hiddenHeader"
                            class="modal-header h-8 flex items-center justify-end rounded-t-md border px-4">
                            <button type="button" @click="emits('update:modelValue', false)" :disabled="loading">
                                <SvgoIconClose class="text-2xl" />
                            </button>
                        </div>
                        <slot v-else name="header" />
                        <!-- modal content -->
                        <div class="modal-content">
                            <slot name="content"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        modelValue: boolean;
        wrapperClass?: string;
        size?: string;
        hiddenHeader?: boolean;
        loading?: boolean;
        centerModal?: boolean
    }>(),
    {
        size: "sm",
        hiddenHeader: false,
        loading: false,
        centerModal: false,
        wrapperClass: ""
    }
);
const emits = defineEmits<{
    (e: "update:modelValue", value: boolean): void;
}>();
</script>