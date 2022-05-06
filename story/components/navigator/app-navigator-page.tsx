import { DefineComponent, defineComponent, markRaw, reactive, watch } from "vue";
import { injectAppNavigator } from "./app-navigator";

export const AppNavigatorPage = defineComponent({
  name: "app-navigator-page",
  setup() {
    const state = reactive<{ PageComponent: null | DefineComponent }>({
      PageComponent: null,
    });
    const navigator = injectAppNavigator();
    const utils = {
      reload: async () => {
        let { path } = navigator.state.route;
        if (!path) return;
        if (path.charAt(0) === "/") {
          path = path.slice(1);
        }
        const Component = (await import("story/pages/" + path)).default;
        state.PageComponent = markRaw(Component);
      },
    };
    watch(() => navigator.state.route.path, utils.reload, { immediate: true });
    return () => {
      const { PageComponent } = state;
      return <div class="app-navigator-page">{!!PageComponent ? <PageComponent /> : null}</div>;
    };
  },
});
