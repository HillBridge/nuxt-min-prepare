<template>
    <div>
        <h1>xxx</h1>
        <p>{{ group }} - {{ id }}</p>
        <div>
            <NuxtLink to="/route">Back to route !</NuxtLink>
        </div>
    </div>

</template>
<script setup>
const route = useRoute()
const { group, id } = route.params
</script>