import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./vuetify";
import router from "./router";
import store from "./store";
import "@/styles/app.scss";

createApp(App).use(vuetify).use(store).use(router).mount("#app");
