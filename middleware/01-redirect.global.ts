export default defineNuxtRouteMiddleware((to, from) => {
    const useAuth = useAuthStore();
    if (to.fullPath === '/' && useAuth.statusAuthenticated === 'authenticated') {
        return navigateTo('dashboard')
    }
    if (to.fullPath === '/' && useAuth.statusAuthenticated === 'un-authenticated') {
        return navigateTo('login')
    }
});