import { defineStore } from "pinia";
import { ref } from "vue";


export const useStateStore = defineStore('state', () => {
    const username = ref('')
    const setUsername = (name: string) => {
        username.value = name
    }

    const authToken = ref('')
    const setupAuthToken = (token: string) => {
        authToken.value = token
    }
    return {
        username,
        setUsername,
        authToken,
        setupAuthToken
    }
}, {
    persist: true 
})