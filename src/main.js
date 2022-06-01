import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import { store } from "./store/index";
import "./assets/scss/_index.scss";
import naver from "vue3-naver-maps";

const app = createApp(App);

app.use(naver, { clientId: "jnpe3fnq71" });
app.use(router);
app.use(store);

app.mount("#app");
