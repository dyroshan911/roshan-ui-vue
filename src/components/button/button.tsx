import { designComponent } from '../../use/designComponent';
import { computed } from 'vue';
import './button.scss';
console.log('加载了button 组件');

export default designComponent({
  name: 'rs-button',
  props: {
    label: {
      type: String,
    },
    status: { type: String, default: 'primary' },
  },
  emits: {
    click: (e: MouseEvent) => true,
  },
  setup({ props, setupContext, event }) {
    const classes = computed(() => [
      'rs-button',
      `rs-button-status-${props.status}`,
    ]);

    return {
      render: () => (
        <button class={classes.value} onClick={event.emit.click}>
          {(setupContext.slots.default && setupContext.slots.default()) ||
            props.label}
        </button>
      ),
    };
  },
});
