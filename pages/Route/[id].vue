<template>
    <div>
        <h1>动态路由 {{ id }}</h1>
        <div>
            <NuxtLink to="/route">Back to route !</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
</script>

<style lang="scss" scoped></style>