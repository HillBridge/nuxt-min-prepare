<template>
    <div>
        <NuxtLayout>
            <div>
                <NuxtLoadingIndicator color="red" />
                <NuxtPage />
            </div>

        </NuxtLayout>
    </div>
</template>
<script setup>
const { setUsername, authToken } = useStateStore()
// 程序最早执行的组件
console.log('app vue')

try {
    // useFetch 服务端渲染
    const { data } = await useFetch('http://localhost:3003/userInfo')
    if (data.value.code === '0') {
        // setUsername(data.value.data.userInfo.username)
        useToken(data.value.data.userInfo.love)
    }
}
catch (err) {
    console.log('err', err)
}


onMounted(() => {
    setTimeout(() => {
        // 适合通过接口获取的全局公共使用的数据, 刷新通过接口重新获取值
        // 不适合token的存储, 一刷新就失效, token需要有一个持久化存储的地方
        // 登录成功后将token存起来, 然后每次刷新的时候通过refresh刷新token的接口重新获取token,并赋值进行存储
        // refresh token接口相当于帮助前端持久化存储token
        // 再进一步, 所有的前端需要持久化缓存的token, 全局共享数据等,都可以让后台出一个接口帮忙存储, 不刷新浏览器可以存储在useState或pinia中, 刷新浏览器就重新获
        // useToken('abcd')
    }, 1000)
})
</script>
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
    transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
    filter: grayscale(1);
}
</style>