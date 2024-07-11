import { defineStore } from "pinia";
import { ref } from "vue";

export const useStateStore = defineStore(
  "state",
  () => {
    const username = ref("");
    const setUsername = (name) => {
      username.value = name;
    };

    return {
      username,
      setUsername,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
    // persist: {
    //     storage: persistedState.cookiesWithOptions({
    //         maxAge: 60 * 60
    //     }),
    // }
  }
);
