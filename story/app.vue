<template>
  <app-navigator defaultPath="normal/button">
    <article class="app-home">
      <section class="app-header" :style="{ height: HomeConfig.headSize + 'px' }">roshan-ui-vue</section>
      <section class="app-menu" :style="{ width: HomeConfig.menuSize + 'px', top: HomeConfig.headSize + 'px' }">
        <app-menu></app-menu>
      </section>
      <section class="app-content" :style="{ paddingTop: HomeConfig.headSize + 20 + 'px', paddingLeft: HomeConfig.menuSize + 20 + 'px' }">
        <app-navigator-page />
      </section>
    </article>
  </app-navigator>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { AppNavigator } from './components/navigator/app-navigator';
import { AppNavigatorPage } from './components/navigator/app-navigator-page';
import AppMenu from './components/app/app-menu.vue';
const HomeConfig = reactive({
  headSize: 60,
  menuSize: 300,
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
$theme_color: #33cc99;
.app-home {
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
    border-bottom: solid 1px #f4f4f4;

    font-style: italic;
    font-size: 25px;
    color: $theme_color;
  }
  .app-menu {
    position: fixed;
    border-right: solid 1px #f4f4f4;
    bottom: 0;
  }
  .app-content {
    min-height: 100vh;
    box-sizing: border-box;
  }
}
</style>
