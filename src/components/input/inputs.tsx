import { designComponent } from '../../use/designComponent';
import { computed, onMounted, ref } from 'vue';
import './inputs.scss';
console.log('加载了input组件');

export default designComponent({
  name: 'rs-input',
  props: {
    status: { type: String, default: 'primary' },
  },
  emits: {
    focuss: (msg: string) => true,
  },
  setup({ props, event }) {
    const inputValue = ref('');
    const inputRef = ref<null | HTMLInputElement>(null);
    const classes = computed(() => [
      'rs-input',
      `rs-input-status-${props!.status}`,
    ]);
    // event.on.focuss((msg) => console.log(msg));
    onMounted(() => {
      event.emit.focuss('mounted');
    });

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
