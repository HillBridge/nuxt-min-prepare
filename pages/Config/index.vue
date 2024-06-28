<template>
    <div>
        <h1 class="title">Nuxt Config Page</h1>
        <p>从useAppConfig 中获取配置变量: title: {{ title }}, color: {{ color }}</p>
        <p>从useRuntimeConfig 中获取配置变量: apiSecret: {{ apiSecret }}, apiBase: {{ apiBase }}</p>
        <NuxtLink to="/">Back to home page</NuxtLink>
    </div>
</template>

<script setup>
// definePageMeta({
//     middleware: 'auth'
// })

const appConfig = useAppConfig()
const { $api } = useNuxtApp()
const runtimeConfig = useRuntimeConfig()

const title = appConfig.title
const color = appConfig.theme.colors.primary

const apiSecret = runtimeConfig.apiSecret
const apiBase = runtimeConfig.public.apiBase

const serverData = ref(null)
const clientData = ref(null)
const initialMount = async () => {
    if (process.server) {
        const { data: resData } = await $api.user.getUserInfo2(runtimeConfig.VITE_BASE_URL)
        console.log('resData--from--server--$fetch111', resData)
        if (resData.code === '0') {
            serverData.value = resData.data.userInfo
        }
    } else {
        const resData = await $api.user.getUserInfo(runtimeConfig.public.VITE_BASE_URL)
        console.log('resData--from--client--$fetch', resData)
        if (resData.code === '0') {
            clientData.value = resData.data.userInfo
        }
    }
}
initialMount()

</script>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss";

.title {
    color: $secondary
}
</style>
<style>
@import url('~/assets/scss/common.css');
</style>