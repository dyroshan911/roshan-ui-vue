<template>
  <app-navigator defaultPath="normal/button">
    <article class="app-home">
      <section class="app-header" :style="{height: HomeConfig.headSize + 'px'}">roshan-ui-vue</section>
      <section class="app-menu">app-menu</section>
      <section class="app-content">
        app-content
        <app-navigator-page />
      </section>
    </article>
  </app-navigator>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AppNavigator } from './components/navigator/app-navigator';
import { AppNavigatorPage } from './components/navigator/app-navigator-page';
const color = ref('green')
const HomeConfig = {
  headSize: 60,
  menuSize: 300
}


</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
.app-home{
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    background: v-bind(color);
  }
  .app-menu {
    position: fixed;
  }
  .app-content {
    min-height: 100vh;
    box-sizing: border-box;
  }
}
</style>
