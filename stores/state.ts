import { defineStore } from "pinia";
import { ref } from "vue";


export const useStateStore = defineStore('state', () => {
    const username = ref('')
    const setUsername = (name: string) => {
        username.value = name
    }

    const isLogined = ref(false)
    const setupAuthToken = (value: boolean) => {
        isLogined.value = value
    }
    const resetAuthToken = (value: boolean) => { 
        isLogined.value = false
    }

    return {
        username,
        setUsername,
        isLogined,
        setupAuthToken,
        resetAuthToken
    }
}, {
    persist: {
        storage: persistedState.cookiesWithOptions({
            // httpOnly: true,
            maxAge: 60 * 60
        }),
    }
})