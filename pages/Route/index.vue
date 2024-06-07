<template>
    <div class="route-wrap">
        <h1>Route Page</h1>
        <div class="mb20">
            <NuxtLink to="/">Back to home page</NuxtLink>
        </div>
        <div class="mb20">
            <NuxtLink to="/route/221">Go to route 221 动态路由</NuxtLink>
        </div>
        <div class="mb20">
            <NuxtLink to="/route/985">Go to route 985 动态路由</NuxtLink>
        </div>
        <div class="mb20">-------------------------------------------------</div>
        <div class="mb20">
            <NuxtLink to="/route/users-login/1">Go to route users-login 动态路由</NuxtLink>
        </div>
        <div class="mb20">
            <NuxtLink to="/route/users-register/2">Go to route users-register 动态路由</NuxtLink>
        </div>
        <div class="mb20">-------------------------------------------------</div>
        <div class="mb20">
            <NuxtLink to="/route/news">Go to route news 嵌套路由</NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.route-wrap {
    text-align: center;

    .mb20 {
        margin-bottom: 20px;
    }
}
</style>