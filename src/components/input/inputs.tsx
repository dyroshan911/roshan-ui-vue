import { designComponent } from '../../use/designComponent';
import { computed, onMounted, ref, watch } from 'vue';
import './inputs.scss';
import { useModel } from 'src/use/useModel';
console.log('加载了input组件');

export default designComponent({
  name: 'rs-input',
  props: {
    status: { type: String, default: 'primary' },
    modelValue: { type: [String, Number], default: '' },
  },
  emits: {
    updateModelValue: (val: string | number | undefined) => true,
  },
  setup({ props, event }) {
    // const inputValue = ref(props.modelValue);
    const inputValue = useModel(
      () => props.modelValue,
      event.emit.updateModelValue
    );
    const inputRef = ref<null | HTMLInputElement>(null);
    const classes = computed(() => [
      'rs-input',
      `rs-input-status-${props!.status}`,
    ]);

    // const handler = {
    //   onInput: (e: Event) => {
    //     inputValue.value = (e.target as HTMLInputElement).value;
    //   },
    // };
    // watch(
    //   () => props.modelValue,
    //   (val) => (inputValue.value = val)
    // );

    // watch(
    //   () => inputValue.value,
    //   () => event.emit.updateModelValue(inputValue.value)
    // );

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
            // value={inputValue.value}
            // onInput={handler.onInput}
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
