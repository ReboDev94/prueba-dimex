import type { Pinia } from 'pinia';
import { useAuthStore } from '../stores/auth.store';

export default defineNuxtPlugin(async (nuxtApp) => {
    const { $pinia } = nuxtApp;
    const _pinia = $pinia as Pinia;
    const useAuth = useAuthStore(_pinia);
    const token = useCookie('token');

    if (token.value) {
        const { error } = await useAuth.getUser(token.value);
        if (error.value) {
            token.value = null
        }
    }
})