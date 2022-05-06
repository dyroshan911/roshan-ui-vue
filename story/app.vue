<template>
  <div>hello word</div>
  <AppNavigator defaultPath="normal/button">
    <app-navigator-page />
  </AppNavigator>
</template>

<script>
import { AppNavigator } from "./components/navigator/app-navigator";
import { AppNavigatorPage } from "./components/navigator/app-navigator-page";
export default {
  name: "app",
  components: {
    AppNavigator,
    AppNavigatorPage,
  },
};
</script>

<style></style>
