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
        <div>===========================</div>
        <h2>服务端获取数据</h2>
        <p>服务端数据获取展示: name: {{ serverData.username }} | age: {{ serverData.age }}</p>
        <div>===========================</div>
        <h2>服务端获取数据: transfrom筛选数据</h2>
        <p>name: {{ userName }}</p>
        <div>
            <input type="text" v-model="username" placeholder="username">
        </div>
        <div>
            <input type="password" v-model="password" placeholder="password">
        </div>
        <button @click="handleToLogin">客户端调用$fetch去登录</button>
        <div>===================================</div>
        <button @click="getUserInfo">登录获取到token, 用token去获取userInfo</button>

        <div>
            <NuxtLink to="/api">Back</NuxtLink>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'custom',
    layoutTransition: {
        name: 'slide-in'
    }
})



// const nuxtApp = useNuxtApp()

// const headers = useRequestHeaders(['cookie'])
// console.log('headers', headers)

const { $api, $useFetch } = useNuxtApp()
const { setupAuthToken } = useStateStore()
const { data: userData } = await useAsyncData('user', () => $fetch('/api/user'))
// $fetch单独使用, 一共执行2次, 会在服务端执行一次, 在客户端也会执行一次
// const resD = await $fetch('/api/user')
// console.log('resD', resD)

const clientData = ref({})
const getDataFromClient = async () => {
    const resData = await $api.user.getUserInfo()
    console.log('resData--from--client--$fetch', resData)
    if (resData.code === '0') {
        clientData.value = resData.data.userInfo
    }
}

const serverData = ref({})
const getDataFromServerByFetch = async () => {
    const { data: resData } = await $api.user.getUserInfo2()
    console.log('resData--from--server--$fetch111', resData)
    // if (resData.code === '0') {
    //     serverData.value = resData.data.userInfo
    // }
}
getDataFromServerByFetch()


const userName = ref('')
const getDataFromServerByUseFetch = async () => {
    const { data: username } = await $useFetch.user.getUserInfo()
    console.log('resData--from--server--$useFetch--transform筛选数据返回, 减少有效负载', username)
    userName.value = username
}
// getDataFromServerByUseFetch()

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


const getUserInfo = async () => {
    try {
        const userInfoRes = await $api.user.getUserInfo()
        console.log('userInfoRes', userInfoRes)
        if (userInfoRes.code === '0') {
            alert(userInfoRes.data.userInfo.username)
        }
        else {
            const cookie = useCookies();
            cookie.deleteCookie("state")
            alert('token 失效', cookie.value)
        }
    } catch (err) {
    }
}

// 总结
// 客户端请求数据就用$fetch
// 服务端请求数据就用useFetch或者useAsyncData+$fetch组合, 这两个仅会在服务端执行, 不会在客户端执行



</script>

<style lang="scss" scoped></style>