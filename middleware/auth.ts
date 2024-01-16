export default defineNuxtRouteMiddleware((to, from) => {
    const useAuth = useAuthStore();
    if (useAuth.statusAuthenticated === 'un-authenticated') {
        return navigateTo('login')
    }
});