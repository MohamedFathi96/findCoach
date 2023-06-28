import { createApp } from "vue";
import "./assets/tailwind.css";
import router from "./router";
import store from "./store/store.js";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseButton from "./components/ui/BaseButton.vue";

import App from "./App.vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);

app.use(router);
app.use(store);
app.mount("#app");
