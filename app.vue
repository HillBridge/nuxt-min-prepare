<template>
    <div>
        <NuxtLayout>
            <div>
                <PrimeConfirmDialog group="templating">
                    <template #message="slotProps">
                        <div
                            class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
                            <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
                            <p>{{ slotProps.message.message }}</p>
                        </div>
                    </template>
                </PrimeConfirmDialog>
                <NuxtLoadingIndicator color="red" />
                <NuxtPage />
                <PrimeToast position="top-center" />
            </div>

        </NuxtLayout>
    </div>
</template>
<script setup>
import 'primeicons/primeicons.css'
// 程序最早执行的组件
// 可以在浏览器每次刷新的时候重新从后台获取数据(敏感数据并不本地化)
console.log('app.vue')
const { initCommonStore } = useCommonStore()
await callOnce(initCommonStore)

</script>
<style>
html {
    font-size: 14px;
}

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