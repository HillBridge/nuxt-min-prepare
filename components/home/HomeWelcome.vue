<template>
    <div class="welcome-container">
        <h1>{{ title }}</h1>
        <p>{{ msg }}</p>
    </div>
</template>

<script setup>
const msg = ref('welcome to nuxt project')
const title = 'Welcome Component'

</script>

<style lang="scss" scoped>
.welcome-container {
    background-color: yellow
}
</style>