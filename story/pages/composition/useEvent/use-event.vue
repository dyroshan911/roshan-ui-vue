<template>
  <div>use event</div>
  <use-event-table class="use-event-table">
    <template v-slot:header>
      <div class="use-table-head-inner">Header</div>
    </template>
    <template v-slot:body>
      <div class="use-table-body-inner">body</div>
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
  .use-table-head,
  .use-table-body {
    width: 100%;
    overflow-x: auto;
  }
  .use-table-head {
    .use-table-head-inner {
      width: 600px;
      height: 60px;
      background-color: #06f6f6;
    }
  }
  .use-table-body {
    height: 300px;
    .use-table-body-inner {
      height: 600px;
      background-color: #f2f2f2;
    }
  }
}
</style>
