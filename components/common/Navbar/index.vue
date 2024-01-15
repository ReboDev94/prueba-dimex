<template>
    <nav class="sticky top-0 z-30 shadow-md bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-between h-16 relative">
                <div class="flex items-center">
                    <img src="/images/logo-dimex.png" class="min-w-20 w-20" alt="Dimex">
                </div>
                <NavbarTab v-model="selectedTab" @change="selectTab" :tabs="tabs" class="absolute left-1/2 transform -translate-x-1/2" />
                <NavbarProfile />
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const iconDashboard = resolveComponent('SvgoIconDashboard')
const iconSettings = resolveComponent('SvgoIconSettings')

const route = useRoute();
const router = useRouter();

const selectedTab = computed(() => route.name);

const selectTab = (tab: string) => {
    router.push(tab)
}

const tabs =
    [
        {
            title: 'Dashboard',
            href: 'dashboard',
            icon: iconDashboard
        },
        {
            title: 'Configuración',
            href: 'settings',
            icon: iconSettings
        }
    ]
</script>