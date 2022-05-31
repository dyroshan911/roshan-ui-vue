import { watch } from 'vue';
import { ref } from 'vue';
export function useModel<T = any>(getter: () => T, emit: (value: T) => void) {
  const model = ref<T>(getter());
  watch(getter, (val: T) => {
    if (model.value != val) (model.value as T) = val;
  });
  return {
    get value() {
      return model.value as T;
    },
    set value(val: T) {
      (model.value as T) = val;
      emit(val);
    },
  };
}
