export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
  //   console.error('error123');
  // };

    // 也可以这样
    nuxtApp.hook('vue:error', (error, instance, info) => {
      console.error('error123 -nuxtApp.hook');
    })
});
