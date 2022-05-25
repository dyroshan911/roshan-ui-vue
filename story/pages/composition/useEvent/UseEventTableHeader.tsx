import { designComponent } from 'src/use/designComponent';
import { onUnmounted } from 'vue';
import { ref } from 'vue';
import { TablePart, UseEventTable } from './UseEventTable';

export const UseEventTableHeader = designComponent({
  name: 'use-event-table-header',
  setup: ({ setupContext }) => {
    const { slots } = setupContext;
    const headerElmRef = ref<HTMLDivElement | null>(null);
    const table = UseEventTable.use.inject();
    const handler = {
      tableScroll: (e: Event, part: TablePart) => {
        if (part === TablePart.body) {
          headerElmRef.value!.scrollLeft = (
            e.target as HTMLDivElement
          ).scrollLeft;
        }
        console.log((e.target as HTMLDivElement).scrollLeft);
      },
      scroll: (e: Event) => {
        // console.log(e);
        table.event.emit.scroll(e, TablePart.head);
      },
    };
    onUnmounted(table.event.on.scroll(handler.tableScroll));
    return {
      render: () => (
        <div
          ref={headerElmRef}
          onScroll={handler.scroll}
          class='use-table-head'
        >
          {slots.default ? slots.default() : ''}
        </div>
      ),
    };
  },
});
