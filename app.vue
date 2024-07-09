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
// 程序最早执行的组件
console.log('app vue')
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