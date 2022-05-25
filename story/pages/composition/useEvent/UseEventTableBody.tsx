import { designComponent } from 'src/use/designComponent';
import { onUnmounted } from 'vue';
import { ref } from 'vue';
import { TablePart, UseEventTable } from './UseEventTable';
export const UseEventTableBody = designComponent({
  name: 'use-event-table-body',
  setup: ({ setupContext }) => {
    const table = UseEventTable.use.inject();
    const bodyElmRef = ref<HTMLDivElement | null>(null);
    const { slots } = setupContext;
    const handler = {
      scroll: (e: Event) => {
        // console.log(e);
        table.event.emit.scroll(e, TablePart.body);
      },
      tableScroll: (e: Event, part: TablePart) => {
        if (part === TablePart.head) {
          bodyElmRef.value!.scrollLeft = (
            e.target as HTMLDivElement
          ).scrollLeft;
        }
      },
    };
    onUnmounted(table.event.on.scroll(handler.tableScroll));
    return {
      render: () => (
        <div ref={bodyElmRef} onScroll={handler.scroll} class='use-table-body'>
          {slots.default!()}
        </div>
      ),
    };
  },
});
