import App from "./app.vue";
import { createApp } from "vue";
import RsComponent from 'src';

const app = createApp(App);
app.use(RsComponent);
app.mount("#app");
