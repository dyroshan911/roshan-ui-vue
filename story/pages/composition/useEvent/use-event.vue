<template>
  <div>use event</div>
  <use-event-table class="use-event-table">
    <template v-slot:header>
      <h1>Header</h1>
    </template>
    <template v-slot:body>
      <h1>body</h1>
    </template>
  </use-event-table>
</template>

<script lang="ts">
import { UseEventTable } from './UseEventTable';
export default {
  name: 'demo-use-event',
  components: {
    UseEventTable,
  },
};
</script>

<style lang="scss">
.use-event-table {
  width: 300px;
  .use-event-table-head,
  .use-event-table-body {
    width: 100%;
    overflow-x: auto;
  }
}
</style>
