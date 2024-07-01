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

    return {
        username,
        setUsername,
        isLogined,
        setupAuthToken
    }
}, {
    persist: {
        storage: persistedState.cookiesWithOptions({
            // httpOnly: true,
            maxAge: 60 * 60 * 20
        }),
    }
})