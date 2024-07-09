<template>
    <div class="login-wrap">
        <h1>login Page</h1>
        <div style="margin: 20px 0;">
            <input type="text" v-model="username" placeholder="username">
        </div>
        <div style="margin: 20px 0;">
            <input type="password" v-model="password" placeholder="password">
        </div>
        <div style="margin: 20px 0;">
            <button @click="handleToLogin">客户端调用$fetch去登录</button>
        </div>

        <NuxtLink to="/">Back to home page</NuxtLink>
    </div>
</template>

<script setup>
const { $api } = useNuxtApp()

const username = ref('admin')
const password = ref('123456')
const requestData = {
    username: username.value,
    password: password.value
}

const handleToLogin = async () => {
    const loginRes = await $api('/login', {
        method: "post",
        body: requestData,
    })//
    console.log('loginRes', loginRes)
    if (loginRes.code === '0') {
        const token = loginRes.data.token
        await $fetch(`/api/auth?type=set&token=${token}`)
    }
}
</script>

<style lang="scss" scoped></style>