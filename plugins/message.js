export default defineNuxtPlugin((nuxtApp) => {
  const toast = useToast();

  const message = (severity, msg, cb, life) => {
    toast.add({
      severity,
      summary: "Notification",
      detail: msg,
      life: life || 3000,
    });
    if (cb) setTimeout(() => cb(), life || 3000);
  };
  return {
    provide: {
      message,
    },
  };
});
