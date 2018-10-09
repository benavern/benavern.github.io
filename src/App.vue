<template>
  <div id="app-wrapper">
    <app-sidebar id="app-sidebar"></app-sidebar>
    <app-content id="app-content">
      <router-view></router-view>
    </app-content>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar'
import AppContent from './components/AppContent'

export default {
  name: "App",
  components: { AppSidebar, AppContent },
  mounted () {
    this.$store.dispatch('FETCH_USERS')
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}
html {
  font-size: 16px;
}
body {
  font-family: sans-serif;
  color: #333;
  line-height: 1.4;
}

[v-cloak] {
  display: none;
}
</style>

<style lang="scss" scoped>
#app-wrapper {
  display: flex;
  height: 100%;
}
#app-sidebar {
  width: 25%;
  max-width: 400px;
}
#app-content {
  flex: 1;
}
</style>
