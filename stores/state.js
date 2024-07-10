import { defineStore } from "pinia";
import { ref } from "vue";

export const useStateStore = defineStore(
  "state",
  () => {
    const { $api } = useNuxtApp();
    const username = ref("");
    const setUsername = (name) => {
      username.value = name;
    };

    const initUserStoreData = async () => {
      try {
        const { data: userRes } = await useAsyncData("userInfo", () =>
          $api("/userInfo")
        );
        if (userRes.value.code === "0") {
          setUsername(userRes.value.data.userInfo.age);
        }
      } catch (err) {}
    };

    return {
      username,
      setUsername,
      initUserStoreData,
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
