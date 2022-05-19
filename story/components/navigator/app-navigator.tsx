import { designComponent } from 'src/use/designComponent';
import {
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  provide,
  reactive,
} from 'vue';

interface Route {
  path?: string;
  hash?: string;
  params?: { [key: string]: string };
}
function getRoute(): Route {
  let locationHash = window.location.hash || '';
  if (locationHash.charAt(0) === '#') {
    locationHash = locationHash.slice(1);
  }
  const [path, hash] = decodeURIComponent(locationHash).split('#');
  return { path, hash };
}

// const APP_NAVIGATOR_PROVIDER = '@@app-navigator';

function useAppNavigator(props: { defaultPath?: string }) {
  // const ctx = getCurrentInstance();
  const currentRoute = getRoute();
  !currentRoute.path && (currentRoute.path = props.defaultPath);
  window.location.hash = encodeURIComponent(currentRoute.path!);

  const state = reactive({ route: currentRoute });
  const methods = {
    go(path: string) {
      window.location.hash = encodeURIComponent(path);
    },
  };
  const handler = {
    hashchange: () => {
      state.route = getRoute();
    },
  };
  window.addEventListener('hashchange', handler.hashchange);
  onBeforeUnmount(() =>
    window.removeEventListener('hashchange', handler.hashchange)
  );
  const refer = {
    state,
    methods,
  };
  // (ctx as any)._refer = refer;
  // provide(APP_NAVIGATOR_PROVIDER, refer);
  return refer;
}

// export function injectAppNavigator() {
//   return inject(APP_NAVIGATOR_PROVIDER) as ReturnType<typeof useAppNavigator>;
// }

export const AppNavigator = designComponent({
  name: 'app-navigator',
  props: {
    defaultPath: String,
  },
  provideRefer: true,
  setup({ props, setupContext }) {
    const refer = useAppNavigator(props!);
    return {
      render() {
        return !!setupContext!.slots.default
          ? setupContext!.slots.default()
          : null;
      },
      refer,
    };
  },
});
