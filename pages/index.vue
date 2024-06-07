<template>
    <div class="home-wrap">
        <Header />
        <h1>Home Page</h1>
        <HomeWelcome />
        <NuxtLink to="/foo">Go to foo page</NuxtLink>
        <p></p>
        <NuxtLink to="/route">Go to route page</NuxtLink>
        <Footer />
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.home-wrap {
    text-align: center;

    h1 {
        color: blue;
    }
}
</style>