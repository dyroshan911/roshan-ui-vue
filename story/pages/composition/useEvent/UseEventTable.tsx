import { designComponent } from 'src/use/designComponent';
import { AppNavigator } from 'story/components/navigator/app-navigator';
import { UseEventTableHeader } from './UseEventTableHeader';
import { UseEventTableBody } from './UseEventTableBody';
import { reactive } from 'vue';

export enum TablePart {
  head,
  body,
}

export const UseEventTable = designComponent({
  name: 'use-event-table',
  provideRefer: true,
  emits: {
    scroll: (e: Event, part: TablePart) => true,
  },
  components: {
    UseEventTableHeader,
    UseEventTableBody,
  },
  setup({ setupContext, event }) {
    const state = reactive({ hoverPart: null as null | TablePart });
    const { slots } = setupContext;
    return {
      refer: {
        state,
        event,
      },
      render: () => (
        <div class='use-event-table'>
          <use-event-table-header>
            {slots.header ? slots.header() : ''}
          </use-event-table-header>
          <use-event-table-body>
            {slots.body ? slots.body() : ''}
          </use-event-table-body>
        </div>
      ),
    };
  },
});
