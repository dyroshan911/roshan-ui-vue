<template>
  <div class="demo-input">
    <rs-input />
    <h3>状态</h3>
    <rs-input v-for="item in ['primary', 'success', 'warn', 'error', 'info']" :key="item" :status="item" style="margin-right: 8px; margin-top: 8px" />
  </div>
</template>

<script>
export default {
  name: 'demo-input',
};
</script>

<style></style>
