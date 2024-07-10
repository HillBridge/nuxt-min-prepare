<template>
    <div class="home-wrap">
        <Header />
        <h1>Home Page {{ color }}</h1>
        <h2>get token from composables(客户端渲染): {{ token }}</h2>
        <h2>get username from pinia(服务端渲染): {{ username }}</h2>
        <button @click="handleChangeUsername">change uername</button>
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

        <div>
            <NuxtLink to="/config">Go to config page</NuxtLink>
        </div>

        <Footer />
    </div>
</template>

<script setup>
// 从composables组合函数中获取
import { storeToRefs } from "pinia";
const token = useToken()
const color = useColor()

const userStore = useStateStore()
const { username } = storeToRefs(userStore)
console.log('username', username)
const handleChangeUsername = () => {
    userStore.setUsername('119')
}

const { $api } = useNuxtApp()
// console.log('从nuxtApp中获取username', nuxtApp.$username)

const { data } = await useAsyncData('userInfo', () => $api('/userInfo'))

</script>

<style lang="scss" scoped>
.home-wrap {
    // text-align: center;

    h1 {
        color: blue;
    }
}
</style>