import { designComponent } from 'src/use/designComponent';

export const UseEventTableHeader = designComponent({
  name: 'use-event-table-header',
  setup: ({ setupContext }) => {
    const { slots } = setupContext;
    return {
      render: () => (
        <div class='use-table-head'>{slots.default ? slots.default() : ''}</div>
      ),
    };
  },
});
