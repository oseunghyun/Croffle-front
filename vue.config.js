const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // scss 변수를 전역으로 등록
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
  // CORS 에러 해결을 위한 프록시 설정
  devServer: {
    proxy: {
      // "/api": {
      //   target: "192.168.0.17:8080/",
      //   changeOrigin: true,
      // },
      "/v1": {
        target: "https://openapi.naver.com/",
        changeOrigin: true,
      },
      "/v2": {
        target: "https://api.ipify.org?format=json/",
        changeOrigin: true,
      },
      "/v3": {
        target: "https://geolocation.apigw.ntruss.com",
        changeOrigin: true,
      },
      "/v4": {
        target: "https://openapi.naver.com/v1/nid/me",
        changeOrigin: true,
      },
    },
  },
});
