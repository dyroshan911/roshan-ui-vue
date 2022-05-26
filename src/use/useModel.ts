import { watch } from 'vue';
import { ref } from 'vue';
export function useModel<T>(getter: () => T, emit: (value: T) => void) {
  const model = ref<T>(getter());
  watch(getter, (val: T) => {
    if (model.value != val) (model.value as T) = val;
  });
  return model;
}
