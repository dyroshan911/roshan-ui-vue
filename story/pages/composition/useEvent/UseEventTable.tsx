import { designComponent } from 'src/use/designComponent';
import { AppNavigator } from 'story/components/navigator/app-navigator';
import { UseEventTableHeader } from './UseEventTableHeader';

export const UseEventTable = designComponent({
  name: 'use-event-table',
  components: {
    UseEventTableHeader,
  },
  setup({ setupContext }) {
    const { slots } = setupContext;
    return {
      render: () => (
        <div>
          <use-event-table-header>
            {slots.header ? slots.header() : 'h'}
          </use-event-table-header>
          <div>{slots.body ? slots.body() : 'b'}</div>
        </div>
      ),
    };
  },
});
