<template>
    <div>
        <h1>Prime vue ui</h1>
        <NuxtLink to="/">Back to home page</NuxtLink>
        <div class="card flex justify-center">
            <Prime-Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City"
                class="w-full md:w-56" />
            <Prime-Button type="button" label="Search" class="bg-green-500 ml-3 mr-4" severity="success"
                icon="pi pi-search" :loading="loading" @click="load" />

            <Prime-Button type="button" label="切换黑色主题" class="flex-shrink bg-yellow-800 mr-4" severity="success"
                icon="pi pi-search" @click="toggleDarkMode" />

            <Prime-Button label="Warn" severity="warn" rounded />

            <h2 class="bg-blue-500 text-center flex items-center p-2 border-r-teal-200 ml-2">hello</h2>
        </div>
    </div>
</template>

<script setup>

import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

const toggleDarkMode = () => {
    const element = document.querySelector('html');
    element.classList.toggle('my-app-dark');
}


</script>

<style lang="scss" scoped></style>