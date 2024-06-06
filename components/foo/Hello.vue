<template>
    <div class="hello-foo-container">
        <h1>{{ title }}</h1>
        <img src="~/assets/tom.jpg" width="50">
    </div>
</template>

<script setup>
const title = 'Hello Foo Component'

</script>

<style lang="scss" scoped>
.hello-foo-container {
    background-color: burlywood
}
</style>