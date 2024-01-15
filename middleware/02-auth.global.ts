import { useAuthStore } from '../stores/auth.store';
const GUEST_ROUTES = ['login'];

export default defineNuxtRouteMiddleware(async (to, from) => {
    const useAuth = useAuthStore()
    const token = useCookie('token');

    if (process.server && !GUEST_ROUTES.includes(from.name as string) && token.value) {
        await useAuth.getUser();
    }

    if (token.value) {
        useAuth.setStatusAuthenticated('authenticated');
    }

    const nameRoute = to.name as string;
    if (token.value && GUEST_ROUTES.includes(nameRoute)) {
        return navigateTo('/dashboard')
    }

    if (!token.value && !GUEST_ROUTES.includes(nameRoute)) {
        abortNavigation();
        return navigateTo('/login')
    }
})