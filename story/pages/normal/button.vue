<template>
  <div>
    <rs-button label="test1" @click="click">test</rs-button>
    <h3>状态</h3>
    <rs-button
      v-for="status in ['primary', 'success', 'warn', 'error', 'info']"
      :key="status"
      :label="status"
      :status="status"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'demo-button',
  methods: {
    click: (e: MouseEvent) => {
      console.log(e, 'click');
    },
  },
};
</script>

<style lang="scss"></style>
