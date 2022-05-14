import {
  ComponentPropsOptions,
  defineComponent,
  ExtractPropTypes,
  getCurrentInstance,
  SetupContext,
} from 'vue';

export function designComponent<
  PropsOptions extends Readonly<ComponentPropsOptions>,
  Props extends Readonly<ExtractPropTypes<PropsOptions>>,
  Refer
>(componentOptions: {
  name?: string;
  props?: PropsOptions;
  setup?: (
    props?: Props,
    setupContext?: SetupContext
  ) => {
    refer?: Refer;
    render?: () => any;
  };
}) {
  const { setup: _setup, ...leftOptions } = componentOptions;
  return {
    ...defineComponent({
      setup(props: Props, context: SetupContext) {
        if (!_setup) {
          return null;
        }
        const { refer, render } = _setup(props, context);
        const ctx = getCurrentInstance() as any;
        ctx._refer = refer;
        return render;
      },
      ...leftOptions,
    } as any),
    use: {
      ref: (refName: string) => {
        const ctx = getCurrentInstance() as any;
        return {
          get value(): Refer {
            return ctx.ctx.$refs[refName].$._refer;
          },
        };
      },
    },
  };
}
