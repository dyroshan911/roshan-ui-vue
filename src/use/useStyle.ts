import { getCurrentInstance, inject, computed, provide } from 'vue';
export enum StyleShape {
  fillet = 'fillet',
  round = 'round',
  square = 'square',
}

export enum StyleSize {
  normal = 'normal',
  large = 'large',
  mini = 'mini',
}

export enum StyleStatus {
  primary = 'primary',
  success = 'success',
  error = 'error',
  warn = 'warn',
  info = 'info',
}

export const StyleProps = {
  shape: { type: String },
  size: { type: String },
  status: { type: String },
};
interface UseStyleProvideData {
  shape: StyleShape;
  size: StyleSize;
  status?: StyleStatus;
}

interface UseStyleOption {
  shape?: StyleShape;
  size?: StyleSize;
  status?: StyleStatus;
  adjust?: (data: UseStyleProvideData) => void | UseStyleProvideData;
}

const USE_STYLE_PROVIDER = '@@USE_STYLE_PROVIDER';

export const useStyle = (
  option: UseStyleOption = {}
): { styledComponent: { value: UseStyleProvideData } } => {
  const ctx = getCurrentInstance() as any;
  const parent = inject(USE_STYLE_PROVIDER, null) as null | {
    value: UseStyleProvideData;
  };
  const defaultData = Object.assign(
    { shape: StyleShape.fillet, size: StyleSize.normal },
    option
  );

  const styleComputed = computed(() => {
    const { shape, size, status } = ctx.props;
    const parentData = !!parent ? parent.value : ({} as any);
    let data: UseStyleProvideData = {
      shape: shape || parentData.shape || defaultData.shape,
      size: size || parentData.size || defaultData.size,
      status: status || parentData.status || defaultData.status,
    };
    if (!!defaultData.adjust) {
      data = defaultData.adjust(data) || data;
    }
    return data;
  });

  provide(USE_STYLE_PROVIDER, styleComputed);
  return ctx;
};
