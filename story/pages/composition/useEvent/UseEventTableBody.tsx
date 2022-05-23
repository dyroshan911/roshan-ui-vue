import { designComponent } from 'src/use/designComponent';

export const UseEventTableBody = designComponent({
  name: 'use-event-table-body',
  setup: ({ setupContext }) => {
    const { slots } = setupContext;
    return {
      render: () => <div class='use-table-body'>{slots.default!()}</div>,
    };
  },
});
