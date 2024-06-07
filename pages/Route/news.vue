<template>
    <div>
        <h1>parent page 嵌套路由</h1>
        <ul>
            <li>
                <NuxtLink to="/route/news/">car</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/route/news/basketball">basketball</NuxtLink>
            </li>
        </ul>
        <NuxtPage :page-key="route => route.fullPath" />
        <div>
            <button @click="navigateToRoute">Back to route(编程式导航)</button>
            <!-- <NuxtLink to="/route">Back to route !</NuxtLink> -->
        </div>
    </div>
</template>

<script setup>

const navigateToRoute = () => {
    // 编程式导航
    return navigateTo({
        path: '/route'
    })
}
</script>

<style lang="scss" scoped></style>