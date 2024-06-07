<template>
    <div class="home-wrap">
        <Header />
        <h1>Home Page {{ color }}</h1>
        <h2>get token from composables(客户端渲染): {{ token }}</h2>
        <h2>get username from pinia(服务端渲染): {{ username }}</h2>
        <HomeWelcome />
        <div>
            <NuxtLink to="/foo">Go to foo page</NuxtLink>
        </div>

        <div>
            <NuxtLink to="/route">Go to route page</NuxtLink>
        </div>

        <div>
            <NuxtLink to="/api">Go to route api</NuxtLink>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
// 从composables组合函数中获取
const token = useToken()
const color = useColor()
// 从pinia中获取, storeToRefs转为响应式数据
const { username } = storeToRefs(useStateStore())


</script>

<style lang="scss" scoped>
.home-wrap {
    text-align: center;

    h1 {
        color: blue;
    }
}
</style>