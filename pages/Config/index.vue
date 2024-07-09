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
const runtimeConfig = useRuntimeConfig()

const title = appConfig.title
const color = appConfig.theme.colors.primary

const apiSecret = runtimeConfig.apiSecret
const apiBase = runtimeConfig.public.apiBase
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