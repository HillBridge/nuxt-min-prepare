import { defineStore } from "pinia";
export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      commonState: {},
    };
  },
  actions: {
    async initCommonStore() {
      const { $api } = useNuxtApp();
      try {
        const { data: commonRes } = await useAsyncData("userInfo", () =>
          $api("/userInfo")
        );
        if (commonRes.value.code === "0") {
          this.commonState = commonRes.value.data.userInfo;
        }
      } catch (err) {}
    },
  },
  persist: false,
});
