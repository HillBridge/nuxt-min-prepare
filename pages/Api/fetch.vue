<template>
    <div>
        <h1>调用server中自定义的接口获取数据: useAsyncData+$fetch</h1>
        <div v-for="item in userData" :key="item.age">
            <span style="margin-right: 20px;">{{ item.name }}</span>
            <span>{{ item.age }}</span>
        </div>
        <h2>客户端获取数据</h2>
        <button @click="getDataFromClient">客户端获取数据</button>
        <p>客户端数据获取展示: name: {{ clientData.username }} | age: {{ clientData.age }}</p>
        <div>
            <input type="text" v-model="username" placeholder="username">
        </div>
        <div>
            <input type="password" v-model="password" placeholder="password">
        </div>
        <p>当前token: {{ authToken }}</p>
        <button @click="handleLogin">客户端调用$fetch去登录</button>
        <div>===================================</div>
        <button @click="getUserInfo">登录获取到token, 用token去获取userInfo</button>

        <div>
            <NuxtLink to="/api">Back</NuxtLink>
        </div>
    </div>
</template>

<script setup>
// import Cookies from 'universal-cookie';

// const nuxtApp = useNuxtApp()
// console.log('从nuxtApp中获取username', nuxtApp.$t)

const { $clientFetch, $t } = useNuxtApp()
const { setupAuthToken, authToken } = useStateStore()
const { data: userData } = await useAsyncData('user', () => $fetch('/api/user'))
// $fetch单独使用, 一共执行2次, 会在服务端执行一次, 在客户端也会执行一次
// const resD = await $fetch('/api/user')
// console.log('resD', resD)

const clientData = ref({})
const getDataFromClient = async () => {
    console.log('authToken', $t)
    const { data: resData } = await useFetch('http://localhost:3003/userInfo')
    // console.log('resData', resData.value)
    if (resData.value.code === '0') {
        clientData.value = resData.value.data.userInfo
    }
}

getDataFromClient()

const username = ref('admin')
const password = ref('123456')

const handleLogin = async () => {
    const requestData = {
        username: username.value,
        password: password.value
    }
    try {
        const loginRes = await $clientFetch.user.login(requestData)
        if (loginRes.code === '0') {
            setupAuthToken(loginRes.data.token)
            alert(loginRes.msg + loginRes.data.token)
        }
    } catch (err) {
    }
}


const getUserInfo = async () => {
    try {
        const userInfoRes = await $clientFetch.user.getUserInfo()
        console.log('userInfoRes', userInfoRes)
        if (userInfoRes.code === '0') {
            alert(userInfoRes.data.userInfo.username)
        }
    } catch (err) {
    }
}

// 总结
// 客户端请求数据就用$fetch
// 服务端请求数据就用useFetch或者useAsyncData+$fetch组合, 这两个仅会在服务端执行, 不会在客户端执行



</script>

<style lang="scss" scoped></style>