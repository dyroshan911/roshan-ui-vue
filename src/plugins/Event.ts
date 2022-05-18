export type RsEvent = ReturnType<typeof createRsEvent>;
type EventName = string | symbol;
type EventHander = (...arg: any[]) => any;
export function createRsEvent() {
  const getListenerStore = (() => {
    let events: Map<EventName, EventHander[]>;
    return () => events || (events = new Map<EventName, EventHander[]>());
  })();
  const event = {
    on: (name: EventName, fn: EventHander) => {
      return;
    },
  };
  return event;
}
