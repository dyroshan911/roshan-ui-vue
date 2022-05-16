import { App } from 'vue';
import Button from './components/button';
import Input from './components/input';

const plugins = [Input, Button];

function install(app: App) {
  plugins.forEach(app.use);
}

export default {
  install,
};

export { Input, Button, install };
