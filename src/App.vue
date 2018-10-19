<template>
  <div id="app-wrapper">
    <app-sidebar id="app-sidebar" />
    <app-content id="app-content">
      <router-view />
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
:root {
  --primary: #0084ff;
  --secondary: #bada55;
  --black: black;
  --dark-gray: #999;
  --gray: rgba(0, 0, 0, .2);
  --light-gray: rgba(0, 0, 0, .05);
  --white: white;
}

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
  overflow: hidden;
}
html {
  font-size: 16px;
}
body {
  font-family: sans-serif;
  color: var(--black);
  line-height: 1.4;
}

[v-cloak] {
  display: none;
}

a,
a:visited {
  color: inherit;
  text-decoration: underline;
}
</style>

<style lang="scss" scoped>
#app-wrapper {
  display: flex;
  height: 100%;
}
#app-sidebar {
  width: 25vw;
  max-width: 400px;
}
#app-content {
  flex: 1;
}
</style>
