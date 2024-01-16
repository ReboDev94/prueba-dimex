export default defineNuxtRouteMiddleware((to, from) => {
    const useAuth = useAuthStore();
    if (useAuth.statusAuthenticated === 'authenticated') {
        return navigateTo('dashboard')
    }
});