import { SimpleFunction } from './../shims';
export type RsEvent = ReturnType<typeof createRsEvent>;
type EventName = string | symbol;
type EventHandler = SimpleFunction & { fn?: SimpleFunction };

export function createRsEvent() {
  const getListenerStore = (() => {
    let events: Map<EventName, Set<EventHandler>>;
    return () => events || (events = new Map<EventName, Set<EventHandler>>());
  })();
  const event = {
    on: (name: EventName, fn: EventHandler) => {
      const events = getListenerStore();
      const handlersSet = events.get(name);
      if (!handlersSet) {
        events.set(name, new Set([fn]));
      } else {
        handlersSet.add(fn);
      }
      return () => event.off(name, fn);
    },
    emit: (name: EventName, ...args: any[]) => {
      const events = getListenerStore();
      const handlersSet = events.get(name);
      handlersSet?.forEach((hander) => hander(...args));
    },
    once: (name: EventName, fn: EventHandler) => {
      const handler = (...args: any[]) => {
        event.off(name, handler);
        return fn(...args);
      };
      return event.on(name, handler);
    },
    off: (name: EventName, fn?: EventHandler) => {
      const events = getListenerStore();
      const handlersSet = events.get(name);
      if (!handlersSet) return;

      /** 移除eventname 下的所有handler */
      if (!fn) {
        events.set(name, new Set([]));
        return;
      }
      handlersSet.delete(fn);
    },
  };
  return event;
}
