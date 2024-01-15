<template>
    <NuxtLayout name="auth-layout">
        <p class="mt-2 text-center text-lg text-base-600">¡Bienvenido!</p>
        <form @submit.prevent="onSubmit" class="flex flex-col gap-3 mt-5">
            <div v-if="useAuth.isErrorAuth"
                class="text-error-800 font-semibold text-xs bg-error-50 px-4 py-2 text-center rounded-lg">
                Credenciales incorrectas
            </div>
            <div class="flex flex-col">
                <label class="text-sm py-1">
                    <span class="text-base-700 mb-2">Correo electrónico:</span>
                </label>
                <DimexInput v-model="credentials.username" type="text" placeholder="ReboDev" class="w-full" required />
            </div>
            <div class="flex flex-col">
                <label class="text-sm py-1">
                    <span class="text-base-700 mb-2">Contraseña:</span>
                </label>
                <DimexInput v-model="credentials.password" type="password" placeholder="**************" class="w-full"
                    required />
                <label class="text-right">
                    <NuxtLink to="/" class="text-xs py-2 hover:underline text-base-700">
                        ¿Olvidaste tu contraseña?
                    </NuxtLink>
                </label>
            </div>

            <DimexButton type="submit" :disabled="useAuth.isLoading">Ingresar</DimexButton>

            <HrWithText>ó</HrWithText>

            <div class="flex justify-between items-center flex-col gap-2 md:w-full md:flex-row">
                <GoogleButton />
                <GithubButton />
            </div>
            <NuxtLink to="/" class="text-center text-xs py-2 hover:underline text-base-700">
                ¿Aun no tienes una cuenta?, Registrate
            </NuxtLink>
        </form>
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'Login',
})
definePageMeta({
    layout: false,
});

const useAuth = useAuthStore()
const router = useRouter();

const credentials = ref({
    username: 'kminchelle',
    password: '0lelplR'
})

const onSubmit = async () => {
    const { username, password } = credentials.value;
    await useAuth.login(username, password);
    if (useAuth.statusAuthenticated === 'authenticated') router.push('dashboard')
}
</script>
