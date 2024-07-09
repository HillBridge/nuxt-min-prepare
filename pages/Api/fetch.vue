<template>
    <div>
        <h1>调用server中自定义的接口获取数据: useAsyncData+$fetch</h1>
        <h2>客户端获取数据</h2>
        <button @click="getDataFromClient">客户端获取数据</button>
        <p>客户端数据获取展示: name: {{ clientData.username }} | age: {{ clientData.age }}</p>
        <h2>服务端获取数据</h2>
        <p>服务端渲染数据: name: {{ serverData.username }} , age: {{ serverData.age }}, love: {{ serverData.love }}</p>
        <div>
            <NuxtLink to="/api">Back</NuxtLink>
        </div>
    </div>
</template>

<script setup>
// definePageMeta({
//     layout: 'custom',
//     layoutTransition: {
//         name: 'slide-in'
//     }
// })
const { $api } = useNuxtApp()
const serverData = ref({})
try {
    const { data } = await useAsyncData('userInfo', () => $api('/userInfo'))
    if (data.value.code === '0') {
        serverData.value = data.value.data.userInfo
    }
} catch (err) {
    console.log('userInfo-data', err)
}

const clientData = ref({})
const getDataFromClient = async () => {
    const resData = await $api('/userInfo')
    console.log('userInfo-data-client', resData)
    if (resData.code === '0') {
        clientData.value = resData.data.userInfo
    }
}



// 总结
// 客户端请求数据就用$fetch
// 服务端请求数据就用useFetch或者useAsyncData+$fetch组合, 这两个仅会在服务端执行, 不会在客户端执行
</script>

<style lang="scss" scoped></style>