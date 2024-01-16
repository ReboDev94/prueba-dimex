<template>
    <div class="flex gap-1 lg:gap-4 items-center">
        <DimexAvatar :src="user?.image" />

        <div class="hidden lg:flex flex-col">
            <p class="text-sm font-extrabold text-base-800">{{ user?.firstName }} {{ user?.lastName }}</p>
            <span class="text-[10px] text-base-600 font-medium">{{ user?.role }}</span>
        </div>

        <DimexDropdown position="top" align="end" :button="false" class="lg:block grid place-content-center"
            class-menu="mt-2">
            <template #toogle>
                <SvgoIconArrow class="text-2xl text-base-300" />
            </template>
            <template #content>
                <DimexDropdownItem>
                    <button class="w-full text-start" @click="router.push('/')" type="button">Perfil</button>
                </DimexDropdownItem>
                <DimexDropdownItem>
                    <button class="w-full text-start" @click="router.push('/')" type="button">Notificaciones</button>
                </DimexDropdownItem>
                <DimexDropdownItem>
                    <DimexButton class="w-full" @click="logout" type="button">Cerrar sesión</DimexButton>
                </DimexDropdownItem>
            </template>
        </DimexDropdown>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const useAuth = useAuthStore();
const token = useCookie('token');
const { isUser: user } = useAuth

const logout = () => {
    useAuth.logout()
    token.value = null
    router.push('/')
}
</script>