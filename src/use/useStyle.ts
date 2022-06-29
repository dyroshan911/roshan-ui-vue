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

const USE_STYLE_PROVIDER = '@@USE_STYLE_PROVIDER';

// export const useStyle =
