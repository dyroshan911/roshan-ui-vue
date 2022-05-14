<template>
  <div class="demo-input">
    <rs-input />
    <h3>状态</h3>
    <rs-input
      v-for="item in ['primary', 'success', 'warn', 'error', 'info']"
      :key="item"
      :status="item"
      style="margin-right: 8px; margin-top: 8px"
    />
    <h4>类型提示</h4>
    <rs-input ref="myInput" />
    <button @click="handleClear">out clear</button>
  </div>
</template>

<script lang="ts">
import { Input } from '../../../src';
export default {
  name: 'demo-input',
  setup() {
    debugger;
    const inputRef = Input.use.ref('myInput');
    const handleClear = () => {
      inputRef.value.methods.clear();
    };
    return {
      handleClear,
    };
  },
};
</script>

<style></style>
