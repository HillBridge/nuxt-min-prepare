<template>
    <div>
        <h1>调用server中自定义的接口获取数据: useFetch </h1>
        <h2>get token from composables(客户端渲染): {{ token }}</h2>
        <h2>get username from pinia(服务端渲染): {{ username }}</h2>
        <div v-for="item in userData" :key="item.age">
            <span style="margin-right: 20px;">{{ item.name }}</span>
            <span>{{ item.age }}</span>
        </div>
        <div>
            <NuxtLink to="/api/fetch">Api fetch</NuxtLink>
        </div>
        <div>
            <NuxtLink to="/">Back to home page</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const { data: userData } = await useFetch('/api/user')

const token = useToken()

// 从pinia中获取, storeToRefs转为响应式数据
const { username } = storeToRefs(useStateStore())

</script>

<style lang="scss" scoped></style>