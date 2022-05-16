<template>
  <div class="menu-list">
    <ul>
      <li v-for="menuGroup in menus" :key="menuGroup.name">
        <div class="menu-group-name">
          <span>{{ menuGroup.name }}</span>
        </div>
        <ul>
          <li v-for="menu in menuGroup.children" :key="menu.title" @click="handleClickMenu(menu)">
            <div :class="{ 'menu-name': true, 'menu-active': menu.page === navigator.state.route.path }">
              <span>{{ menu.name }}</span>
              <span>{{ menu.title }}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { AppNavigator } from '../navigator/app-navigator';
import { MENUS, Menu } from './menus';
export default {
  name: 'app-menu',
  setup() {
    const navigator = AppNavigator.use.inject();
    return {
      menus: MENUS,
      navigator,
      handleClickMenu(menu: Menu) {
        navigator.methods.go(menu.page);
      },
    };
  },
};
</script>

<style lang="scss">
.menu-list {
  height: 100%;
  overflow: auto;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    .menu-group-name,
    .menu-name {
      font-size: 14px;
      padding: 10px 24px 12px 32px;
      white-space: nowrap;
      cursor: pointer;
      transition: all 100ms linear;
      user-select: none;

      &:hover {
        background-color: rgba(#33cc99, 0.1);
        color: #33cc99;
      }
    }
    .menu-active {
      color: #33cc99;
    }
    .menu-name {
      position: relative;
      & > span {
        &:nth-child(2) {
          font-size: 12px;
          margin-left: 0.5em;
          color: #ccc;
        }
      }
    }
    .menu-group-name {
      padding-left: 24px;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 600;
      color: #33cc99;
    }
  }

  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: -30px;
    width: 30px;
    content: '';
    /* background-color: red; */
    box-shadow: inset 10px 0 -8px #f0f1f2;
  }
}
</style>
