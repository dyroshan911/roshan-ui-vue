<template>
  <app-navigator defaultPath="normal/button" ref="navigator">
    <article class="app-home">
      <section class="app-header">
        <span @click="goHome">roshan-ui-vue</span>
      </section>
      <section class="app-menu">
        <app-menu></app-menu>
      </section>
      <section class="app-content">
        <app-navigator-page />
      </section>
    </article>
  </app-navigator>
</template>

<script lang="ts">
// import { reactive, ref } from 'vue';
import { AppNavigator } from './components/navigator/app-navigator';
import { AppNavigatorPage } from './components/navigator/app-navigator-page';
import AppMenu from './components/app/app-menu.vue';
export default {
  setup() {
    const navigator = AppNavigator.use.ref('navigator');
    return {
      goHome() {
        navigator.value.methods.go('/home');
      }
    }
  },
  components: {
    AppNavigator,
    AppNavigatorPage,
    AppMenu,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
$theme_color: #33cc99;
$headSize: 60px;
$menuSize: 300px;
.app-home {
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $headSize;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: solid 1px #ccc;

    font-style: italic;
    font-size: 25px;
    color: $theme_color;
    user-select: none;
    span {
      cursor: pointer;
    }
    background-color: rgb(244, 242, 234);
    z-index: 99;
  }
  .app-menu {
    position: fixed;
    border-right: solid 1px #ccc;
    bottom: 0;
    width: $menuSize;
    top: $headSize;
    background-color: rgb(244, 242, 234);
  }
  .app-content {
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: $headSize + 20px;
    padding-left: $menuSize + 20px;
  }
}
</style>
