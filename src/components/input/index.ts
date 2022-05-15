import { installPlugins } from 'src/utils/installPlugins';
import { App } from 'vue';
import Input from './inputs';

// export default installPlugins(Input);
export default {
  ...Input,
  install(app: App) {
    app.component(Input.name, Input);
  },
};
