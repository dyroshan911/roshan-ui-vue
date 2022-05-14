import { App } from 'vue';
import Input from './inputs';

export default {
  ...Input,
  install(app: App) {
    app.component(Input.name, Input);
  },
};
