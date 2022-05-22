import { designComponent } from 'src/use/designComponent';

export const UseEventTableHeader = designComponent({
  name: 'use-event-table-header',
  setup: ({ setupContext }) => {
    const { slots } = setupContext;
    return {
      render: () => <div>{slots.default ? slots.default() : 'ddddd'}</div>,
    };
  },
});
