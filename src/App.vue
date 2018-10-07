<template>
  <div id="app-wrapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'

export default {
  name: "App",
  components: { AppHeader, AppSidebar }
}
</script>

<style lang="scss">
html {
  font-size: 100%;
}
body {
  font-family: sans-serif;
  color: pink;
}
[v-cloak] {
  display: none;
}
</style>
