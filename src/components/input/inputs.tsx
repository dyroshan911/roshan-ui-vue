import { computed, defineComponent, ref } from 'vue';

defineComponent({
  name: 'rs-input',
  props: {
    status: { type: String, default: 'primary' },
  },
  setup(props) {
    const inputValue = ref('');
    const inputRef = ref<null | HTMLInputElement>(null);
    const classes = computed(() => ['rs-input', `rs-input-status-${props.status}`]);
    return () => (
      <div class={classes.value}>
        <input type='text' v-model={inputValue.value} ref={inputRef} />
      </div>
    );
  },
});
