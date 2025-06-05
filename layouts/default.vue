<template>
    <div>
        <p style="height: 30px;line-height: 30px;background-color: orange;">默认布局</p>
        <PrimeToast />
        <slot />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';

const toast = useToast();
</script>
