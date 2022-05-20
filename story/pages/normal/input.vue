<template>
  <div class="demo-input">
    <rs-input v-model="state.text" />
    <h3>状态</h3>
    <rs-input
      v-model="state.text"
      v-for="item in ['primary', 'success', 'warn', 'error', 'info']"
      :key="item"
      :status="item"
      style="margin-right: 8px; margin-top: 8px"
    />
    <h4>类型提示</h4>
    <rs-input ref="myInput" />
    <button @click="clear">out clear</button>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { Input } from '../../../src';
export default {
  name: 'demo-input',
  setup() {
    const inputRef = Input.use.ref('myInput');
    const state = reactive({
      text: 'hello',
    });
    const handler = {
      clear: () => {
        inputRef.value.methods.clear();
      },
    };
    return {
      ...handler,
      state,
    };
  },
};
</script>

<style></style>
