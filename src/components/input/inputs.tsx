import { designComponent } from 'src/use/designComponent';
import { computed, ref } from 'vue';
import './inputs.scss';

export default designComponent({
  name: 'rs-input',
  props: {
    status: { type: String, default: 'primary' },
  },
  setup(props) {
    const inputValue = ref('');
    const inputRef = ref<null | HTMLInputElement>(null);
    const classes = computed(() => [
      'rs-input',
      `rs-input-status-${props!.status}`,
    ]);
    const methods = {
      clear() {
        inputValue.value = '';
        inputRef.value!.focus();
      },
      focus() {
        inputRef.value!.focus();
      },
    };
    return {
      refer: {
        methods,
        inputValue,
      },
      render: () => (
        <div class={classes.value}>
          <input
            class='rs-input-inner'
            type='text'
            v-model={inputValue.value}
            ref={inputRef}
          />
          <button class='rs-input-clear' onClick={methods.clear}>
            clear
          </button>
        </div>
      ),
    };
  },
});
