import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import { store } from "./store/index";
import "./assets/scss/_index.scss";
import naver from "vue3-naver-maps";

const app = createApp(App);

// vue3-naver-maps 라이브러리
// 서브모듈: geocoder 여기에 추가 한다
app.use(naver, { clientId: "jnpe3fnq71", subModules: "geocoder" });
app.use(router);
app.use(store);

app.mount("#app");
