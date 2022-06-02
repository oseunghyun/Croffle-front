const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      "/v1": {
        target: "https://openapi.naver.com/",
        changeOrigin: true,
      },
      // "/": {
      //   target: "http://34.64.32.174:8080/",
      //   changeOrigin: true,
      // },
    },
  },
});
