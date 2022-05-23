import { designComponent } from 'src/use/designComponent';
import { AppNavigator } from 'story/components/navigator/app-navigator';
import { UseEventTableHeader } from './UseEventTableHeader';
import { UseEventTableBody } from './UseEventTableBody';

export const UseEventTable = designComponent({
  name: 'use-event-table',
  components: {
    UseEventTableHeader,
    UseEventTableBody,
  },
  setup({ setupContext }) {
    const { slots } = setupContext;
    return {
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
