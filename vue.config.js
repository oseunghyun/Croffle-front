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
    },
  },
});
