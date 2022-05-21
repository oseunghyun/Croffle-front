import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import { store } from "./store/index";
import "./assets/scss/_index.scss";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
