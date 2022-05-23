import {
  ComponentPropsOptions,
  defineComponent,
  ExtractPropTypes,
  getCurrentInstance,
  provide,
  inject,
  SetupContext,
} from 'vue';
import { ComponentEvent, getComponentEmit, useEvent } from './useEvent';

export function designComponent<
  PropsOptions extends Readonly<ComponentPropsOptions>,
  Props extends Readonly<ExtractPropTypes<PropsOptions>>,
  Emits extends { [k: string]: (...args: any[]) => boolean },
  Refer
>(componentOptions: {
  name?: string;
  provideRefer?: boolean;
  props?: PropsOptions;
  emits?: Emits;
  components?: any;
  setup: (props: {
    props: Props;
    event: ComponentEvent<Emits>;
    setupContext: SetupContext<Emits>;
  }) => {
    refer?: Refer;
    render?: () => any;
  };
}) {
  const {
    setup: _setup,
    provideRefer,
    emits,
    ...leftOptions
  } = componentOptions;
  return {
    ...defineComponent({
      emits: getComponentEmit(emits!),
      setup(props: Props, setupContext: SetupContext<Emits>) {
        if (!_setup) {
          return null;
        }
        const ctx = getCurrentInstance();
        const event = useEvent<Emits>(emits!);
        const { refer, render } = _setup({ props, event, setupContext });

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
        const ctx = getCurrentInstance() as any;
        return {
          get value(): Refer {
            return (ctx.refs[refName] && ctx.refs[refName].$$refer) || null;
          },
        };
      },
      inject: (defaultValue?: Refer): Refer => {
        return inject<Refer>(`@@${leftOptions.name}`, defaultValue!);
      },
    },
  };
}
