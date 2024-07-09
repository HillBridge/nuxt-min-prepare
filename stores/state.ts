import { defineStore } from "pinia";
import { ref } from "vue";


export const useStateStore = defineStore('state', () => {
    const username = ref('')
    const setUsername = (name: string) => {
        username.value = name
    }

    return {
        username,
        setUsername,
    }
}, {
    persist: {
        storage: persistedState.cookiesWithOptions({
            // httpOnly: true,
            maxAge: 60 * 60
        }),
    }
})