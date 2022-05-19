import { SimpleFunction } from './../shims';
import { kebabCase } from './../utils/kebabCase';
import { createRsEvent } from 'src/plugins/Event';
import { getCurrentInstance } from 'vue';
function emitName2ListenName(emitName: string): string {
  const match = emitName.match(/update([A-Z])(.*)/);
  if (match) {
    return `update:${match[1].toLowerCase()}${match[2]}`;
  }
  return kebabCase(emitName)!;
}

export function getComponentEmit<T extends { [key: string | symbol]: any }>(
  emitObj: T
): T {
  return {
    change: null,
    ...Object.keys(emitObj || {}).reduce((ret: any, key: string) => {
      ret[emitName2ListenName(key)] = emitObj[key];
      return ret;
    }, {} as T),
  };
}

type EventHandler<EmitsValue> = EmitsValue extends (...args: any[]) => any
  ? Parameters<EmitsValue>
  : never;

export type ComponentEvent<Emit> = {
  emit: { [key in keyof Emit]: (...args: EventHandler<Emit[key]>) => void };
  on: {
    [key in keyof Emit]: (
      cb: (...args: EventHandler<Emit[key]>) => void
    ) => void;
  };
  once: {
    [key in keyof Emit]: (
      cb: (...args: EventHandler<Emit[key]>) => void
    ) => void;
  };
  off: {
    [key in keyof Emit]: (
      cb: (...args: EventHandler<Emit[key]>) => void
    ) => void;
  };
};

export function useEvent<T>(emitObj: T): ComponentEvent<T> {
  const ctx = getCurrentInstance()!;
  const events = createRsEvent();

  const emit = {} as any;
  const on = {} as any;
  const off = {} as any;
  const once = {} as any;

  Object.keys(emitObj || {}).forEach((key) => {
    const eventKebabCaseName = emitName2ListenName(key);
    emit[key] = (...args: any[]) => {
      ctx.emit(eventKebabCaseName, ...args);
      events.emit(eventKebabCaseName, ...args);
      if (key === 'updateModalValue') {
        ctx.emit('chage', ...args);
        events.emit('chage', ...args);
      }
    };
    on[key] = (fn: SimpleFunction) => events.on(eventKebabCaseName, fn);
    once[key] = (fn: SimpleFunction) => events.once(eventKebabCaseName, fn);
    off[key] = (fn: SimpleFunction) => events.off(eventKebabCaseName, fn);
  });
  return {
    emit,
    on,
    off,
    once,
  };
}
