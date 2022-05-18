import {
  ComponentPropsOptions,
  defineComponent,
  ExtractPropTypes,
  getCurrentInstance,
  provide,
  inject,
  SetupContext,
} from 'vue';

export function designComponent<
  PropsOptions extends Readonly<ComponentPropsOptions>,
  Props extends Readonly<ExtractPropTypes<PropsOptions>>,
  Refer
>(componentOptions: {
  name?: string;
  provideRefer?: boolean;
  props?: PropsOptions;
  setup?: (
    props: Props,
    setupContext: SetupContext
  ) => {
    refer?: Refer;
    render?: () => any;
  };
}) {
  const { setup: _setup, provideRefer, ...leftOptions } = componentOptions;
  return {
    ...defineComponent({
      setup(props: Props, context: SetupContext) {
        if (!_setup) {
          return null;
        }
        const { refer, render } = _setup(props, context);
        const ctx = getCurrentInstance();
        if (!!refer) {
          const duplicateKeys = Object.keys(leftOptions.props || {}).find(
            (prop) => prop === '$$refer'
          );
          if (!!duplicateKeys) {
            console.error(`designComponent: duplicate key $$refer in props`);
          } else {
            // ctx!.proxy.$$refer = refer;
            Object.assign(ctx!.proxy, { $$refer: refer });
          }
        }
        if (provideRefer) {
          if (!leftOptions.name) {
            console.error(
              'designComponent: name is required when provideRefer is true!'
            );
          } else {
            provide(`@@${leftOptions.name}`, refer!);
          }
        }
        return render;
      },
      ...leftOptions,
    } as any),
    use: {
      ref: (refName: string) => {
        const ctx = getCurrentInstance();
        console.log(ctx);

        return {
          get value(): Refer {
            return (ctx!.refs[refName] as any).$$refer;
          },
        };
      },
      inject: (defaultValue?: Refer): Refer => {
        return inject<Refer>(`@@${leftOptions.name}`, defaultValue!);
      },
    },
  };
}
