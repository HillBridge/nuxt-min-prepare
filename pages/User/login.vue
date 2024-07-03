<template>
    <div>
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
const { setupAuthToken } = useStateStore()


const username = ref('admin')
const password = ref('123456')

const handleToLogin = async () => {
    const requestData = {
        username: username.value,
        password: password.value
    }
    try {
        const loginRes = await $api.user.login(requestData)
        if (loginRes.code === '0') {
            setupAuthToken(true)
            alert(loginRes.msg + loginRes.data.token)
        }
    } catch (err) {
    }
}
</script>

<style lang="scss" scoped></style>