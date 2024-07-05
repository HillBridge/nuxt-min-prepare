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
const { loggedIn, user, session, clear } = useUserSession()

console.log('useUserSession--loggedIn', loggedIn.value)
// console.log('useUserSession--user', user)
console.log('useUserSession--session', session.value)
// console.log('useUserSession--clear', clear)

// if (!loggedIn.value) {
//     const { data } = await useAsyncData('userInfo', () => $api('/userInfo'))
//     console.log('data', data)
// }



const username = ref('admin')
const password = ref('123456')
const requestData = {
    username: username.value,
    password: password.value
}

// const data = await useFetch('/login', {
//     method: "post",
//     body: requestData,
// })
// console.log('data', data)

const handleToLogin = async () => {
    const loginRes = await $api('/login', {
        method: "post",
        body: requestData,
    })//
    console.log('loginRes', loginRes)
    if (loginRes.code === '0') {
        const token = loginRes.data.token
        $fetch('/api/auth?t=' + token)
    }

    // try {
    //     const loginRes = await $api.user.login(requestData)
    //     if (loginRes.code === '0') {
    //         setupAuthToken(true)
    //         alert(loginRes.msg + loginRes.data.token)
    //     }
    // } catch (err) {
    // }
}
</script>

<style lang="scss" scoped></style>