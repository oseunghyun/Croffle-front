import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
// import store from './store';
import "./assets/scss/_index.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
