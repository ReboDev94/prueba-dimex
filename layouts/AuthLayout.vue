<template>
    <div class="sm:py-10">
        <div class="flex max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-4xl bg-white">
            <div class="hidden bg-cover lg:block lg:w-1/2 bg-[url('/images/img-login.jpg')]"></div>
            <div class="w-full min-h-screen sm:min-h-0 px-6 py-8 md:px-8 lg:w-1/2 my-4 lg:my-0">
                <div class="grid place-content-center">
                    <img src="/images/logo-dimex.png" class="w-20" alt="Dimex">
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>