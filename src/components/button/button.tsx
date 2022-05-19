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
  setup({ props, setupContext }) {
    const classes = computed(() => [
      'rs-button',
      `rs-button-status-${props.status}`,
    ]);

    return {
      render: () => (
        <button class={classes.value}>
          {(setupContext.slots.default && setupContext.slots.default()) ||
            props.label}
        </button>
      ),
    };
  },
});
