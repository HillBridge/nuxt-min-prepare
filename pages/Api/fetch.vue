<template>
    <div>
        <h1>调用server中自定义的接口获取数据: useAsyncData+$fetch</h1>
        <div v-for="item in userData" :key="item.age">
            <span style="margin-right: 20px;">{{ item.name }}</span>
            <span>{{ item.age }}</span>
        </div>

        <div>
            <NuxtLink to="/api">Back</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { data: userData } = await useAsyncData('user', () => $fetch('/api/user'))


</script>

<style lang="scss" scoped></style>