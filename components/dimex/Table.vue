<template>
    <div class="relative overflow-x-auto rounded-md md:max-h-94">
        <table class="w-full bg-white text-sm text-left text-base-600">
            <thead class="border-b sticky top-0">
                <tr>
                    <th v-for="item in fields_keys" scope="col" class="px-3 py-3 font-medium text-left">
                        <slot :name="`header(${item.key})`" :data="item"> {{ item.name }}</slot>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="item in items" v-if="!loading">
                    <tr>
                        <td v-for="field in fields_keys" class="px-3 py-3 text-nowrap">
                            <slot :name="`cell(${field.key})`" :data="item">{{ item[field.key] }}</slot>
                        </td>
                    </tr>
                </template>

                <tr v-if="!loading && items.length == 0">
                    <td :colspan="fields_keys.length">
                        <div class="inline-flex w-full justify-center p-6 ">
                            <h1 class="text-lg text-base-300">
                                <slot name="label-empty">Sin datos</slot>
                            </h1>
                        </div>
                    </td>
                </tr>
                <tr v-if="loading">
                    <td :colspan="fields_keys.length">
                        <div class="inline-flex w-full justify-center p-6">
                            <DimexSpinner />
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot v-if="!loading && !props.hiddenFooter">
                <tr>
                    <td :colspan="fields_keys.length" class="w-full h-12 px-4">
                        <slot name="footer"></slot>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
import { computed } from 'vue';
import type { Field } from '~~/interfaces';
const props = withDefaults(
    defineProps<{
        fields?: Field[] | string[];
        items: T[];
        loading?: boolean;
        hiddenFooter?: boolean;
    }>(),
    { loading: false, hiddenFooter: false }
);


function fieldType(fields: Field | string): fields is Field {
    return (fields as Field).key === undefined;
}

const fields_keys = computed<Field[]>(() => {
    let fields_aux: Field[] = [];
    if (!props.fields || props.fields.length == 0) {
        if (props.items.length > 0) {
            const keys = Object.keys(props.items[0]);
            const fields = keys.map((key) => <Field>{ key: key, name: key });
            fields_aux = fields;
        }
    } else if (fieldType(props.fields[0])) {
        fields_aux = props.fields.map((key) => <Field>{ key: key, name: key });
    } else {
        fields_aux = props.fields as Field[];
    }
    return fields_aux;
});
</script>

